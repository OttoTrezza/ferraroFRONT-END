import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
// import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { AdminGuard, VerificatokenGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';

// Mantenimientos
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AutoOTTOComponent } from './autoOTTO/autoOTTO.component';
import { Artista1Component } from './artista1/artista1.component';
import { Artista2Component } from './artista2/artista2.component';
import { EstelarComponent } from './estelar/estelar.component';
import { IniciologinComponent } from './iniciologin/iniciologin.comoponent';



const pagesRoutes: Routes = [


{ path: 'iniciologin', component: IniciologinComponent,  data: { titulo: 'iniciologin' } },
    { path: 'mensajes', component: MensajesComponent, data: { titulo: 'Mensajes' } },
    { path: 'autoOTTO', component: AutoOTTOComponent, data: { titulo: 'AutoOTTO' } },
    { path: 'account-settings', component: AccoutSettingsComponent, data: { titulo: 'Ajustes' } },
    { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil' } },
    { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador' } },
    // Mantenimientos
    {
        path: 'usuarios',
        component: UsuariosComponent,
         canActivate: [ AdminGuard],
        data: { titulo: 'mantenimiento de usuario' }
    },
    { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'mantenimiento de hospital' } },
    { path: 'medicos', component: MedicosComponent, data: { titulo: 'mantenimiento de medico' } },
    { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Actualizar medico' } },
{ path: 'artista1', component: Artista1Component,  data: { titulo: 'Artista1' } },
{ path: 'artista2', component: Artista2Component,  data: { titulo: 'Artista2' } },
{ path: 'estelar', component: EstelarComponent,  data: { titulo: 'estelar' } },

    { path: '', redirectTo: '/iniciologin', pathMatch: 'full' }

];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
