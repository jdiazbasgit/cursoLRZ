import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { SumaDiezPipe } from './suma-diez.pipe';
import { HttpClientModule } from '@angular/common/http';

import { PapaComponent } from './papa/papa.component';
import { GeneralesComponent } from './generales/generales.component';
import { GeograficosComponent } from './geograficos/geograficos.component';
import { BanderasComponent } from './banderas/banderas.component';
import { TraduccionesComponent } from './traducciones/traducciones.component';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { OdinComponent } from './odin/odin.component';
import { ComunicacionConAtributoPapaComponent } from './comunicacion-con-atributo-papa/comunicacion-con-atributo-papa.component';
import { ComunicacionConAtributoHijoComponent } from './comunicacion-con-atributo-hijo/comunicacion-con-atributo-hijo.component';
import { ComunicacionEnlacePapaComponent } from './comunicacion-enlace-papa/comunicacion-enlace-papa.component';
import { ComunicacionEnlaceHijoComponent } from './comunicacion-enlace-hijo/comunicacion-enlace-hijo.component';
import { ComunicacionViewchildPadreComponent } from './comunicacion-viewchild-padre/comunicacion-viewchild-padre.component';
import { ComunicacionViewchildHijoComponent } from './comunicacion-viewchild-hijo/comunicacion-viewchild-hijo.component';
import { ComunicacionEventoHijoComponent } from './comunicacion-evento-hijo/comunicacion-evento-hijo.component';
import { ComunicacionEventoPadreComponent } from './comunicacion-evento-padre/comunicacion-evento-padre.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    SumaDiezPipe,
    PapaComponent,
    GeneralesComponent,
    GeograficosComponent,
    BanderasComponent,
    TraduccionesComponent,
    TodoComponent,
    OdinComponent,
    ComunicacionConAtributoPapaComponent,
    ComunicacionConAtributoHijoComponent,
    ComunicacionEnlacePapaComponent,
    ComunicacionEnlaceHijoComponent,
    ComunicacionViewchildPadreComponent,
    ComunicacionViewchildHijoComponent,
    ComunicacionEventoHijoComponent,
    ComunicacionEventoPadreComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
