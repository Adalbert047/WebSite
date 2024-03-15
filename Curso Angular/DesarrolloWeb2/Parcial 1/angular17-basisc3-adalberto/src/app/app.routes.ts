import { Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
export const routes: Routes = [
    {
        path: '',
        title : 'Page Home',
        component : InicioComponent
    },
    {
        path: 'contact',
        title: 'Page Contact',
        component: ContactoComponent
    },
    {
        path: 'experience',
        title: 'Page experience',
        component: ExperienciaComponent
    },
    {
        path: 'portfolio',
        title: 'Page portfolio',
        component: PortafolioComponent
    },

];
