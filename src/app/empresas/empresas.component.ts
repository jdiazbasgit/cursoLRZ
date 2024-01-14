import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

interface Empresa {
  puesto: string;
  nombre: string;
  enlace: string;
}

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})

export class EmpresasComponent {
  empresas: Empresa[] = [];
  empresaData={puesto:"", nombre:"", enlace: "",}

  camposVaciosTocados = false;

  
  guardaDatos(miFormulario: NgForm) {
    if (this.empresaData.puesto && this.empresaData.nombre && this.empresaData.enlace) {
      /* */
      const nuevaEmpresa: Empresa = { ...this.empresaData };
      this.empresas.push(nuevaEmpresa);
      this.empresaData = { puesto: "", nombre: '', enlace: '' };
      miFormulario.resetForm();
      this.camposVaciosTocados = false;  // Reinicia el estado de los campos tocados
    } else {
      this.camposVaciosTocados = true;
    }
  }
}
