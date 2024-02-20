import { Routes } from '@angular/router';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "/clientes", "pathMatch": 'full'
    }
    ,
    {
        path: "directivas", component: DirectivaComponent
    }
    ,
    {
        path: "clientes", component: ClientesComponent
    }

];
