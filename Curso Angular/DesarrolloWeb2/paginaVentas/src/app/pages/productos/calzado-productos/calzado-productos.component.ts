import { Component } from '@angular/core';
import { CardProductoComponent } from '../../../components/card-producto/card-producto.component';

@Component({
  selector: 'app-calzado-productos',
  standalone: true,
  imports: [CardProductoComponent],
  templateUrl: './calzado-productos.component.html',
  styleUrl: './calzado-productos.component.css'
})
export class CalzadoProductosComponent {
  items = [
    
  ]
}
