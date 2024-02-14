import { Component } from '@angular/core';
import { MostrarBotonesComponent } from './mostrar-botones/mostrar-botones.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MostrarBotonesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  
}
