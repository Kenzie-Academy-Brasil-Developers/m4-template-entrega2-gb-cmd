import express, { json } from "express";
import { booksRouter } from "./Routes/books.routes";
import { HandleErrors } from "./errors/HandleErrors.middleware";

export const app = express();

app.use(json());
app.use("/books", booksRouter);
app.use(HandleErrors.execute);