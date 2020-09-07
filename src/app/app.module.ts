import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreasPComponent } from './components/areas-p/areas-p.component';
import { EjiComponent } from './components/eji/eji.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    AreasPComponent,
    EjiComponent,
    FooterComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
