import { Component, Input } from '@angular/core';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-card-producto',
  standalone: true,
  imports: [],
  templateUrl: './card-producto.component.html',
  styleUrl: './card-producto.component.css'
})
export class CardProductoComponent {
  @Input() products! : Product
}
