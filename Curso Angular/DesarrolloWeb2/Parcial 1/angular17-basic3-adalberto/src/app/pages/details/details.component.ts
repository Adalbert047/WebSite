import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamingService } from '../../services/gaming.service';
import { Igame } from '../../interfaces/igame';
import { CardComponent } from '../../components/card/card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CardComponent, CardModule, ButtonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route : ActivatedRoute = inject(ActivatedRoute)
  gamingService : GamingService = inject(GamingService)
  gameCard : Igame | undefined
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl('')
  })
  
  

  constructor()
  {
    
    const gameId = Number(this.route.snapshot.params["id"])
    this.gameCard = this.gamingService.getGameById(gameId)
  
  }


  submitApplication()
  {
    this.gamingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '', 
      this.applyForm.value.email ?? '')
  }

  
}
