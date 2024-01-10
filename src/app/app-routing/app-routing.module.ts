import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { QuienessomosComponent } from '../quienessomos/quienessomos.component';

const routes: Routes = [{ path: '', component: HomeComponent },{ path: 'app-quienessomosComponent', component: QuienessomosComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }