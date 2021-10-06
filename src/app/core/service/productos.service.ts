import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product, ProductSave }  from './../Models/product.model'
import { environment } from './../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http: HttpClient
  ) { }
  getAllProducts(){
    return this.http.get<Product[]>(environment.url_api+'/producto');
  }
  getProduct(){
    return this.http.get<Product>('${environment.url_api}/producto/${id}');
  }
  createProduct(product : ProductSave){
    return this.http.post(environment.url_api+'/producto',product);
  }
}
