import { Component } from '@angular/core';
import {ListbookService} from "../list-books/listbook.service";
import {ActivatedRoute, Router} from "@angular/router";
import Book from "../models/Book";

@Component({
  selector: 'app-peak-book',
  templateUrl: './peak-book.component.html',
  styleUrls: ['./peak-book.component.css']
})
export class PeakBookComponent {
  constructor(private listBookService:ListbookService, private router: Router,
              private activatedRoute: ActivatedRoute) {}
  book!: Book;
  ngOnInit():void {
    let id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.listBookService.getOne(+id).subscribe({
      complete:()=>{},
      next:(response)=>{
        this.book = response;
      }
    })
  }

  public goBack(): void {
    this.router.navigate(['/list-books']);
  }
}
