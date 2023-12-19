import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { OpinionesComponent } from '../opiniones/opiniones.component';

const routes: Routes = [{ path: 'app-home', component: HomeComponent },{ path: 'app-opiniones', component: OpinionesComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }