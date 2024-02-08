import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  standalone: true,
  imports: [],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {
  listaCurso : string[] = ['TY', 'JS', 'Java', 'C#']
  Habilitar = true


  setHabilitar()
  {
    this.Habilitar = (this.Habilitar == true)? false: true
  }
}
