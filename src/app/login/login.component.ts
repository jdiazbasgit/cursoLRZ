import { Component } from '@angular/core';
import { ErrorComponent } from '../error/error.component'
import { DatosPaisesService } from '../datos-paises.service';
import { Login } from '../types/Login';
import { subscribeOn } from 'rxjs';

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
  password:string=""
  user:string=""
  
  constructor(private datos:DatosPaisesService){}
  
grabarDatos=()=>{
  let datosAGrabar:Login= new Login(this.user, this.password)
  let ejemplo:any=
  /*this.datos.getDatos("/assets/ejemplo.json")
  .then((datos:any)=>{
    console.log(datos.data)
  })*/

  this.datos.grabarDatos(datosAGrabar)
  this.datos.getDatos("/assets/datos.json")
  .then((datos:any)=>{
    console.log("vamos a ver los datos")
    console.log(datos.data)
  })
}

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
