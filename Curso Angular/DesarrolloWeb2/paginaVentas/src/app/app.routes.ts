import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { DetailsComponent } from './pages/details/details.component';
import { CalzadoProductosComponent } from './pages/productos/calzado-productos/calzado-productos.component';
import { HombreProductosComponent } from './pages/productos/hombre-productos/hombre-productos.component';
import { MujerProductosComponent } from './pages/productos/mujer-productos/mujer-productos.component';

export const routes: Routes = [
    {
        path: '',
        component : InicioComponent
    },
    {
        path: 'products',
        component : ProductosComponent,
        children : [
            {
                path: 'calzado',
                component: CalzadoProductosComponent
            },
            {
                path: 'hombre',
                component : HombreProductosComponent
            },
            {
                path: 'mujer',
                component : MujerProductosComponent
            },
            
        ]
    },
    {
        path: 'contacto',
        component : ContactoComponent
    },
    {
        path: 'nosotros',
        component : NosotrosComponent
    },
    {
        path: 'details/:id',
        component : DetailsComponent
    },
];
