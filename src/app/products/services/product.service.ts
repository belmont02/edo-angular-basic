import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IProduct } from '../models/product.model';
import { HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators'; // Important! Be sure to connect operators


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly SERVER_URL = 'http://localhost:3000/';
  readonly PRODUCTS_URL = `${this.SERVER_URL}products`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.PRODUCTS_URL).pipe(
      catchError(err => {
        throw new Error('Error in getProducts. Details: ' + err);
      })
    );
  }

  updateRating(product: IProduct): Observable<IProduct> {
    return this.http.put(`${this.PRODUCTS_URL}/${product.id}`, product).pipe(
      catchError(err => {
        throw new Error('Error in updateRating. Details: ' + err);
      })
    );
  }
}
