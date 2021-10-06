import { Component, OnInit } from '@angular/core';
import { Product, ProductSave } from './../../core/Models/product.model';
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
  crearProduct(){
    const newProduct :ProductSave={
      nombre:'lo que sea',
      estado: 'activo',
      imagen: 'pan_1.jpg',
      descripcion: 'esta es un item de prueba',
      cantidad: 110,
      idprecio: 1,
      idtipo:1
    }

    this.productosService.createProduct(newProduct).subscribe(
      product=>{
        console.log(product);
      }
    )
  }
}
