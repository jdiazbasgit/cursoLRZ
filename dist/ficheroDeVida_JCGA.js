var _a;
import { Paises } from "./clases/Paises_JCGA.js";
// Primera parte, para que me escriba en la pantalla los nombre de los paises y su capital
let paises = new Paises();
let paisesRecibidos = [];
let div = document.querySelector("#contenido");
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
// Segundo ejercicio, para tener un selector de continente, en función de el, para que le pase los nombre de los paises en ese continente y los paises, en función del elegido, que empiece a escribir parte de sus datos por pantalla 
// Lo vinculo con un listener para cuando cambie en el selector de continente
(_a = document.querySelector("#continente")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", () => {
    let h1 = document.querySelector("#error");
    h1.innerHTML = "";
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    // Doy de alta las 2 variables vinculadas a los id
    let value = selectContinentes.selectedOptions[0].value;
    // Meto un if para tratar si no ha elegido nada
    if (value === "0") {
        selectPaises.innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Seleciona Pais....";
        h1.innerHTML = "Deber seleccionar un continente";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
    }
    //     // A continuación le paso a la web, lo que quiero que me devuelva..., es decir, los paises de la region seleccionada
    //     // Para ello, le tengo que decir que selctContinentes tiene que interpretarlo como un objeto de tipo SelectElement, en lugar de solo Element(que es su padre), que es lo que haría si no le hicieramos la conversión
    //     // Y le tengo que decri que es un array de cero para que no espere más que un valor
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        selectContinentes.selectedOptions[0].value).then((datos) => {
        // Lo anterior, para que me lo deje en blanco, el selector de paises
        // Y a continuación, dado que lo hemos dejado en blanco, le meto la opción por defecto
        selectPaises.innerHTML = "";
        var optionInicial = document.createElement("option");
        optionInicial.value = "0";
        optionInicial.text = "Seleccciona pais...";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(optionInicial);
        // ordeno el array de datos recibido
        datos.sort((a, b) => {
            return a.translations.spa.common.localeCompare(b.translations.spa.common);
        });
        // Para cada pais encontrado en el continente, le creo una entrada en el selector de paises
        datos.forEach((pais) => {
            var _a, _b, _c, _d;
            // Si solo pongo (pais), me da error luego en los common, porque me dice que no tiene definido esa variable. me pongo encima del error y sale corrección rápida
            let option = document.createElement("option");
            option.value = pais.name.common;
            if (((_a = pais.translations) === null || _a === void 0 ? void 0 : _a.spa) === undefined)
                option.text = (_b = pais.name) === null || _b === void 0 ? void 0 : _b.common;
            else
                option.text = (_d = (_c = pais.translations) === null || _c === void 0 ? void 0 : _c.spa) === null || _d === void 0 ? void 0 : _d.common;
            // El "?" dice que aunque falta algo por indefinido, siga la ejecución. Si no, si no encuentra un pais traducido, se pararía
            selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        });
        // let paisSeleccionado:string=
    });
});
