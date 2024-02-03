import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  listUser = [ 
    {
      name: "Betito",
      last_name : "Amaya",
      age: 20
    },
    {
      name: "Keke",
      last_name : "Koña",
      age: 21
    },
    {
      name: "Naka",
      last_name : "Amaya",
      age: 20
    }

  ]
}
