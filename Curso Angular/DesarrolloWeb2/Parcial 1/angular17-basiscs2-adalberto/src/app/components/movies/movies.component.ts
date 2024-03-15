import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  count = 0
  //Output nos permite pasar valores de hijo a padre, en este se enviara el valor, es necesario el EventEmitter
  @Output() countEventEmmiter = new EventEmitter()

  sum()
  {
    this.count++
    this.countEventEmmiter.emit(this.count)
  }

}
