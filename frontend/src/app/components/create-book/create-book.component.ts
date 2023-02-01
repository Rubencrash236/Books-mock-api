import { Component } from '@angular/core';
import Book from "../models/Book";
import {ListbookService} from "../list-books/listbook.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent {
  book = new Book();
  constructor(private listBookService:ListbookService, private router: Router) {
  }
  createBook(): void {
    this.listBookService.create(this.book).subscribe({
      complete: () => {},
      next: (response) => {
        window.alert(`The book ${response.name} created successfully`);
        this.router.navigate(['/list-books']);
      }
    });
  }
}
