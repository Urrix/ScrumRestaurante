import { Component } from '@angular/core';
import { MesaCardComponent } from '../mesa-card/mesa-card.component';

@Component({
  selector: 'app-mesas-reserva',
  standalone: true,
  imports: [MesaCardComponent],
  templateUrl: './mesas-reserva.component.html',
  styleUrl: './mesas-reserva.component.css'
})
export class MesasReservaComponent {

}
