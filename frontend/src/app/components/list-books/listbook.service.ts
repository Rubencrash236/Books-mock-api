import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import Book from "../models/Book";

@Injectable({
  providedIn: 'root'
})
export class ListbookService {

  private urlEndpoint: string = "http://localhost:8080/api/Books/";
  private httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

  constructor(private http: HttpClient) { }

  public getAllBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.urlEndpoint).pipe(
      catchError(e => {
        window.alert(`Error:${e.status}, ${e.error}`);
        return throwError(() => e);
      }));
  }

  public delete(id:number): Observable<Book> {
    return this.http.delete<Book>(`${this.urlEndpoint}${id}`).pipe(
      catchError(e => {
        window.alert(`Error:${e.status}, ${e.error}`);
        return throwError(() => e);
      })
    );
  }

  public edit(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.urlEndpoint}${book.id}`,book).pipe(
      catchError(e => {
        window.alert(`Error:${e.status}, ${e.error}`);
        return throwError(() => e);
      })
    );
  }

  public create(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.urlEndpoint}`, book).pipe(
      catchError(e => {
        window.alert(`Error:${e.status}, ${e.error}`);
        return throwError(() => e);
      })
    );
  }

  public getOne(id: number): Observable<Book>{
    return this.http.get<Book>(`${this.urlEndpoint}${id}`).pipe(
      catchError(e=> {
        window.alert(`Error:${e.status}, ${e.error}`);
        return throwError(() => e);
      })
    );
  }
}
