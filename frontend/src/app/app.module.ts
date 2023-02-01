import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './components/list-books/list-books.component';
import {HttpClientModule} from "@angular/common/http";
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import {FormsModule} from "@angular/forms";
import { PeakBookComponent } from './components/peak-book/peak-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    EditBookComponent,
    CreateBookComponent,
    PeakBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
