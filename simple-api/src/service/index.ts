import { BooksModel } from "../model";

export class BooksServices {
  constructor(private model: BooksModel) {}

  async add(book: any) {
    const fields = ["author", "title", "price"];

    fields.forEach((field) => { 
      if (!book[field]) {
        throw new Error(`Missing field ${field}`);
      }
    });

    await this.model.add(book);
  }

  async list() {
    const books = await this.model.list();
    return books;
  }

  async update(title: string, book: any) {
    const fields = ["author", "title", "price"];

    fields.forEach((field) => { 
      if (!book[field]) {
        throw new Error(`Missing field ${field}`);
      }
    });

    await this.model.update(title, book);
  }

  async delete(title: string) {
    await this.model.delete(title);
  }

}
