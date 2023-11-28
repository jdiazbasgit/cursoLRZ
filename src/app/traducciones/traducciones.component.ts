import { Component, Input, OnInit } from '@angular/core';
import { OdinComponent } from '../odin/odin.component';
import { Pais } from '../types/Pais';
import { transition } from '@angular/animations';
import { DatosPaisesService } from '../datos-paises.service';
import { Router } from '@angular/router';


const urlIdioma="https://restcountries.com/v3.1/lang/";
@Component({
  selector: 'app-traducciones',
  templateUrl: './traducciones.component.html',
  styleUrls: ['./traducciones.component.css']
})
export class TraduccionesComponent extends OdinComponent implements OnInit {
  @Input() override pais: Pais | undefined
  traducciones: Map<string,Array<string>> = new Map<string,Array<string>>()
constructor(private datos:DatosPaisesService, route: Router){
  super(route);
}

  ngOnInit(): void {
    this.traducciones = new Map<string,Array<string>>()
    Object.entries(this.pais?.translations).forEach((translation: any) => {
      let key:string=`${translation[0]}-${translation[1].common}`
      let value:Array<string>=new Array<string>()

      this.datos.getDatos(urlIdioma+translation[0]).subscribe((datos:Array<Pais>)=>{
       
        datos.forEach((pais:Pais)=>{
          value.push(pais.translations.spa.common)
        })
     
        
      }).error((error:any)=>{
        value.push("no existen paises")
      })
      this.traducciones.set(key,value);

    })


  }
}
