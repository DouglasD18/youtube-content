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

}
