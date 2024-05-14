import { Request, Response } from 'express';
import { LibraryService } from '../services/libraryService.js';

export class BookController {
    private libraryService: LibraryService;

    constructor() {
        this.libraryService = new LibraryService();
    }

    // Create a new book
    public async createBook(req: Request, res: Response) {
        try {
            const { title, author, publishedDate } = req.body;  
            const book = await this.libraryService.addBook(0, title, author, new Date(publishedDate)); 
            res.status(201).json(book);
        } catch (error: unknown) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
    
    // Get all books
    public async getAllBooks(res: Response) {
        try {
            const books = await this.libraryService.getAllBooks();
            res.json(books);
        } catch (error: unknown) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    // Get a book by its ID
    public async getBookById(req: Request, res: Response) {
        try {
            const book = await this.libraryService.getBook(Number(req.params.id));
            if (book) {
                res.json(book);
            } else {
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (error: unknown) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    // Update book details
    public async updateBook(req: Request, res: Response) {
        try {
            const { title, author, publishedDate } = req.body;
            const book = await this.libraryService.updateBookDetails(parseInt(req.params.id), title, author, new Date(publishedDate));
            res.json(book);
        } catch (error: unknown) {
            res.status(500).json({ message: (error as Error).message });
        }
    }

    // Delete a book
    public async deleteBook(req: Request, res: Response) {
        try {
            await this.libraryService.removeBookFromLibrary(Number(req.params.id));
            res.status(204).send();
        } catch (error: unknown) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}
