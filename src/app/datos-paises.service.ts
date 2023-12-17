import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export  class DatosPaisesService {

  constructor(private http:HttpClient) { }
  //constructor() { }

   getDatos=(url:string):any=>{
    return axios.get(url)
    //return    axios.get(url)
    
  }
  grabarDatos=(datos:any)=>{
    this.http.post("/assets/datos.json",datos,{headers: {'Content-Type': 'application/json'}}).subscribe((datos:any)=>{
      console.log(datos)
    })
  }
}
