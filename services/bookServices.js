import { Book } from '../models/bookModel.js';





// @desc creating a book function or service 
// @route POST '/books'
// @access Public

    export const createBook = async ( req , res ) => {

    try{
        if(
            !req.body.title || 
            !req.body.author ||
            !req.body.publishYear
        ){
            return 
            res.status(400).send({
                message: 'Send all required fields : title , author , publishYear ',
            })
        }
        const newBook= {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear, 
        }

        const book = await Book.create(newBook);
        // return message to provide frontend that the process are did with success
        return res.status(200).send(book)




    }catch(err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
}






// @desc get all books from db
// @route GET '/books'
// @access Public

    export const getAllBooks = async (req , res)=> {
    try{
        const books = await Book.find();
        return res.status(200).json({
            count:books.length,
            data:books 
        });
    }catch(err){
        console.log(err);
        res.status(500).send({ message: err.message })
    }
}






// @desc get book by id 
// @route GET '/books/:id'
// @access Public

    export const getOneBook = async ( req , res )=> {
    //@important remarque 
    // should notice this : the id that pass to findById() should be an object this why we use destructring 
    const { id } = req.params;
    try{
        const book = await Book.findById(id);
        res.status(200).json(book);
    }catch(err){
        console.log(err);
        res.status(400).send({ message : err.message });
    }
}







// @desc Update book using Id 
// @route PUT '/books/:id'
// @access Public

    export const updateBook = async (req , res )=>{
    const {id} = req.params;
    try{
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ){
            return res.status(400).send({
                message : 'Send all required fields : title , author , publishYear ',
            })
        }

            const result = await Book.findByIdAndUpdate(id , req.body);
            
            if(!result){
                // book not found ( cheking the same things for geting the one book )
                return res.status(404).json( { message : 'Book not found '});
            }
            // return the update book 

            return res.status(200).json(result);
        
    }catch(err){
        console.log(err);
        res.status(400).send( {
            message:err.message,
        })
    }
}







// @desc deleting a book always using id 
// @route DELETE '/books/:id'
// @access Public

    export const deleteBook = async ( req , res )=> {
    const { id } = req.params;
    try{

        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).json( {message : `Book not found with this Id : ${id}`} );
        }
        return res.status(200).send({message : `Book deleted successfully `});
    }catch(err){
        console.log({message : err.message});
        return res.status(400).send({
            message:err.message,
        })
    }
}