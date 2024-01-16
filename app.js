import express from "express";
import { PORT  } from './config.js';
import  cors  from 'cors'
import { connectToMongoDb } from './config/mongoDb.js'
import bookRoutes from './routes/bookRoutes.js'





// create express app
const app = express(); 

app.use(express.json());

/// cors 
app.use(cors())

/// connect with mongoose data base 
connectToMongoDb();





app.get('/', (req , res)=>{
    return res.status(200).send("Hello from MERN Stack book ...");
})


// 

    app.use('/books',bookRoutes);

































app.listen(PORT , ()=> {

    console.log(` App is listning on port : ${PORT}`);

})