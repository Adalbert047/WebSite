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
      description : "Pieza para ropa de mujer",
      price : 300,
      stock : 10,
      img : "https://e-udem.mx/images/short_adidas_dama.jpg"
    },
    {
      id: 2,
      name : "Licras",
      category : "Ropa de Mujer", 
      description : "Pieza para ropa de mujer",
      price : 340,
      stock : 5,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJuLds8tnaDuQz7OxpgS9TT0IYZWYKFLi3Ww&usqp=CAU"
    },
    {
      id: 3,
      name : "Blusa Deportiva",
      category : "Ropa de Mujer", 
      description : "Esta es ropa de mujer",
      price : 500,
      stock : 10,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bl3LJt2xXgnIzwBvjN3TiQJNSNQ0kK9hScZBciKmAJiYuAvVr7hEN6G-Zlvin2BfMjI&usqp=CAU"
    },
    {
      id: 4,
      name : "Pants Negro Adadas",
      category : "Ropa de Mujer", 
      description : "Pants para mujeres",
      price : 20,
      stock : 5,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJ1OLk-1SpB1AK8ppd3zQlazWNTtx_ps53MRsTpDSfHSYIfw8j_oSl6EuppN84ftnEUk&usqp=CAU"
    },
    {
      id: 5,
      name : "Sudadera Gris",
      category : "Ropa de Mujer", 
      description : "Sudadera de Mujer",
      price : 700,
      stock : 5,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnh69niHXhDwh1NbkXRdbLq76vEXxHzEOJbw&usqp=CAU"
    },
    {
      id: 6,
      name : "Sudadera Verde",
      category : "Ropa de Mujer", 
      description : "Sudadera de mujer",
      price : 20,
      stock : 5,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROO9HRQ9m6h72XROZljdN0ch12gz_r-losyg&usqp=CAU"
    },
    {
      id: 7,
      name : "Playera de Gucci x Adadas",
      category : "Ropa de Hombre", 
      description : "Colaboracion de Gucci x Adadas, modelo unico",
      price : 6000,
      stock : 10,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs34uhN6Pc6Pq7zGGnGcZrl1a8-dOuE4XyiuQS_u6A5La3SwBbwcXoDn-szK3nFUsE9oI&usqp=CAU"
    },
    {
      id: 8,
      name : "Playera Puma x Adadas",
      category : "Ropa de Hombre", 
      description : "Colaboracion de Pumas x Adadas, modelo unico",
      price : 2000,
      stock : 5,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7p5Nh6lYOdshyhUbJKHUNqsmRWcwjhwtmg&usqp=CAU"
    },
    {
      id: 9,
      name : "Nike x Adadas",
      category : "Zapatos", 
      description : "Esta son tenis bien chingones de adadas",
      price : 2200,
      stock : 10,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6CWU9ABeHw4ctfA-RCkpD_VHD7CPkE8l2Q&usqp=CAU"
    },
    {
      id: 10,
      name : "Adadas X Jordan",
      category : "Zapatos", 
      description : "Tenis de Colaboracion de Adadas X Jordan",
      price : 4000,
      stock : 10,
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSDx19KzUNjuda7LfDhxp4wdx58taiqL1ng&usqp=CAU"
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
