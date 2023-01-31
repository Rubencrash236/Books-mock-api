package com.mock.booksmockapi.services;

import com.mock.booksmockapi.models.Book;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Objects;
import java.util.Optional;

@Service
public class BookService {
    private final ArrayList<Book> books;

    public BookService() {
        books = new ArrayList<>();
        books.add(new Book(1,"The India Story","Bimal Jalal"));
        books.add(new Book(2,"Listen to Your Heart: The London Adventure","Ruskin Bond"));
        books.add(new Book(3,"Business of Sports: The Winning Formula for Success","Vinit Karnik"));
        books.add(new Book(4,"A Place Called Home","Preeti Shenoy"));
        books.add(new Book(5,"The Struggle for Police Reforms in India","Ex-IPS Prakash Singh"));
    }

    public Book getOne(Integer id) {
        for (Book book: books) {
            if(book.getId().intValue() == id.intValue()){
                return book;
            }
        }
        return null;
    }

    public ArrayList<Book> getAll() {
        return books;
    }

}
