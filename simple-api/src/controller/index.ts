import { Request, Response } from "express";
import { BooksServices } from "../service";

export class BooksController {
  constructor(private services: BooksServices) {}

  async add(req: Request, res: Response) {
    const book = req.body;

    try {
      await this.services.add(book);

      return res.status(201).json(book);
    } catch (error) {
      if (error instanceof Error && error.message.includes("Missing field")) {
        return res.status(400).send(error.message);
      }

      return res.status(500).json(error);
    }
  }

  async list(_req: Request, res: Response) {
    try {
      const books = await this.services.list();

      return res.status(200).json(books);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req: Request, res: Response) {
    const { title } = req.params;
    const book = req.body;

    try {
      await this.services.update(title, book);

      return res.status(200).json(book);
    } catch (error) {
      if (error instanceof Error && error.message === "Book not found") {
        return res.status(404).send(error.message);
      }

      return res.status(500).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    const { title } = req.params;

    try {
      await this.services.delete(title);

      return res.status(204).send();
    } catch (error) {
      if (error instanceof Error && error.message === "Book not found") {
        return res.status(404).send(error.message);
      }

      return res.status(500).json(error);
    }
  }
}