import { Component, OnChanges, ViewChild } from '@angular/core';
import { ComunicacionViewchildHijoComponent } from '../comunicacion-viewchild-hijo/comunicacion-viewchild-hijo.component';

@Component({
  selector: 'app-comunicacion-viewchild-padre',
  templateUrl: './comunicacion-viewchild-padre.component.html'
 
})
export class ComunicacionViewchildPadreComponent 
 {
 @ViewChild(ComunicacionViewchildHijoComponent) hijo:any | undefined
  nombrePadre:string="Jose Luis"
  nombreHijoEnElPadre:string="" 

 
  comunicarConHijo=()=>{
    this.nombreHijoEnElPadre=this.hijo?.nombreHijo;
    this.hijo.nombrePadre=this.nombrePadre;
  }
}
