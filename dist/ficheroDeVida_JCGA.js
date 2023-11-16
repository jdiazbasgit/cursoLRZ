var _a, _b, _c, _d, _e, _f, _g;
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
// Creo una función que me va a rellenar todos los paises en el selector. Como la voy a usar varias veces, la meto en una función independiente
let buscarPaises = () => {
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    // Doy de alta las 2 variables vinculadas a los id. Podría sacarlo y tenerlas fuera, pero ya lo hare despues en su caso
    // Para ello, le tengo que decir que selctContinentes tiene que interpretarlo como un objeto de tipo SelectElement, en lugar de solo Element(que es su padre), que es lo que haría si no le hicieramos la conversión
    // Y le tengo que decri que es un array de cero para que no espere más que un valor
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
            // Hemos creado los types para que no haya qeu dar el tipado a cada variable dentro de pais.Si no, si solo pongo (pais), me da error luego en los common, porque me dice que no tiene definido esa variable. me pongo encima del error y sale corrección rápida.
            let option = document.createElement("option");
            option.value = pais.name.common;
            if (((_a = pais.translations) === null || _a === void 0 ? void 0 : _a.spa) === undefined)
                option.text = (_b = pais.name) === null || _b === void 0 ? void 0 : _b.common;
            else
                option.text = (_d = (_c = pais.translations) === null || _c === void 0 ? void 0 : _c.spa) === null || _d === void 0 ? void 0 : _d.common;
            // El "?" dice que aunque falta algo por indefinido, siga la ejecución. Si no, si no encuentra un pais traducido, se pararía
            selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        });
        // controlamos que este seleccionado el pais
    });
};
// Creo una función que me va a limpiar la pantalla, para cualqeuir elemento
let limpiar = (elemento) => {
    elemento.innerHTML = "";
};
// Selector de Paises vinculado al selector de Continentes
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
    buscarPaises();
});
(_b = document.querySelector("#paises")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", () => {
    //creo las acciones para la select de paises
    let h2 = document.createElement("h2");
    limpiar(div);
    h2.innerHTML = `he cambiado al pais ${document.querySelector("#paises").selectedOptions[0].value}`;
    div.appendChild(h2);
    let h1 = document.querySelector("#error");
    h1.innerHTML = "";
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    // Doy de alta las 2 variables vinculadas a los id
    let value = selectPaises.selectedOptions[0].value;
    // Meto un if para tratar si no ha elegido nada
    if (value === "0") {
        selectPaises.innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Seleciona Pais....";
        h1.innerHTML = "Deber seleccionar un pais";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        // Meto la funcion qeu me rellena el selector de paises, puesto que lo he dejado a cero
        buscarPaises();
    }
});
(_c = document.querySelector("#geograficos")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    //colocar en pantallas datos geograficos
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML = "estoy en geograficos";
    div.appendChild(h1);
});
(_d = document.querySelector("#banderas")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    //colocar en pantallas datos banderas
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML = "estoy en banderas";
    div.appendChild(h1);
});
(_e = document.querySelector("#traducciones")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    //colocar en pantallas datos traducciones
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML = "estoy en traducciones";
    div.appendChild(h1);
});
(_f = document.querySelector("#generales")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
    //colocar en pantallas datos generales
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML = "estoy en generales";
    div.appendChild(h1);
});
(_g = document.querySelector("#paises")) === null || _g === void 0 ? void 0 : _g.addEventListener("change", () => {
    let h1 = document.querySelector("#error");
    h1.innerHTML = "";
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    // Doy de alta las 2 variables vinculadas a los id
    let value = selectPaises.selectedOptions[0].value;
    // Meto un if para tratar si no ha elegido nada
    if (value === "0") {
        selectPaises.innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Seleciona Pais....";
        h1.innerHTML = "Deber seleccionar un pais";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
    }
});
// Vamos a llamar al primer boton..."Generales"
// document.querySelector("#generales")?.addEventListener("click", () => {
//     paises.getDatos("https://restcountries.com/v3.1/region/" +
//         (selectContinentes as HTMLSelectElement).selectedOptions[0].value + "/" + (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {
//             paisesRecibidos = datos;
//                 let h1 = document.createElement("h1")
//                 h1.innerHTML = `${pais.name.official} - ${pais.capital}`
//                 div?.appendChild(h1)
