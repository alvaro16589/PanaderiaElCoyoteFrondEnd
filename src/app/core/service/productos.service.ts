import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product }  from './../Models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }
  getAllProducts(){
    return this.http.get<Product[]>('http://127.0.0.1:8000/api/producto');
  }
  getProduct(){
    return this.http.get('http://127.0.0.1:8000/api/producto/${id}');
  }
}
