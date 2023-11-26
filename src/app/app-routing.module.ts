import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralesComponent } from './generales/generales.component';
import { GeograficosComponent } from './geograficos/geograficos.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'generales/:valor', component: GeneralesComponent },
  { path: 'geograficos', component: GeograficosComponent },
  { path: 'todo', component: TodoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
