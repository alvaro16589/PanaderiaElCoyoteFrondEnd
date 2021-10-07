import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Tipo }  from './../Models/tipo.model'
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(
    private http: HttpClient
  ) { }
  getAllTypes(){
    return this.http.get<Tipo[]>(environment.url_api+'/tipo');
  }
  getType(){
    return this.http.get<Tipo>('${environment.url_api}/tipo/${id}');
  }
 /* createProduct(product : ProductSave){
    return this.http.post(environment.url_api+'/producto',product);
  }*/
}
