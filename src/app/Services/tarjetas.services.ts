import {Injectable} from '@angular/core';

@Injectable()
export class TarjetasServices {
  private objetotarjetas: Interfacetarjeta [] = [
    {
      idtarjetas: '0',
      imagen2: 'assets/Mouse.jpg',
      titulo2: 'Mouse',
      descripcion2: 'Bruja Escarlata y Visión',
      icono2: 'assets/icono.jpg',
    },
    {
      idtarjetas: '1',
      imagen2: 'assets/TecladoHavit.jpg',
      titulo2: 'Teclado',
      descripcion2: 'Scarlet Witch y Visión',
      icono2: 'assets/icono.jpg',
    },
    {
      idtarjetas: '2',
      imagen2: 'assets/Audifonos.jpg',
      titulo2: 'Audifonos',
      descripcion2: 'WandaVisión',
      icono2: 'assets/icono.jpg',
    }
  ];
  gettarjetas(): any {
    return this.objetotarjetas;
  }
  recuperarid(i: number): Interfacetarjeta{
    return this.objetotarjetas[i];
  }
}
interface Interfacetarjeta {
  idtarjetas: string;
  imagen2: string;
  titulo2: string;
  descripcion2: string;
  icono2: string;
}
