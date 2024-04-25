import { Component, OnInit } from '@angular/core';
import { MesaCardComponent } from '../mesa-card/mesa-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mesas-reserva',
  standalone: true,
  imports: [MesaCardComponent,
    CommonModule
  ],
  templateUrl: './mesas-reserva.component.html',
  styleUrl: './mesas-reserva.component.css'
})
export class MesasReservaComponent implements OnInit {
  
  array:number[] = [1,2,3,4,5,6,7,8,9,10]
  ngOnInit(): void {
    console.log(this.array)
  }

}
