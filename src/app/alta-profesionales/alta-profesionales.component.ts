import { Component } from '@angular/core';

interface Perfil {
  profesion: string;
  linkedin: string;
}

@Component({
  selector: 'app-alta-profesionales',
  templateUrl: './alta-profesionales.component.html',
  styleUrls: ['./alta-profesionales.component.css']
})
export class AltaProfesionalesComponent {
  perfiles: Perfil[] = [];
  particulares={
    profesion:"",
    linkedin:"",
  }
 

  guardaDatos(particulares:Perfil) {
    const nuevoPerfil: Perfil=this.particulares;
    this.perfiles.push(nuevoPerfil);
    this.particulares = { profesion: '', linkedin: '' };

  }

}
