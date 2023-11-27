import { Component, Output, ViewChild } from '@angular/core';
import { Continente } from '../types/Continente';
import { HttpClient } from '@angular/common/http';
import { DatosPaisesService } from '../datos-paises.service';
import { Pais } from '../types/Pais';
import { subscribeOn } from 'rxjs';
import { GeneralesComponent } from '../generales/generales.component';
import { Router } from '@angular/router';

const urlRegion: string = "https://restcountries.com/v3.1/region/"
const urlPais: string = "https://restcountries.com/v3.1/name/"

@Component({
  selector: 'app-papa',
  templateUrl: './papa.component.html',
  styleUrls: ['./papa.component.css']
})
export class PapaComponent {
  //propiedades
  continentes: Array<Continente> = [{ valor: "europe", texto: "Europa" }, { valor: "asia", texto: "Asia" }, { valor: "americas", texto: "America" }, { valor: "africa", texto: "Africa" }, { valor: "oceania", texto: "Oceania" }]
  continenteSeleccionado: string = "0"
  @ViewChild(GeneralesComponent) hijoGenerales: any;
  error: string = ""
  paisSeleccionado: Pais | undefined //se declara como undefined pq aun no sabemos el pais
  paises: Array<Pais> = []
  nombreDelPaisSeleccionado: string = ""
  //constructor
  constructor(private datos: DatosPaisesService, private router:Router) { }

  //metodos
  cargarPaises = () => {
    this.error = ""
    if (this.continenteSeleccionado === "0") {
      this.error = "Debes seleccionar un continente"
      return
    }
    this.datos.getDatos(urlRegion + this.continenteSeleccionado).subscribe((datos: Array<Pais>) => {
      this.paises = []//=datos
      datos.forEach((pais: Pais) => {
        this.paises.push(pais)
      })
      this.paises.sort((a: Pais, b: Pais) => {
        return a.translations.spa.common.localeCompare(b.translations.spa.common)
      })
    })
  }

  cargarPais = () => {
    this.datos.getDatos(urlPais + this.nombreDelPaisSeleccionado).subscribe((datos: Array<Pais>) => {
      this.paisSeleccionado = datos[0];
      //this.router.navigate([`/` ])
    })
  }
  sendPais(elemento:string){
    /*this.router.navigate([`/${elemento}` ],{
      state:{
        key:"pais",
        data:this.paisSeleccionado
      }
    })*/
  }
}
