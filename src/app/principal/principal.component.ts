import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  opcion: string="";

  opcionElegida=(opcion:string)=>{
    this.opcion=opcion

  }

}
