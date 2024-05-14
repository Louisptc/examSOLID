import { Book } from './Book';

export class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(bookId: number): void {
        this.books = this.books.filter(book => book.id !== bookId);
    }

    listBooks(): Book[] {
        return this.books;
    }
}
