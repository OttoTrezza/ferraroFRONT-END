import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

// Servicios
import { ServiceModule } from './services/service.module';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AreasPComponent } from './components/areas-p/areas-p.component';
import { EjiComponent } from './components/eji/eji.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PromesasComponent } from './rxjs/promesas/promesas.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

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
    LoginComponent,
    RegisterComponent,
    PromesasComponent,
    PagesComponent,
    FooterComponent,
    AreasPComponent,
    EjiComponent,
    FooterComponent,
    ContactoComponent,
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
