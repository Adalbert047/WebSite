import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private productWoman : Product[] = 
  [
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
  private productMan : Product[] = 
  [
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
      category : "Ropa de Hombre", 
      description : "Esta es ropa de mujer",
      price : 20,
      stock : 5,
      img : ""
    }
  ]
  constructor() { }



  getAllProductsWoman()
  {
    return this.productWoman
  }

  getByIdProductWoman(id : number)
  {
    
    return this.productWoman.find(value => value.id === id)
  }

  

}
