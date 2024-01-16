import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { FeaturesComponent } from './features/features.component';
import { OpinionesComponent } from "./opiniones/opiniones.component";
import { QuienessomosComponent } from "./quienessomos/quienessomos.component";
import { ModelodenegocioComponent } from "./modelodenegocio/modelodenegocio.component";
import { SolucionComponent } from "./solucion/solucion.component";
import { HomemanuelComponent } from "./homemanuel/homemanuel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, FeaturesComponent, OpinionesComponent, QuienessomosComponent, ModelodenegocioComponent, SolucionComponent, HomemanuelComponent]
})
export class AppComponent {
  title = 'botslovers';
}
