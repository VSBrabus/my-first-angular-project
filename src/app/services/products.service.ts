import { HttpClient } from '@angular/common/http';
import { Product } from '../product-page/product/product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  productList: Product[] = [];

  fetchProducts():  Observable<Product[]> {
    const url = '/assets/data/products.json';
    return this.http.get<Product[]>(url)
  }
}