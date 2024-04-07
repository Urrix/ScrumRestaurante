import { Routes } from '@angular/router';
import { EntregaMeseroComponent } from './entrega-mesero/entrega-mesero.component';
import { MesasReservaComponent } from './mesas-reserva/mesas-reserva.component';
import { MesaCardComponent } from './mesa-card/mesa-card.component';

export const routes: Routes = [
    { path: 'entregaMesero', component: EntregaMeseroComponent},
    { path: 'reservacionMesas', component: MesasReservaComponent}
];
