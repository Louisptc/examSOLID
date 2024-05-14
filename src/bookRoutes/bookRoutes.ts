import { Router } from 'express';
import { BookController } from '../controllers/bookController.js';

const router = Router();
const bookController = new BookController();

// POST request to create a new book
router.post('/', (req, res) => bookController.createBook(req, res));

// GET request to fetch all books
router.get('/', (req, res) => bookController.getAllBooks(res));

// GET request to fetch a single book by id 
router.get('/:id', (req, res) =>  bookController.getBookById(req, res));

// PUT request to update a book
router.put('/:id', (req, res) => bookController.updateBook(req, res));

// DELETE request to delete a book
router.delete('/:id', (req, res) => bookController.deleteBook(req, res));

export default router;
