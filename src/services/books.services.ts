import { booksDatabase, generateId } from "../database/database";
import { IBooks, TUpdatedBook } from "../interfaces/books.interface";

export class BooksServices {

    createBook(name: string, pages: number, category: string): IBooks {
        const newBook: IBooks = {
            id: generateId(),
            name,
            pages,
            category,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        booksDatabase.push(newBook);
        
        return newBook;
    }

    getBooks(): IBooks[] {
        return booksDatabase;
    }

    getOneBook(id: string): IBooks {
        const bookById = booksDatabase.find(book => book.id === Number(id)) as IBooks;

        return bookById;
    }

    updateBook(id: string, body: TUpdatedBook): IBooks {
        const findBook = booksDatabase.find(book => book.id === Number(id)) as IBooks;

        const newBook = {...findBook, ...body, updatedAt: new Date()};

        const bookIndex = booksDatabase.findIndex(book => book.id === Number(id));

        booksDatabase.splice(bookIndex, 1 , newBook);

        return newBook;
    }

    deleteBook(id: string): void {
        const bookIndex = booksDatabase.findIndex(book =>  book.id === Number(id));

        booksDatabase.splice(bookIndex, 1);
    }
}