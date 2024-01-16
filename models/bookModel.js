import {Schema , model } from 'mongoose';


const bookSchema = Schema( {
    title:{
        type:String,
        require:true,
    },
    author:{
        type:String,
        require:true,
    },
    publishYear:{
        type:Number,
        require:true,
    },
},
{
    timestamps:true,
}

);



export const Book = model("book" , bookSchema);