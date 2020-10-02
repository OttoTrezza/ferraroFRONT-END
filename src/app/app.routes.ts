import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { LoginComponent } from './login/login.component';
// import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginGuardGuard } from './services/service.index';
import { InicioComponent } from './inicio/inicio.comoponent';


const appRoutes: Routes = [
{ path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: '', component: InicioComponent },
    {path: '*',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    loadChildren: './pages/pages.module#PagesModule'
    },
    // Los por ahora..SACARRRR
    // {path: '#st-panel-1', component: InicioComponent },
    // loadChildren: './app.component#st-panel-1'},
    // {path: '#st-panel-2', component: InicioComponent },
    // loadChildren: './app.component#st-panel-2'},
    // {path: '#st-panel-3', component: InicioComponent },
    // loadChildren: './app.component#st-panel-3'},
    // {path: '#st-panel-4', component: InicioComponent },
    // loadChildren: './app.component#st-panel-4'},
    // {path: '#st-panel-5', component: InicioComponent },
    // loadChildren: './app.component#st-panel-5'},
// HASTA ACA SACAR

    { path: '**', component: NopagefoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
