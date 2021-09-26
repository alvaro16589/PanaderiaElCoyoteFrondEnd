import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/core/service/productos.service';
import { Product } from './../../core/Models/product.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: Product[] = [];

  constructor(
    private productosService:ProductosService
  ) { }

  ngOnInit(){
    //this.productos = this.productosService.getAllProducts();
    this.fetchProductos();

  }
  fetchProductos(){
    this.productosService.getAllProducts().subscribe(
      product=>{
        this.productos=product;
        console.log(product);
      }
    )
  }

}
