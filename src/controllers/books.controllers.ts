import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

export class BooksController {

    createBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        return res.status(201).json(booksServices.createBook(req.body.name, req.body.pages, req.body.category));
    }

    getBooks(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        return res.status(200).json(booksServices.getBooks());
    }

    getOneBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        return res.status(200).json(booksServices.getOneBook(req.params.id));
    }

    updateBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        return res.status(200).json(booksServices.updateBook(req.params.id, req.body));
    }

    deleteBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices();

        return res.status(204).json(booksServices.deleteBook(req.params.id));
    }
}