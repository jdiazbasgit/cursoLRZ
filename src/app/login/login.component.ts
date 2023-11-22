import { Component } from '@angular/core';
import {ErrorComponent} from '../error/error.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
texto:string="pepe"
  pulsarBoton=()=>
  {
  let dato:ErrorComponent= new ErrorComponent()
    alert(dato.texto)
  }

}
