import { Component } from '@angular/core';
import { NavbarProductosComponent } from './navbar-productos/navbar-productos.component';
import { MujerProductosComponent } from './mujer-productos/mujer-productos.component';
import { HombreProductosComponent } from './hombre-productos/hombre-productos.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavbarProductosComponent, MujerProductosComponent, HombreProductosComponent, RouterOutlet],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
