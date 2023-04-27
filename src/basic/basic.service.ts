import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicService {
  private books = [
    { id: 1, name: 'Book 1', type: 'type1' },
    { id: 2, name: 'Book 2', type: 'type2' },
  ];
  getBooks(type?: 'type1' | 'type2') {
    if (type) {
      return this.books.filter((book) => book.type === type);
    }
    return this.books;
  }
}
