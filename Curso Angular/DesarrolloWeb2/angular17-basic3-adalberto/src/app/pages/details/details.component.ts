import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamingService } from '../../services/gaming.service';
import { Igame } from '../../interfaces/igame';
import { CardComponent } from '../../components/card/card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardComponent, CardModule, ButtonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute)
  gamingService : GamingService = inject(GamingService)
  gameCard : Igame | undefined
  
  

  constructor()
  {
    
    const gameId = Number(this.route.snapshot.params["id"])
    this.gameCard = this.gamingService.getGameById(gameId)
  
  }
}
