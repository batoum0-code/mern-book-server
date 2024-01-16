// connect to data base 
import mongoose from 'mongoose'
import { mongoDBURL } from '../config.js';


    export const connectToMongoDb =() =>{ mongoose
    .connect(mongoDBURL)
    .then( ()=> {
    console.log('HADCHI connecter a m3elm 😂 ...')
    }).catch((err)=>{
    console.log(`Hadchi makhdamch a m3lem ... : ${err.message}`);
    });
    }


