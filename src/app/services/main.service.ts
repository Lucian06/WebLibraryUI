import { Injectable } from '@angular/core';

import { Book } from '../models/book';
import { Observable, take, tap } from 'rxjs';
import { ApiEndPoint } from '../shared/enums/http-enums';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private _http: HttpClient) { }
  private readonly baseApiUrl = environment.baseUrl;

  getAllBooks(): Observable<Book[]> {
    return this._http.get<Book[]>(`${this.baseApiUrl}${ApiEndPoint.GET_ALL_BOOKS}`);
  }

  getBookById(id: string): Observable<Book> {

    let queryParams = new HttpParams();
    queryParams = queryParams.append("bookId", id);

    return this._http.get<Book>(`${this.baseApiUrl}${ApiEndPoint.GET_BOOK_BY_ID}`, { params: queryParams });
  }
}
