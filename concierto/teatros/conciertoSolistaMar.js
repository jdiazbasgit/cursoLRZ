import { Instrumento } from "../clases/InstrumentoMar.js";
//import { Musico } from "../clases/MusicoMar.js";

let limpiaElemento = elementoAlimpiar => {
    elementoAlimpiar.innerHTML="";
}

document.querySelector("#botonHombreOrquesta").addEventListener("click", function () { //emisor:document.querySelector("#boton")
    let contenido1 = document.querySelector("#contenido1");
    limpiaElemento(contenido1);
    let selectInstrumentos = document.querySelector("#instrumentos");
    let instrumento = new Instrumento();
    

    for (let i=0; i<selectInstrumentos.options.length; i++) {
    
        if (selectInstrumentos.options[i].selected) {
           //console.log(selectInstrumentos.options[i].value);//punto de control
            instrumento[i]=selectInstrumentos.options[i].value;
            let h1Sonido = document.createElement("h1");
            h1Sonido.innerHTML = `El sonido del instrumento seleccionado es: ${instrumento[i]}`;
            contenido1.appendChild(h1Sonido);
        }
    }

})

document.querySelector("#botonSolista").addEventListener("click", function () { //emisor:document.querySelector("#boton")
    let contenido1 = document.querySelector("#contenido1");
    limpiaElemento(contenido1);
   
    

  

})



// let tambor = new Instrumento("pom, pom, pom");
// let instrumentos = new Array();// con el spread eliminamos esta línea
// instrumentos.push(tambor);//let instrumentos=[tambor]// instrumentos[0]=tambor; esta ulti opción mejor NO//con el spread eliminamos esta línea
// let solista = new Musico("percusion", instrumentos); // con el spread let solista = new Musico("percusion", tambor);
// solista.tocar();

// document.querySelector("#hombreOrquesta").addEventListener("click", function () {
//     let tambor = new Instrumento("pom, pom, pom")
//     let trompeta = new Instrumento("tuuu, tuuuu, tuuuu")
//     let guitarra = new Instrumento("tlan, tlan, tlan")

//     let instrumentosOrquesta = new Array();
//     instrumentosOrquesta.push(tambor);
//     instrumentosOrquesta.push(trompeta);
//     instrumentosOrquesta.push(guitarra);

//     let hombreOrquesta = new Musico("varios",instrumentosOrquesta)
//     hombreOrquesta.tocar()
// })