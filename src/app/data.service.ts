import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProductData(): Observable<Product[]>{
    const productsUrl = 'https://fakestoreapi.com/products';
    return this.http.get<Product[]>(productsUrl)
  }
}
