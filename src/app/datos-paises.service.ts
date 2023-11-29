import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosPaisesService {

  constructor(private http:HttpClient) { }
  //constructor() { }

 getDatos=(url:string):any=>{
    return  this.http.get(url)
    //return    axios.get(url)
    
  }
}
