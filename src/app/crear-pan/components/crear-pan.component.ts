import { Component, OnInit } from '@angular/core';
import { Tipo } from "./../../core/Models/tipo.model"
import { Precio } from "./../../core/Models/precio.model"
import { TipoService } from 'src/app/core/service/tipo.service';
import { PrecioService } from 'src/app/core/service/precio.service';
@Component({
  selector: 'app-crear-pan',
  templateUrl: './crear-pan.component.html',
  styleUrls: ['./crear-pan.component.css']
})
export class CrearPanComponent implements OnInit {
  tipos: Tipo[] = [];
  precios: Precio[] = [];
  constructor(
    private tipoService:TipoService,
    private precioService:PrecioService
  ) { }

  ngOnInit(): void {
    this.fetchTipos();//inicializando la ejecucion de la funcion al cargar la página
    this.fetchPrecios();//inicializando la ejecucion de la funcion al cargar la página
  }
  fetchTipos(){
    this.tipoService.getAllTypes().subscribe(
      tipo=>{
        this.tipos=tipo;
        console.log(tipo);
      }
    )
  }
  fetchPrecios(){
    this.precioService.getAllPrecios().subscribe(
      precio=>{
        this.precios=precio;
        console.log(precio);
      }
    )
  }
}

