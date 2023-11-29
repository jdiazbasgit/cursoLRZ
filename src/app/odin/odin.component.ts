import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../types/Pais';

@Component({
  selector: 'app-odin',
  template: '',
  styleUrls: ['./odin.component.css']
})
export class OdinComponent {
  pais: Pais | undefined

  error: string = ""

  constructor(private route: Router) { //Tipo Router porque lo utilizamos en el constructor (método)
    this.cargarPais()
  }

  cargarPais() {
    this.error = ""
    const params = this.route.getCurrentNavigation()?.extras?.state;// extras es una propiedad del getCurrentNavigation que además de la URL te da los demás valores (del objeto)
//state está definido en el constructor del hijo (state es nombre elegido)

    this.pais = params?.['data']//En Caja y comillas! de los parametros q me llegan, en el state digo cual cojo
    if (!this.pais)
      this.error = "debes seleccionar un pais"
  }


}
