import { Book } from "../models/Book";

export interface IBookService {
    getAllBooks(): Promise<Book[]>;
    getBookById(bookId: number): Promise<Book | false>;
    createBook(book: Book): Promise<Book>;
    updateBook(book: Book): Promise<Book>;
    deleteBook(bookId: number): Promise<void>;
  }