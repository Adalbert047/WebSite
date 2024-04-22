import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JerseyComponent } from './pages/jersey/jersey.component';
import { DancingComponent } from './pages/dancing/dancing.component';
import { SairaComponent } from './pages/saira/saira.component';
import { VastComponent } from './pages/vast/vast.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponent, NavbarComponent, JerseyComponent, DancingComponent, SairaComponent, VastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17-avanzado3-adalberto';
}
