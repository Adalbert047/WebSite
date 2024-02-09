import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    {
        path: 'home',
        title : 'App page Home',
        component : HomeComponent
    },
    {
        path: 'user',
        title: 'App page User',
        component: UserComponent
    },
    {
        path: 'user/:id',
        title: 'App page User',
        component: UserComponent
    },

];
