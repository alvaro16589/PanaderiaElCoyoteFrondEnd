import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPanComponent } from './components/crear-pan.component';

const routes: Routes = [
  {
    path: '',
    component:CrearPanComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearpanRoutingModule { }
