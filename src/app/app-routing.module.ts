import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ParticularesComponent } from './particulares/particulares.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'particulares', component: ParticularesComponent },
  { path: 'empresas', component: EmpresasComponent  },
  { path: 'footer', component: FooterComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
