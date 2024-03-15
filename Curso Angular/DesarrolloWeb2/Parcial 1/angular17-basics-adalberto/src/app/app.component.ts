import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GamesComponent } from './components/games/games.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, GamesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = "betito"
  last_name = "Amaya"
  username = "pedrito"
  Isloggin = false
  



  saludar()
  {
    console.log(`Hola ${this.name}`)
    this.Isloggin = true;
  }


  loggin()
  {
    this.Isloggin = !this.Isloggin
    
  }
}
