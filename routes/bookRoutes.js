import express from "express";
import { createBook , getAllBooks , updateBook , deleteBook , getOneBook } from "../services/bookServices.js";
const router = express.Router();


// '/books'

router.route('/').post(createBook).get(getAllBooks)
router.route('/:id').put(updateBook).delete(deleteBook).get(getOneBook)

export default router;