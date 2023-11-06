import { Instrumento } from "../clases/InstrumentoMar.js";
//import { Musico } from "../clases/MusicoMar.js";


document.querySelector("#boton").addEventListener("click", function () { //emisor:document.querySelector("#boton")
    let contenido = document.querySelector("#contenido");
    let selectInstrumentos = document.querySelector("#selectinstrumentos");
    let instrumento = new Array();

    for (let i = 0; i < selectInstrumentos.options.length; i++) {

        if (selectInstrumentos.options[i].selected) {
            //console.log(selectInstrumentos.options[i].value);//punto de control
            instrumento[i] = selectInstrumentos.options[i].value;
            let h1Sonido = document.createElement("h1");
            h1Sonido.innerHTML = `El sonido del instrumento seleccionado es: ${instrumento[i]}`;
            contenido.appendChild(h1Sonido);
        }
    }

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