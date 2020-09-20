import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { EjiComponent } from './eji/eji.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AreasPComponent } from './areas-p/areas-p.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: 'contacto', component: ContactoComponent },
    { path: 'areas-p', component: AreasPComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'login', component: LoginComponent },
    {path: '', component: EjiComponent },
    {path: '*',
    component: PagesComponent,
    canActivate: [LoginGuardGuard],
    loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', component: NopagefoundComponent },

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
