import { IBookService } from "../interfaces/IBookService.js";
import { Book } from "../models/Book.js";

/**
 * Service class for managing library operations.
 */
export class LibraryService {
    private bookService: IBookService;

  /**
   * Constructs a new instance of the LibraryService class.
   */
  constructor(bookService: IBookService) {
    this.bookService = bookService;
  }

  /**
   * Adds a new book to the library.
   * @param bookId - The ID of the book.
   * @param title - The title of the book.
   * @param author - The author of the book.
   * @param publishedDate - The published date of the book.
   * @returns A Promise that resolves when the book is added successfully.
   */
  async addBook(
    bookId: number,
    title: string,
    author: string,
    publishedDate: Date
  ): Promise<void> {
    const existingBook = await this.bookService.getBookById(bookId);
    let book = new Book(bookId, title, author, publishedDate);
    if (!existingBook) {
      await this.bookService.createBook(book);
    } else {
      console.log("Book already exists.");
    }
  }

  /**
   * Removes a book from the library.
   * @param bookId - The ID of the book to be removed.
   * @returns A Promise that resolves when the book is removed successfully.
   */
  async removeBookFromLibrary(bookId: number): Promise<void> {
    await this.bookService.deleteBook(bookId);
  }

  /**
   * Updates the details of a book in the library.
   * @param bookId - The ID of the book to be updated.
   * @param title - The updated title of the book.
   * @param author - The updated author of the book.
   * @param publishedDate - The updated published date of the book.
   * @returns A Promise that resolves when the book details are updated successfully.
   */
  async updateBookDetails(
    bookId: number,
    title: string,
    author: string,
    publishedDate: Date
  ): Promise<void> {
    let book = new Book(bookId, title, author, publishedDate);
    await this.bookService.updateBook(book);
  }
  
  /**
   * Retrieves all books in the library.
   * @returns A Promise that resolves with an array of all books in the library.
   */
  async getAllBooks(): Promise<Book[]> {
    return await this.bookService.getAllBooks();
  }
  /**
   * Retrieves a book from the library by its ID.
   * @param bookId - The ID of the book to retrieve.
   * @returns A Promise that resolves with the book matching the specified ID.
   */
  async getBook(bookId: number): Promise<Book | null> {
    const book = await this.bookService.getBookById(bookId);
    if (book === false) {
      return null; // Return null if the book is not found
    }
    return book;
  }
}
