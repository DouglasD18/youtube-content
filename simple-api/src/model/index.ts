import fs from "fs/promises";
import path from "path";
import { Book } from "../types";

export class BooksModel {
  constructor() {}

  private async read() {
    const books = await fs.readFile(path.join(__dirname, "./books.json"), "utf-8");
    return JSON.parse(books);
  }

  private async write(books: any) { 
    await fs.writeFile(path.join(__dirname, "./books.json"), JSON.stringify(books));
  }

  async add(book: Book) {
    const books = await this.read();
    books.push(book);
    await this.write(books);
  }

  async list() {  
    const books = await this.read();
    return books;
  }
}