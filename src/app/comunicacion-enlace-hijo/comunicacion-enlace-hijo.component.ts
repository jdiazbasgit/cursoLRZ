import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunicacion-enlace-hijo',
  templateUrl: './comunicacion-enlace-hijo.component.html'
})
export class ComunicacionEnlaceHijoComponent {

  objetoARecibirHijo:any | undefined

constructor(private router:Router){
this.cargar()
}

cargar(){
  const params = this.router.getCurrentNavigation()?.extras?.state;
  this.objetoARecibirHijo=params?.["objetoAPasar"]
}

}
