import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { EmpresasComponent } from './empresas/empresas.component';

import { PrincipalComponent } from './principal/principal.component';
import { AltaProfesionalesComponent } from './alta-profesionales/alta-profesionales.component';

const routes: Routes = [
 
  { path: '', component: PrincipalComponent }, //para que aparezca en la "home"
  { path: 'alta-profesionales', component: AltaProfesionalesComponent },
  { path: 'empresas', component: EmpresasComponent  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
