import { Instrumento } from "../clases/InstrumentoMar.js";
//import { Musico } from "../clases/MusicoMar.js";



document.querySelector("#boton").addEventListener("click", function () {
    let selectInstrumentos = document.querySelector("#instrumentos");
    let instrumento = new Instrumento();
    let divContenido = document.querySelector("#contenido");

    for (let i=0; i<selectInstrumentos.options.length; i++) {
    
        if (selectInstrumentos.options[i].selected) {
           //console.log(selectInstrumentos.options[i].value);//punto de control
            instrumento[i]=selectInstrumentos.options[i].value;
            let h1Sonido = document.createElement("h1");
            h1Sonido.innerHTML = `El sonido del instrumento seleccionado es: ${instrumento[i]}`;
            divContenido.appendChild(h1Sonido);
        }
    }

})



// let tambor = new Instrumento("pom, pom, pom");
// let instrumentos = new Array();
// instrumentos.push(tambor);//let instrumentos=[tambor]// instrumentos[0]=tambor; esta opción mejor NO
// let solista = new Musico(instrumentos, "percusion");
// solista.tocar();

// document.querySelector("#hombreOrquesta").addEventListener("click", function () {
//     let tambor = new Instrumento("pom, pom, pom")
//     let trompeta = new Instrumento("tuuu, tuuuu, tuuuu")
//     let guitarra = new Instrumento("tlan, tlan, tlan")

//     let instrumentosOrquesta = new Array();
//     instrumentosOrquesta.push(tambor);
//     instrumentosOrquesta.push(trompeta);
//     instrumentosOrquesta.push(guitarra);

//     let hombreOrquesta = new Musico(instrumentosOrquesta, "varios")
//     hombreOrquesta.tocar()
// })