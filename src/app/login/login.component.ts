import { Component } from '@angular/core';
import { ErrorComponent } from '../error/error.component'
import { DatosPaisesService } from '../datos-paises.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  texto: string = "pepeluis"
  ver: boolean = false
  numeros: Array<number> = [4.5678, 6, 7, 89, 5, 2]
  letras:Array<string>=["dee","ffdd","rtet","dee","ffdd","rtet","dee","ffdd","rtet"];
  
  
  constructor(private datos:DatosPaisesService){}
  
  cambiarValor = () => {
    this.texto = "He cambiado el texto"

  }

  verTexto = () => {
    alert(this.texto)
  }

  cambiarVer = () => {
    this.ver = !this.ver
  }    

   ordenarNumeros=()=>{
    this.numeros.sort()
     this.datos.getDatos("https://restcountries.com/v3.1/region/europe").subscribe((datos:any)=>{
      console.log(datos)
    })
  }
}

