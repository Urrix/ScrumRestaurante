import { Routes } from '@angular/router';
import { EntregaMeseroComponent } from './entrega-mesero/entrega-mesero.component';
import { MesasReservaComponent } from './mesas-reserva/mesas-reserva.component';
import { MesaCardComponent } from './mesa-card/mesa-card.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'entregaMesero', component: EntregaMeseroComponent},
    { path: 'reservacionMesas', component: MesasReservaComponent},
    { path: 'login', component: LoginComponent }
];
