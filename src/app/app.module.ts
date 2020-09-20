import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Servicios
import { ServiceModule } from './services/service.module';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AreasPComponent } from './areas-p/areas-p.component';
import { EjiComponent } from './eji/eji.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
// AGREGADO INICIO **
import { environment } from '../environments/environment';
// // sockets
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = {
   url: environment.wsUrl, options: {}
   };

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    FooterComponent,
    AreasPComponent,
    EjiComponent,
    FooterComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
