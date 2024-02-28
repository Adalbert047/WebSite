import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private productsWoman : Product[] = [
    {
      id: 1,
      name : "Short",
      category : "Ropa de Mujer", 
      description : "Esta es ropa de mujer",
      price : 20,
      stock : 5,
      img : ""
    },
    {
      id: 2,
      name : "Short 2",
      category : "Ropa de Mujer", 
      description : "Esta es ropa de mujer",
      price : 20,
      stock : 5,
      img : ""
    }
  ]
  constructor() { }



  getAllProductsWoman()
  {
    return this.productsWoman
  }

}
