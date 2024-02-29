import { Component, inject } from '@angular/core';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../services/product.service';
import { CardProductoComponent } from '../../../components/card-producto/card-producto.component';
@Component({
  selector: 'app-hombre-productos',
  standalone: true,
  imports: [CardProductoComponent],
  templateUrl: './hombre-productos.component.html',
  styleUrl: './hombre-productos.component.css'
})
export class HombreProductosComponent {
  productsMan : Product[] = []
  productService : ProductService = inject(ProductService)

  constructor()
  {
    this.productsMan = this.productService.getAllProductsMan()
  }

}
