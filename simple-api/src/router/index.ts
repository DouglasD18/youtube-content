import { Router } from "express";
import { BooksModel } from "../model";
import { BooksServices } from "../service";
import { BooksController } from "../controller";

const router = Router();

const model = new BooksModel();
const services = new BooksServices(model);
const controller = new BooksController(services);

router.post("/books", (request, response) => {
  return controller.add(request, response);
});

export default router;
