import { Component } from '@angular/core';

interface Perfil {
  profesion: string;
  linkedin: string;
}

@Component({
  selector: 'app-particulares',
  templateUrl: './particulares.component.html',
  styleUrls: ['./particulares.component.css']
})
export class ParticularesComponent {
  perfiles: Perfil[] = [];
  particulares={
    profesion:"",
    linkedin:"",
  }
 

  guardaDatos(particulares:Perfil) {
    const nuevoPerfil: Perfil=this.particulares;
    this.perfiles.push(nuevoPerfil);
    this.particulares = { profesion: '', linkedin: '' };

  }
}










// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-particulares',
//   templateUrl: './particulares.component.html',
//   styleUrls: ['./particulares.component.css']
// })
// export class ParticularesComponent {
//   profesiones= new Array();
//   enlacesLinkedin= new Array();
        

//   guardaDatos(profesion:string,linkedin:string){
//     this.profesiones.push(profesion)
//     this.enlacesLinkedin.push(linkedin)
//     //console.log(this.profesiones)
//     //console.log(this.enlacesLinkedin)
//   }


// }
