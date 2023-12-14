import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParticularesComponent } from './particulares/particulares.component';
import { EmpresasComponent } from './empresas/empresas.component';

import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
 
  { path: '', component: PrincipalComponent }, //para que aparezca en la "home"
  { path: 'particulares', component: ParticularesComponent },
  { path: 'empresas', component: EmpresasComponent  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
