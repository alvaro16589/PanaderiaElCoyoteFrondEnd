import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Precio }  from './../Models/precio.model'
import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PrecioService {

  constructor(
    private http: HttpClient
  ) { }
  getAllPrecios(){
    return this.http.get<Precio[]>(environment.url_api+'/precio');
  }
  getPrecio(){
    return this.http.get<Precio>('${environment.url_api}/precio/${id}');
  }
}
