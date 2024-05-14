import { Router } from 'express';
import { BookController } from '../controllers/bookController.js';
import { LibraryService } from '../services/libraryService.js';
import { BookService } from '../services/bookService.js'; // Import the BookService

const router = Router();
const bookService = new BookService(); // Create an instance of the BookService
const libraryService = new LibraryService(bookService); // Pass the BookService instance to the LibraryService constructor
const bookController = new BookController(libraryService);

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
