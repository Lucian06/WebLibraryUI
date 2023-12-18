import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-page',
  standalone: true,
  imports: [],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent implements OnInit {

  bookId: string;
  book: Book | undefined;

  constructor(private _route: ActivatedRoute, private _service: MainService, private _router: Router) {
    let id = this._route.snapshot.paramMap.get('id')?.toString();

    if (id === undefined)
      this._router.navigate(['/not-found'])

    this.bookId = id!;
  }
  ngOnInit(): void {
    this._service.getBookById(this.bookId).subscribe(
      {

        next: (_book) => this.book = _book,
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      });
  }

}
