import { Book } from './Book';

/**
 * Represents a library that contains a collection of books.
 */
export class Library {
    private books: Book[] = [];

    /**
     * Creates a new instance of the Library class.
     * @param books - An array of books to initialize the library with. Defaults to an empty array.
     */
    constructor(books: Book[] = []) {
        this.books = books;
    }

    /**
     * Retrieves all the books in the library.
     * @returns An array of books in the library.
     */
    getBooks(): Book[] {
        return this.books;
    }

    /**
     * Sets the books in the library.
     * @param books - An array of books to set in the library.
     */
    setBooks(books: Book[]): void {
        this.books = books;
    }
}
