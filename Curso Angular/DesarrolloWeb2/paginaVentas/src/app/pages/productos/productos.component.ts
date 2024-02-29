import { Component, inject } from '@angular/core';
import { NavbarProductosComponent } from './navbar-productos/navbar-productos.component';
import { MujerProductosComponent } from './mujer-productos/mujer-productos.component';
import { HombreProductosComponent } from './hombre-productos/hombre-productos.component';
import { RouterOutlet } from '@angular/router';
import { Product } from '../../interface/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NavbarProductosComponent, MujerProductosComponent, HombreProductosComponent, RouterOutlet],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


  
}
