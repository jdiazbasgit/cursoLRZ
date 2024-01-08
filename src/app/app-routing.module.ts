import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { ModelodenegocioComponent } from './modelodenegocio/modelodenegocio.component';


const routes: Routes = [
  {path: "", component:   HomeComponent},
  {path: "home", component:   HomeComponent},
  {path: "quienessomos", component:   QuienessomosComponent},
  {path:"modelodenegocio", component: ModelodenegocioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
