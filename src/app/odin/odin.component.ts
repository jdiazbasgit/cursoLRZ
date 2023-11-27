import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../types/Pais';

@Component({
  selector: 'app-odin',
  templateUrl: './odin.component.html',
  styleUrls: ['./odin.component.css']
})
export class OdinComponent {
  pais:Pais | undefined

   

  constructor(private route:Router){
    this.cargarPais()
  }
  
  cargarPais(){
    const params=this.route.getCurrentNavigation()?.extras?.state;
  
    this.pais=params?.['data']
  }
  
  
}
