var _a, _b, _c, _d, _e, _f;
import { Paises } from "./clases/Paises.js";
var pais;
let paises = new Paises();
let paisesRecibidos = [];
let div = document.querySelector("#contenido");
/*paises.getDatos("https://restcountries.com/v3.1/region/europe").then(datos => {
    paisesRecibidos = datos
  
    paisesRecibidos.forEach(pais => {
        let h1 = document.createElement("h1")
        h1.innerHTML = `${pais.name.official} - ${pais.capital}`
        div?.appendChild(h1)
    })
}).catch(error=>{//respuesta del error
    let h1= document.createElement("h1")
    h1.innerHTML=error
    div?.appendChild(h1)
})*/
(_a = document.querySelector("#continente")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", () => {
    let h1 = document.querySelector("#error");
    h1.innerHTML = "";
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    let value = selectContinentes.selectedOptions[0].value;
    if (value === "0") {
        selectPaises.innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Seleciona Pais....";
        h1.innerHTML = "Deber seleccionar un continente";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
    }
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        selectContinentes.selectedOptions[0].value).then((datos) => {
        selectPaises.innerHTML = "";
        var optionInicial = document.createElement("option");
        optionInicial.value = "0";
        optionInicial.text = "Seleccciona pais...";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(optionInicial);
        datos.sort((a, b) => {
            return a.translations.spa.common.localeCompare(b.translations.spa.common);
        });
        datos.forEach((pais) => {
            var _a, _b, _c, _d;
            // (pais) me pongo encima del error y sale corrección rápida
            let option = document.createElement("option");
            option.value = pais.name.common;
            if (((_a = pais.translations) === null || _a === void 0 ? void 0 : _a.spa) === undefined)
                option.text = (_b = pais.name) === null || _b === void 0 ? void 0 : _b.common;
            else
                option.text = (_d = (_c = pais.translations) === null || _c === void 0 ? void 0 : _c.spa) === null || _d === void 0 ? void 0 : _d.common;
            selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        });
    });
});
(_b = document.querySelector("#paises")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", () => {
    //creo las acciones para la select de paises
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML =
        `he cambiado al pais 
    ${document.querySelector("#paises").selectedOptions[0].value}`;
    div.appendChild(h1);
});
let limpiar = (elemento) => {
    elemento.innerHTML = "";
};
(_c = document.querySelector("#generales")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    //colocar en pantallas datos generales
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML = "estoy en generales";
    div.appendChild(h1);
});
(_d = document.querySelector("#geograficos")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    //colocar en pantallas datos geograficos
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML = "estoy en geograficos";
    div.appendChild(h1);
});
(_e = document.querySelector("#banderas")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    //colocar en pantallas datos banderas
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML = "estoy en banderas";
    div.appendChild(h1);
});
(_f = document.querySelector("#traducciones")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
    //colocar en pantallas datos traducciones
    let h1 = document.createElement("h1");
    limpiar(div);
    h1.innerHTML = "estoy en traducciones";
    div.appendChild(h1);
});
