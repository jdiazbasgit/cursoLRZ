import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunicacion-enlace-papa',
  templateUrl: './comunicacion-enlace-papa.component.html'
})
export class ComunicacionEnlacePapaComponent {
  datos:any={
    nombre:"pepe",
    dni:"54334546k",
    telefono:"6587458"
  }

  constructor(private router:Router){

  }

  enviarDatosAlHijo(){
    this.router.navigate(["/botonahijo"],{
      state:{objetoAPasar:this.datos}
    })
  }
}
