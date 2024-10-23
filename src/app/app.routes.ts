import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio',
        loadChildren: () => import('./app/inicio/inicio.module').then(m => m.InicioModule)
    },
    {
        path: 'registro',
        loadChildren: () => import('./app/registro/registro.module').then(m => m.RegistroModule)
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/inicio'
    }
];
