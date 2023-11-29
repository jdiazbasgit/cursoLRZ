import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralesComponent } from './generales/generales.component';
import { GeograficosComponent } from './geograficos/geograficos.component';
import { TodoComponent } from './todo/todo.component';
import { BanderasComponent } from './banderas/banderas.component';
import { TraduccionesComponent } from './traducciones/traducciones.component';
import { ComunicacionConAtributoHijoComponent } from './comunicacion-con-atributo-hijo/comunicacion-con-atributo-hijo.component';
import { ComunicacionEnlaceHijoComponent } from './comunicacion-enlace-hijo/comunicacion-enlace-hijo.component';

const routes: Routes = [
  { path: 'generales', component: GeneralesComponent },
  { path: 'geograficos', component: GeograficosComponent },
  { path: 'banderas', component: BanderasComponent },
  { path: 'traducciones', component: TraduccionesComponent },
  { path: 'botonahijo', component: ComunicacionEnlaceHijoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
