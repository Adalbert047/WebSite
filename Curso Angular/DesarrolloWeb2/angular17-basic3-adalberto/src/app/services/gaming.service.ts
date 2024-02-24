import { Injectable } from '@angular/core';
import { Igame } from '../interfaces/igame';

@Injectable({
  providedIn: 'root'
})
export class GamingService {


  protected gamesList : Igame[] = [
    {
      id : 1,
      title: "FIFA25",
      description : "This is the game",
      image : "../../assets/imgs/fifa.jpeg"
    }
    ,
    {
      id : 2,
      title: "FIFA26",
      description : "This is the game 2",
      image : "../../assets/imgs/fifa2.jpeg"
    },
    {
      id : 3,
      title: "FIFA27",
      description : "This is the game 3",
      image : "../../assets/imgs/fifa3.jpeg"
    }
  ]

  constructor() { }


  getAllGameList()
  {
    return this.gamesList
  }

  getGameById(id : number)
  {
    return this.gamesList.find(value => value.id === id)
  }

  submitApplication(firstName : string, lastName : string, email: string)
  {
    if(!firstName || !lastName || !email)
    {
      alert("No llenastes tu papelo anoche")
      return
    }
    
    alert(`Mi nombre es : ${firstName}, apellido: ${lastName}, correo ${email}`)
  }
}
