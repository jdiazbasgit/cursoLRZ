import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { SumaDiezPipe } from './suma-diez.pipe';
import { HttpClientModule } from '@angular/common/http';
import { Axios } from 'axios';
import { PapaComponent } from './papa/papa.component';
import { GeneralesComponent } from './generales/generales.component';
import { GeograficosComponent } from './geograficos/geograficos.component';
import { BanderasComponent } from './banderas/banderas.component';
import { TraduccionesComponent } from './traducciones/traducciones.component';
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from '@angular/common';
import { OdinComponent } from './odin/odin.component';


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
    OdinComponent
    
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
