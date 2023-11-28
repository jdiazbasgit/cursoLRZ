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

  constructor(private route: Router) {
    this.cargarPais()
  }

  cargarPais() {
    this.error = ""
    const params = this.route.getCurrentNavigation()?.extras?.state;

    this.pais = params?.['data']
    if (!this.pais)
      this.error = "debes seleccionar un pais"
  }


}
