import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { EmpresasComponent } from './empresas/empresas.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { AltaProfesionalesComponent } from './alta-profesionales/alta-profesionales.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
    AltaProfesionalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
