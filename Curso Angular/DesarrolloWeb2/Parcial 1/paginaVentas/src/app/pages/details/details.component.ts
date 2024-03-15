import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interface/product';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {


  route : ActivatedRoute = inject(ActivatedRoute)
  productService : ProductService = inject(ProductService)
  productCard : Product | undefined

  constructor()
  {
    const productId = Number(this.route.snapshot.params["id"])
    this.productCard = this.productService.getProductById(productId)
  }
  


  
  
}
