import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBooksComponent} from "./components/list-books/list-books.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";
import {CreateBookComponent} from "./components/create-book/create-book.component";

const routes: Routes = [
  {path: 'create-book', component: CreateBookComponent},
  {path: 'edit-book/:id', component:EditBookComponent},
  {path: 'list-books', component: ListBooksComponent},
  {path: '**', component: ListBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
