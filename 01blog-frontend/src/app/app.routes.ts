import { Routes } from '@angular/router';
import HomeComponent from './home/home';
import LoginComponent from './login/login';
export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    }
];
