import { Router } from "express";
import { BooksController } from "../controllers/books.controllers";
import { IsTheBookIdValid } from "../middlewares/isTheBookIdValid.middleware";
import { IsBookRegistered } from "../middlewares/IsBookRegistered.middleware";

export const booksRouter = Router();

const booksController = new BooksController();

booksRouter.post("/", IsBookRegistered.execute, booksController.createBook);

booksRouter.get("/", booksController.getBooks);

booksRouter.get("/:id", IsTheBookIdValid.execute, booksController.getOneBook);

booksRouter.patch("/:id", IsTheBookIdValid.execute, IsBookRegistered.execute, booksController.updateBook);

booksRouter.delete("/:id", IsTheBookIdValid.execute, booksController.deleteBook);