import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreasPComponent } from './components/areas-p/areas-p.component';
import { EjiComponent } from './components/eji/eji.component';



@NgModule({
  declarations: [
    AppComponent,
    AreasPComponent,
    EjiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
