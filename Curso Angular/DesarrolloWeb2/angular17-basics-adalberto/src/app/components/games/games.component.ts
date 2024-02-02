import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  @for (game of listGames; track game.id) 
  {
    <li>ID: {{game.id}}, Nombre: {{ game.name }} </li>
  }
  `,
  styleUrl: './games.component.css'
})
export class GamesComponent {

  listGames = [
    {
      id : 1,
      name : "FIFA"
    },
    {
      id : 2,
      name : "FIFA20"
    },
    {
      id : 3,
      name : "O"
    }

  ]
}
