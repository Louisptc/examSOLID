import { Book as IBook } from "../types/Book";

/**
 * Represents a book.
 */
export class Book implements IBook {
    /**
     * Creates a new instance of the Book class.
     * @param id - The unique identifier of the book.
     * @param title - The title of the book.
     * @param author - The author of the book.
     * @param publishedDate - The date when the book was published.
     */
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public publishedDate: Date
    ) {}
}
