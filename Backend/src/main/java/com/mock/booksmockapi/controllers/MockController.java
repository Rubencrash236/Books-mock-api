package com.mock.booksmockapi.controllers;

import com.mock.booksmockapi.models.Book;
import com.mock.booksmockapi.services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/Books/")
@RequiredArgsConstructor
public class MockController {
    private final BookService bookService;

    @PostMapping("/")
    public ResponseEntity<?> createBook(@RequestBody Book newBook){
        if(newBook.getName() != null)
            return new ResponseEntity<>(newBook, HttpStatus.CREATED);
        return new ResponseEntity<>("Book name must be specified", HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllBooks() {
        return new ResponseEntity<>(bookService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOneBook(@PathVariable Integer id){
        Book book = bookService.getOne(id);
        if(book != null){
            return new ResponseEntity<>(book, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateBook(@RequestBody Book updateBook,@PathVariable Integer id){
        if(bookService.getOne(id) != null){
            return new ResponseEntity<>(updateBook, HttpStatus.OK);
        }
        return new ResponseEntity<>("Entity not found", HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBook(@PathVariable Integer id) {
        if(bookService.getOne(id) != null) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>("Entity not found", HttpStatus.NOT_FOUND);
    }
}
