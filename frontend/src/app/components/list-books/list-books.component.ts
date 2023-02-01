import { Component } from '@angular/core';
import {ListbookService} from "./listbook.service";
import {Router} from "@angular/router";
import Book from "../models/Book";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  books: Book[] = [];

  constructor(private listBookService: ListbookService, private router: Router) {
  }

  ngOnInit(): void {
    this.listBookService.getAllBooks().subscribe({
      complete: () => {},
      next: (response) => {
        this.books = response;
        console.log(response);
      }
    });
  }

  delete(id: number): void {
    this.listBookService.delete(id).subscribe({
      complete: () => {},
      next: (response) => {
        window.alert(`${response.name} deleted successfully`);
      }
    });
  }

  register(): void {
    this.router.navigate(['/create-book']);
  }

  edit(id: number): void {
    this.router.navigate(['/edit-book', id]);
  }

}
