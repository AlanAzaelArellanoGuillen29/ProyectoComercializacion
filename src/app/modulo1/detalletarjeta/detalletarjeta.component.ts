import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TarjetasServices} from '../../Services/tarjetas.services';

@Component({
  selector: 'app-detalletarjeta',
  templateUrl: './detalletarjeta.component.html',
  styleUrls: ['./detalletarjeta.component.css']
})
export class DetalletarjetaComponent implements OnInit {
  informacionIndividual: any = {};
  constructor(private activaruta: ActivatedRoute,
              private tarjetasServicio: TarjetasServices) {
    this.activaruta.params.subscribe(params => {
      console.log(params.id);
      this.informacionIndividual = this.tarjetasServicio.recuperarid(params.id);
    });
  }

  ngOnInit(): void {
  }

}
