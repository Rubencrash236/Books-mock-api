import { Component } from '@angular/core';
import Book from "../models/Book";
import {ListbookService} from "../list-books/listbook.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
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

  update(): void {
    this.listBookService.edit(this.book).subscribe({
      complete: ()=> {},
      next: (response)=> {
        window.alert(`The book ${response.name} updated successfully`);
        this.router.navigate(['list-books']);
      }
    });
  }

}
