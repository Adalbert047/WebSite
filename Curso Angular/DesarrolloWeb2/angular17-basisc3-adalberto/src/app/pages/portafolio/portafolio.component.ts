import { Component } from '@angular/core';
import { MostrarPortafolioComponent } from './mostrar-portafolio/mostrar-portafolio.component';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [MostrarPortafolioComponent],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

}
