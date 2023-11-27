import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralesComponent } from './generales/generales.component';
import { GeograficosComponent } from './geograficos/geograficos.component';
import { TodoComponent } from './todo/todo.component';
import { BanderasComponent } from './banderas/banderas.component';

const routes: Routes = [
  { path: 'generales', component: GeneralesComponent },
  { path: 'geograficos', component: GeograficosComponent },
  { path: 'banderas', component: BanderasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
