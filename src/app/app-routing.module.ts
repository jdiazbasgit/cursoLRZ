import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent },
  {path: "quienessomos", component:   QuienessomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
