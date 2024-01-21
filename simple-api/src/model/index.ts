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

  async update(title: string, book: Book) {
    const books = await this.read();
    const index = books.findIndex((book: Book) => book.title === title);
    if (index === -1) {
      throw new Error("Book not found");
    }
    books[index] = book;
    await this.write(books);
  }

}