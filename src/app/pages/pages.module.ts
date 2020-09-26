
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

// ng2-charts
// import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard/dashboard.component';
// import { ProgressComponent } from './progress/progress.component';

// pipes
import { PipesModule } from '../pipes/pipes.module';

// import { IncrementadorComponent } from '../components/incrementador/incrementador.compon
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
// import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AutoOTTOComponent } from './autoOTTO/autoOTTO.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { ChatComponent } from '../components/chat/chat.component';
import { AutoOTTOChatComponent } from '../components/chat/auto-otto.component';
import { Artista1Component } from './artista1/artista1.component';





@NgModule({
    declarations: [
      Artista1Component,
        DashboardComponent,
        ProfileComponent,
        UsuariosComponent,
        HospitalesComponent,
        MedicosComponent,
        MedicoComponent,
        MensajesComponent,
        AutoOTTOComponent,
        AutoOTTOChatComponent,
        AccoutSettingsComponent,
        ChatComponent,
        BusquedaComponent

    ],
    exports: [
        DashboardComponent,
        ChatComponent
       // BusquedaComponent // Esto fue insterado recien,,,,
    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule
    ]
})
export class PagesModule { }
