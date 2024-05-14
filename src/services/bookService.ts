import database from "../db/db.js";
import { Book } from "../models/Book.js";
import { Book as IBook } from "../types/Book.js";

export default class BookService {
  // Retrieves all books from the database
  public async getAllBooks(): Promise<Book[]> {
    const query = "SELECT * FROM books";
    const res = await database.query(query);
    return res.rows.map(
      (row: IBook) =>
        new Book(row.id, row.title, row.author, new Date(row.publishedDate))
    );
  }

  // Retrieves a book by its ID from the database
  public async getBookById(bookId: number): Promise<Book | false> {
    const query = "SELECT * FROM books WHERE id = $1";
    const res = await database.query(query, [bookId]);
    if (res.rows.length > 0) {
      const row = res.rows[0];
      return new Book(
        row.id,
        row.title,
        row.author,
        new Date(row.published_date)
      );
    }
    return false;
  }
  
  // Creates a new book in the database
  public async createBook(book: Book): Promise<Book> {
    const query =
      "INSERT INTO books (title, author, published_date) VALUES ($1, $2, $3) RETURNING *";
    const values = [book.title, book.author, book.publishedDate];
    const res = await database.query(query, values);
    const row = res.rows[0];
    return new Book(
      row.id,
      row.title,
      row.author,
      new Date(row.published_date)
    );
  }

  // Updates a book in the database
  public async updateBook(book: Book): Promise<Book> {
    const query =
      "UPDATE books SET title = $1, author = $2, published_date = $3 WHERE id = $4 RETURNING *";
    const values = [book.title, book.author, book.publishedDate, book.id];
    const res = await database.query(query, values);
    const row = res.rows[0];
    return new Book(
      row.id,
      row.title,
      row.author,
      new Date(row.published_date)
    );
  }

  // Deletes a book from the database
  public async deleteBook(bookId: number): Promise<void> {
    const query = "DELETE FROM books WHERE id = $1";
    await database.query(query, [bookId]);
  }
}
