import { Component, Input } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  

  @Input() items = [ 
    {
      nombre : '',
      contenido :'',
    },
    {
      nombre : '',
      contenido :'',
    },
    {
      nombre : '',
      contenido :'',
    },
  ]
}
