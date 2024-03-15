import { Component, inject } from '@angular/core';
import { CardProductoComponent } from '../../../components/card-producto/card-producto.component';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-calzado-productos',
  standalone: true,
  imports: [CardProductoComponent],
  templateUrl: './calzado-productos.component.html',
  styleUrl: './calzado-productos.component.css'
})
export class CalzadoProductosComponent {
  productsShoe : Product[] = []
  productService : ProductService = inject(ProductService)

  constructor()
  {
    this.productsShoe = this.productService.getAllProductsShoe()
  }
}
