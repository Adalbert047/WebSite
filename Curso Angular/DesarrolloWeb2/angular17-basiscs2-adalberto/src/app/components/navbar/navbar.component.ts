import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { UserComponent } from '../../pages/user/user.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
