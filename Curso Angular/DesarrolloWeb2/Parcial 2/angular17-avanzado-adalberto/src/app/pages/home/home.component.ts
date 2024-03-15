import { Component, OnInit, inject } from '@angular/core';
import { UserComponent } from './components/user/user.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
