import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ShoppingProduct } from '../models/shopping-product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingProductsService {
  private shoppingProductsUrl = 'api/shoppingProducts';
 
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ShoppingProduct[]> {
    return this.http.get<ShoppingProduct[]>(this.shoppingProductsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
