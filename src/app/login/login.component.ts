import { Component } from '@angular/core';
import { ErrorComponent } from '../error/error.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  texto: string = "pepeluis"
  ver: boolean = false
  numeros: Array<number> = [4, 6, 7, 89, 5, 2]
  letras:Array<string>=["dee","ffdd","rtet","dee","ffdd","rtet","dee","ffdd","rtet"];
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
  }
}
