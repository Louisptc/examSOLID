import BookService from './bookService';
import { Book } from '../models/Book';

export class LibraryService {
    private bookService: BookService;
    
    constructor() {
        this.bookService = new BookService();
    }
    
    async addBook(bookId: number, title: string, author: string, publishedDate: Date): Promise<void> {
        // Suppose we want to perform some checks or additional logic before adding a book
        // Example: Check if the book already exists
        const existingBook = await this.bookService.getBookById(bookId);
        let book = new Book(bookId, title, author, publishedDate);
        if (!existingBook) {
            await this.bookService.createBook(book);
        } else {
            console.log('Book already exists.');
        }
    }
    
    async removeBookFromLibrary(bookId: number): Promise<void> {
        // Additional logic before deleting a book could be added here
        await this.bookService.deleteBook(bookId);
    }

    async updateBookDetails(bookId: number, title: string, author: string, publishedDate: Date): Promise<void> {
        // Additional logic before updating a book could be added here
        let book = new Book(bookId, title, author, publishedDate);
        await this.bookService.updateBook(book);
    }
    
    async getAllBooks(): Promise<Book[]> {
        return await this.bookService.getAllBooks();
    }
}
