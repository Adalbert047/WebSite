import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private product : Product[] = 
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
    },
    {
      id: 3,
      name : "Short 2",
      category : "Ropa de Mujer", 
      description : "Esta es ropa de mujer",
      price : 20,
      stock : 5,
      img : ""
    },
    {
      id: 4,
      name : "Short 2",
      category : "Ropa de Mujer", 
      description : "Esta es ropa de mujer",
      price : 20,
      stock : 5,
      img : ""
    },
    {
      id: 5,
      name : "Short 2",
      category : "Ropa de Mujer", 
      description : "Esta es ropa de mujer",
      price : 20,
      stock : 5,
      img : ""
    },
    {
      id: 6,
      name : "Short 2",
      category : "Ropa de Mujer", 
      description : "Esta es ropa de mujer",
      price : 20,
      stock : 5,
      img : ""
    },
    {
      id: 7,
      name : "Playera de GUcci",
      category : "Ropa de Hombre", 
      description : "Esta es ropa de Hombre",
      price : 20,
      stock : 5,
      img : ""
    },
    {
      id: 8,
      name : "Pantalon 2",
      category : "Ropa de Hombre", 
      description : "Esta es ropa de gombre",
      price : 20,
      stock : 5,
      img : ""
    },
    {
      id: 9,
      name : "Nike originales",
      category : "Zapatos", 
      description : "Esta son tenis",
      price : 20,
      stock : 5,
      img : ""
    },
    {
      id: 10,
      name : "Nike tepito 2",
      category : "Zapatos", 
      description : "Esta es ropa de tenis",
      price : 20,
      stock : 5,
      img : ""
    }
  ]
  constructor() { }



  getAllProductsWoman()
  {
    return this.product.filter(value => value.category === "Ropa de Mujer")
  }

  getAllProductsMan()
  {
    return this.product.filter(value => value.category === "Ropa de Hombre")
  }

  getAllProductsShoe()
  {
    return this.product.filter(value => value.category === "Zapatos")
  }


  getProductById(id : number)
  {
    return this.product.find(value => value.id === id)
  }

  

}
