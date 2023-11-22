import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DatosPaisesService {

  constructor(private http:HttpClient) { }

  getDatos=(url:string):any=>{
    return this.http.get(url)
    
  }
}
