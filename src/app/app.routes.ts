import {RouterModule, Routes} from '@angular/router';
import {ServiciosComponent} from './modulo1/servicios/servicios.component';
import {DetalletarjetaComponent} from './modulo1/detalletarjeta/detalletarjeta.component';

// @ts-ignore
const RUTAS: Routes = [
  {path: 'Servicios', component: ServiciosComponent},
  {path: 'detalletarjeta/:id', component: DetalletarjetaComponent},
];
export const ROUTING  = RouterModule.forRoot(RUTAS);
