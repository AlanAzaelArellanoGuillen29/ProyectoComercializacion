import { Component, OnInit } from '@angular/core';
import {TarjetasServices} from '../../Services/tarjetas.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  recuperatarjetas: any [] = [];
  constructor(private tarjetasservices: TarjetasServices,
              private ruta: Router) { }

  ngOnInit(): void {
    this.recuperatarjetas = this.tarjetasservices.gettarjetas();
    console.log(this.recuperatarjetas);
  }
  recuperarid(i: number){
    console.log(i);
    this.ruta.navigate(['detalletarjeta', i]);
  }
}
