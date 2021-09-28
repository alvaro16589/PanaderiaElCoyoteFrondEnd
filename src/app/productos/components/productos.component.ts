import { Component, OnInit } from '@angular/core';
import { Product } from './../../core/Models/product.model';
import { ProductosService } from 'src/app/core/service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Product[] = [];
  constructor(
    private productosService:ProductosService
  ) {
    
   }

  ngOnInit(){
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
