import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AreasPComponent } from './components/areas-p/areas-p.component';



@NgModule({
  declarations: [
    AppComponent,
    AreasPComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
