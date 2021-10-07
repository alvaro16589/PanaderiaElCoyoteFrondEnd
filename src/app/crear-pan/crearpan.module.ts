import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearpanRoutingModule } from './crearpan-routing.module';
import { CrearPanComponent } from './components/crear-pan.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CrearPanComponent,
  ],
  imports: [
    CommonModule,
    CrearpanRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class CrearpanModule { }
