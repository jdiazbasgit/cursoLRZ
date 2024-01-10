import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {path:"", component: HomeComponent},
  {path:"quienessomos", component: QuienessomosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
