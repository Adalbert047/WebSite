import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interface/product';
import { CardProductoComponent } from '../../../components/card-producto/card-producto.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mujer-productos',
  standalone: true,
  imports: [CardProductoComponent, RouterOutlet],
  templateUrl: './mujer-productos.component.html',
  styleUrl: './mujer-productos.component.css'
})
export class MujerProductosComponent {

  productsWomans : Product[] = []
  productService : ProductService = inject(ProductService)

  constructor()
  {
    this.productsWomans = this.productService.getAllProductsWoman()
  }



}
