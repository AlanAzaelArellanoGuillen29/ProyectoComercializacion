import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { DetalletarjetaComponent } from './detalletarjeta/detalletarjeta.component';



@NgModule({
  declarations: [
    ServiciosComponent,
    DetalletarjetaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Modulo1Module { }
