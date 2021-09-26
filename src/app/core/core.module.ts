import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from './service/productos.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
    providers: [//comparte a todos, solo se hace una en providers y no en imports
      ProductosService,
      
    ]
})
export class CoreModule { }
