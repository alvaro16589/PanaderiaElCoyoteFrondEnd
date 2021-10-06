import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearpanRoutingModule } from './crearpan-routing.module';
import { CrearPanComponent } from './components/crear-pan.component';


@NgModule({
  declarations: [
    CrearPanComponent,
  ],
  imports: [
    CommonModule,
    CrearpanRoutingModule
  ]
})
export class CrearpanModule { }
