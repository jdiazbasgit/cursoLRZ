import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PapaComponent } from './papa/papa.component_JCGA';
import { Hijo1Component } from './hijo1/hijo1.component_JCGA';
import { Hijo2Component } from './hijo2/hijo2.component_JCGA';

@NgModule({
  declarations: [
    AppComponent,
    PapaComponent,
    Hijo1Component,
    Hijo2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
