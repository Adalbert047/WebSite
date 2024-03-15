import { Component } from '@angular/core';
import { MisionComponent } from './mision/mision.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { ValoresComponent } from './valores/valores.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [MisionComponent,SobreNosotrosComponent, ValoresComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
