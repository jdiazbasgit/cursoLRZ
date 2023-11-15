var _a;
import { Paises } from "./clases/Paises_JCGA.js";
// Primera parte, para que me escriba en la pantalla los nombre de los paises y su capital
let paises = new Paises();
let paisesRecibidos = [];
let div = document.querySelector("#contenido");
paises.getDatos("https://restcountries.com/v3.1/region/europe").then(datos => {
    paisesRecibidos = datos;
    paisesRecibidos.forEach(pais => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `${pais.name.official} - ${pais.capital}`;
        div === null || div === void 0 ? void 0 : div.appendChild(h1);
    });
}).catch(error => {
    //respuesta del error. Para que si no encuentra la web, me devuelva que hay un error
    let h1 = document.createElement("h1");
    h1.innerHTML = error;
    div === null || div === void 0 ? void 0 : div.appendChild(h1);
});
// Segundo ejercicio, para tener un selector de continente, en función de el, para que le pase los nombre de los paises en ese continente yield, en función del elegido, que empiece a escribir parte de sus datos por pantalla 
(_a = document.querySelector("#continente")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", () => {
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        selectContinentes.selectedOptions[0].value).then(datos => {
        selectPaises.innerHTML = "";
        var optionInicial = document.createElement("option");
        optionInicial.value = "0";
        optionInicial.text = "Seleccciona pais...";
        datos.forEach((pais) => {
            let option = document.createElement("option");
            option.value = pais.name.common;
            option.text = pais.name.common;
            selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        });
    });
});
