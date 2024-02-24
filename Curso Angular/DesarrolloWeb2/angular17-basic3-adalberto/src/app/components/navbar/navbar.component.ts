import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  template: `
    <p-menubar [model]="items">
      <ng-template pTemplate="start">
          <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" height="40" class="mr-2" />
      </ng-template>
  </p-menubar> 
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  items = [
    {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
        routerLink : '/'
        
    },
];

}
