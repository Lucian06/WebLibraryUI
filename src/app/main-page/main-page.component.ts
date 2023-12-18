import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { MatTableModule } from '@angular/material/table';
import { MainService } from '../services/main.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatTableModule, HttpClientModule, CommonModule, RouterOutlet, MatToolbarModule],
  providers: [MainService],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})

export class MainPageComponent implements OnInit {

  constructor(private _service: MainService, private _router: Router) { }

  ngOnInit(): void {

    this._service.getAllBooks().subscribe(
      {

        next: (books) => this.books = books,
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }

  books: Book[] = [];
  clickedRows = new Set<Book>();
  displayedColumns: string[] = ['id', 'title', 'cover'];

  goToItems(book: Book) {
    this._router.navigate(['/book/' + book.id])
  }
}
