import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from './service/productos.service';
import { TipoService } from './service/tipo.service';
import { PrecioService } from './service/precio.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
    providers: [//comparte a todos, solo se hace una en providers y no en imports
      ProductosService,
      TipoService,
      PrecioService
    ]
})
export class CoreModule { }
