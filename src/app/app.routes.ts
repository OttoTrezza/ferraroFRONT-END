import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';


import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: '', component: AppComponent },
    {path: '*',
    component: PagesComponent,
    // canActivate: [LoginGuardGuard],
    loadChildren: './pages/pages.module#PagesModule'
    },
    // Los por ahora..SACARRRR
    {path: 'st-panel-1', component: AppComponent },
    // loadChildren: './app.component#st-panel-1'},
    {path: 'st-panel-2', component: AppComponent },
    // loadChildren: './app.component#st-panel-2'},
    {path: 'st-panel-3', component: AppComponent },
    // loadChildren: './app.component#st-panel-3'},
    {path: 'st-panel-4', component: AppComponent },
    // loadChildren: './app.component#st-panel-4'},
    {path: 'st-panel-5', component: AppComponent },
    // loadChildren: './app.component#st-panel-5'},
// HASTA ACA SACAR

    { path: '**', component: NopagefoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
