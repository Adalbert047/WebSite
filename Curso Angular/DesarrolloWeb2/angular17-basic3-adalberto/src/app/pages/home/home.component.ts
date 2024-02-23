import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { GamingService } from '../../services/gaming.service';
import { Igame } from '../../interfaces/igame';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  gameList : Igame[] = []
  gamingService : GamingService = inject(GamingService)


  constructor()
  {
    this.gameList = this.gamingService.getAllGameList()
  }
  
}
