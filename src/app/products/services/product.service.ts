import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'; 

import { Product } from '../models/product.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly SERVER_URL = 'http://localhost:3000/';
  readonly PRODUCTS_URL = `${this.SERVER_URL}products`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCTS_URL);
  }
}
