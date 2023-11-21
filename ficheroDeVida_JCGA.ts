import { Paises } from "./clases/Paises_JCGA.js";
import { Pais } from "./types/Pais_JCGA.js";

// Defino los elementos generales de todo el ejercicio

let paises = new Paises();
let pais: Pais;
let div = document.querySelector("#contenido");
var official;
var translations;
var capital;
var population;
var area;
var borders;
var google;
var open;
var coatofarms;
var flags;

// Primera parte, para que me escriba en la pantalla los nombre de los paises y su capital

// let paisesRecibidos: Array<any> = []

// paises.getDatos("https://restcountries.com/v3.1/region/europe").then(datos => {
//     paisesRecibidos = datos

//     paisesRecibidos.forEach(pais => {
//         let h1 = document.createElement("h1")
//         h1.innerHTML = `${pais.name.official} - ${pais.capital}`
//         div?.appendChild(h1)
//     })
// }).catch(error=>{
//     //respuesta del error. Para que si no encuentra la web, me devuelva que hay un error
//     let h1= document.createElement("h1")
//     h1.innerHTML=error
//     div?.appendChild(h1)
// })

// Segundo ejercicio, para tener un selector de continente, en función de el, para que le pase los nombre de los paises en ese continente y los paises, en función del elegido, que empiece a escribir parte de sus datos por pantalla con los botones definidos

// Creo una función que me va a rellenar todos los paises en el selector. Como la voy a usar varias veces, la meto en una función independiente
let buscarPaises = () => {
    let selectContinentes = document.querySelector("#continente")
    let selectPaises = document.querySelector("#paises")

    // Doy de alta las 2 variables vinculadas a los id. Podría sacarlo y tenerlas fuera, pero ya lo hare despues en su caso
    // Para ello, le tengo que decir que selctContinentes tiene que interpretarlo como un objeto de tipo SelectElement, en lugar de solo Element(que es su padre), que es lo que haría si no le hicieramos la conversión
    // Y le tengo que decri que es un array de cero para que no espere más que un valor
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        (selectContinentes as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {

            (selectPaises as HTMLSelectElement).innerHTML = ""
            // Lo anterior, para que me lo deje en blanco, el selector de paises

            // Y a continuación, dado que lo hemos dejado en blanco, le meto la opción por defecto
            var optionInicial = document.createElement("option");
            optionInicial.value = "0";
            optionInicial.text = "Seleccciona pais...";
            selectPaises?.appendChild(optionInicial)
            // ordeno el array de datos recibido
            datos.sort((a: Pais, b: Pais) => {
                return a.translations.spa.common.localeCompare(b.translations.spa.common);
            })
            // Para cada pais encontrado en el continente, le creo una entrada en el selector de paises
            datos.forEach((pais: Pais
            ) => {
                // Hemos creado los types para que no haya qeu dar el tipado a cada variable dentro de pais.Si no, si solo pongo (pais), me da error luego en los common, porque me dice que no tiene definido esa variable. me pongo encima del error y sale corrección rápida.
                let option = document.createElement("option");
                option.value = pais.name.common;
                if (pais.translations?.spa === undefined)
                    option.text = pais.name?.common;
                else
                    option.text = pais.translations?.spa?.common;
                // El "?" dice que aunque falta algo por indefinido, siga la ejecución. Si no, si no encuentra un pais traducido, se pararía
                selectPaises?.appendChild(option)
            })
            // controlamos que este seleccionado el pais
        })
}

// Creo una función que me va a limpiar la pantalla, para cualquier elemento
let limpiar = (elemento: HTMLDivElement) => {
    elemento.innerHTML = ""
}

// Selector de Paises vinculado al selector de Continentes, cuando cambie el selector de continentes
// Lo vinculo con un listener para cuando cambie en el selector de continente
document.querySelector("#continente")?.addEventListener("change", () => {
    let h1 = document.querySelector("#error");
    (h1 as HTMLHeadingElement).innerHTML = ""
    let selectContinentes = document.querySelector("#continente")
    let selectPaises = document.querySelector("#paises")
    // Doy de alta las 2 variables vinculadas a los id
    let value = (selectContinentes as HTMLSelectElement).selectedOptions[0].value;
    // Meto un if para tratar si no ha elegido nada
    if (value === "0") {
        (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Seleciona Pais....";
        (h1 as HTMLHeadingElement).innerHTML = "Deber seleccionar un continente"
        selectPaises?.appendChild(option)
    }
    // A continuación le paso a la web, lo que quiero que me devuelva..., es decir, los paises de la region seleccionada

    buscarPaises()
})



// Cambio de Pais = Selector de Pais
document.querySelector("#paises")?.addEventListener("change", () => {
    //creo las acciones para la select de paises
    let h2 = document.createElement("h2")
    limpiar(div as HTMLDivElement)
    h2.innerHTML = `he cambiado al pais ${(document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value}`;
    (div as HTMLDivElement).appendChild(h2)

    let h1 = document.querySelector("#error");
    (h1 as HTMLHeadingElement).innerHTML = ""
    let selectContinentes = document.querySelector("#continente")
    let selectPaises = document.querySelector("#paises")
    // Doy de alta las 2 variables vinculadas a los id
    let value = (selectPaises as HTMLSelectElement).selectedOptions[0].value;
    // Meto un if para tratar si no ha elegido nada
    if (value === "0") {
        (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Seleciona Pais....";
        (h1 as HTMLHeadingElement).innerHTML = "Deber seleccionar un pais"
        selectPaises?.appendChild(option)
        // Meto la funcion qeu me rellena el selector de paises, puesto que lo he dejado a cero..., asi que tengo que volver a rellenar el selector
        buscarPaises()
    }
    // Grabo los valores para el pais seleccionado

    paises.getDatos("https://restcountries.com/v3.1/name/" +
        (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {

            pais = datos[0]

            official = pais.name.official
            translations = pais.translations
            capital = pais.capital
            population = pais.population
            area = pais.area
            borders = pais.borders
            google = pais.maps.googleMaps
            open = pais.maps.openStreetMaps
            coatofarms = pais.coatOfArms
            flags = pais.flags

            console.log(`El pais seleccionado es ${official}`)

        })


})

// Vamos con la parte de los botones. Vanmos a sacar antes todo lo que es comun, que basicamente es una función qeu me cargue en variables todos los valores buscados
// Me voy a traer las variables que luego voy a utilizar. Lo hago una sola vez.



// Invoco a la función para que me traiga los datos del pais seleccionado




// Primer boton Generales 


document.querySelector("#geograficos")?.addEventListener("click", () => {
    //colocar en pantallas datos geograficos
    let h1 = document.createElement("h1")
    limpiar(div as HTMLDivElement)
    h1.innerHTML = "estoy en geograficos";
    (div as HTMLDivElement).appendChild(h1)
})
document.querySelector("#banderas")?.addEventListener("click", () => {
    //colocar en pantallas datos banderas
    let h1 = document.createElement("h1")

    limpiar(div as HTMLDivElement)
    h1.innerHTML = "estoy en banderas";
    (div as HTMLDivElement).appendChild(h1)
})
document.querySelector("#traducciones")?.addEventListener("click", () => {
    //colocar en pantallas datos traducciones
    let h1 = document.createElement("h1")

    limpiar(div as HTMLDivElement)
    h1.innerHTML = "estoy en traducciones";
    (div as HTMLDivElement).appendChild(h1)
})








