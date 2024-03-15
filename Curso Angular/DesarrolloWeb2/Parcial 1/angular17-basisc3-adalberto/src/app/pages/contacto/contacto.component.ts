import { Component } from '@angular/core';
import { MostrarContactoComponent } from './mostrar-contacto/mostrar-contacto.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MostrarContactoComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
