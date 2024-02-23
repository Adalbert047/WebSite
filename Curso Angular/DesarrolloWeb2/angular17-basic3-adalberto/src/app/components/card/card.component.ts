import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { Igame } from '../../interfaces/igame';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink],
  template: `
    <p-card header="{{gameCard.title}}" subheader="{{gameCard.id}}" [style]="{ width: '360px' }">
    <ng-template pTemplate="header">
        <img alt="Card" src="{{gameCard.image}}" [style]="{ height: '100%'}" />
    </ng-template>
    <p>
        {{gameCard.description}}
    </p>
   
    <ng-template pTemplate="footer">
        <p-button [routerLink]="['details/', gameCard]" label="Save" icon="pi pi-check"></p-button>
    </ng-template>
</p-card>

  `,
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input () gameCard! : Igame
}
