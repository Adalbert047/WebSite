import { Component, inject } from '@angular/core';
import { MoviesComponent } from '../../components/movies/movies.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MoviesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  private activatedRoute = inject(ActivatedRoute)
  id = this.activatedRoute.snapshot.params['id'] || "No hay valor"


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

  

  count = 0
  countSum(value : number)
  {
    this.count = value
  }
}
