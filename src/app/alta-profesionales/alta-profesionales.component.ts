import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  particulares = {
    profesion: '',
    linkedin: '',
  };
  camposVaciosTocados = false;

  guardaDatos(miFormulario: NgForm) {
    if (this.particulares.profesion && this.particulares.linkedin) {
      
      const nuevoPerfil: Perfil = { ...this.particulares };
      this.perfiles.push(nuevoPerfil);
      this.particulares = { profesion: '', linkedin: '' };
      miFormulario.resetForm();
      this.camposVaciosTocados = false;
    } else {
      this.camposVaciosTocados = true;
    }
  }
}
