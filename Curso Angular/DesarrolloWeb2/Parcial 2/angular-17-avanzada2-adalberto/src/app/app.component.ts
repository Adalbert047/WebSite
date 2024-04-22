import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OperacionesPipe } from './pipes/operaciones.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OperacionesPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-avanzada2';
  color : boolean = true

  countries =  ["Mexico","Holanda","LELE"]
  num = 10
  fecha = new Date()
  name = "adalbIrto"
  op = "suma"
  

  onchangeColor()
  {
    this.color = !this.color
  }

}
