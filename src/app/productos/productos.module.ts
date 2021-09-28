import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductosComponent } from './components/productos.component';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule, 
    MaterialModule ,  
  ]
})
export class ProductosModule { }
