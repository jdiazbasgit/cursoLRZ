var _a, _b, _c, _d, _e, _f;
import { PaisesMn1 } from "../ClassRest/PaisesMn1.js";
let paises = new PaisesMn1();
let paisesRecibidos;
let divContenido = document.querySelector("#contenido");
let limpiar = (elemento) => {
    elemento.innerHTML = "";
};
limpiar(divContenido);
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
        selectContinentes.selectedOptions[0].value)
        .then((datos) => {
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
let noPais = (value) => {
    if (value === "0") {
        let h1 = document.createElement("h1");
        divContenido.innerHTML = "";
        h1.innerHTML = "Debes seleccionar un pais";
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return false;
    }
    ;
    return true;
};
//creo las acciones para la select de paises
let seletPaises = document.querySelector("#paises");
(_b = document.querySelector("#paises")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", () => {
    limpiar(divContenido);
    let h1 = document.createElement("h1");
    h1.innerHTML = "";
    let value = seletPaises.selectedOptions[0].value;
    /*(seletPaises as HTMLSelectElement).innerHTML = "";
    let option = document.createElement("option");
    option.value = "0";
    option.text = "Selecciona Pais....";
    seletPaises?.appendChild(option);*/
    paises.getDatos("https://restcountries.com/v3.1/name/" +
        seletPaises.selectedOptions[0].value).then((datos) => {
        paisesRecibidos = datos[0];
    });
});
(_c = document.querySelector("#generales")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    limpiar(divContenido);
    if (!noPais(document.querySelector("#paises").selectedOptions[0].value))
        return;
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    let parrafo4 = document.createElement("p");
    parrafo1.innerHTML = "nombre comun " + paisesRecibidos.name.common;
    parrafo2.innerHTML = "nombre ofical " + paisesRecibidos.name.official;
    parrafo3.innerHTML = "Capital " + paisesRecibidos.capital;
    parrafo4.innerHTML = "poblacion " + paisesRecibidos.population;
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo1);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo2);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo3);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo4);
});
(_d = document.querySelector("#geograficos")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    limpiar(divContenido);
    if (!noPais(document.querySelector("#paises").selectedOptions[0].value))
        return;
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    let parrafo4 = document.createElement("p");
    parrafo1.innerHTML = "area es " + (paisesRecibidos === null || paisesRecibidos === void 0 ? void 0 : paisesRecibidos.area);
    parrafo2.innerHTML = "las fronteras son " + (paisesRecibidos === null || paisesRecibidos === void 0 ? void 0 : paisesRecibidos.borders);
    let googleMaps = document.createElement("a");
    googleMaps.href = paisesRecibidos === null || paisesRecibidos === void 0 ? void 0 : paisesRecibidos.maps.googleMaps;
    googleMaps.text = "abre mapa en Google Maps";
    googleMaps.target = "_blank";
    parrafo3.appendChild(googleMaps);
    let streetView = document.createElement("a");
    streetView.href = paisesRecibidos === null || paisesRecibidos === void 0 ? void 0 : paisesRecibidos.maps.openStreetMaps;
    streetView.text = "abre mapa en street View";
    streetView.target = "_blank";
    parrafo4.appendChild(streetView);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo1);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo2);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo3);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo4);
});
(_e = document.querySelector("#banderas")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    limpiar(divContenido);
    if (!noPais(document.querySelector("#paises").selectedOptions[0].value))
        return;
    paises.getDatos("https://restcountries.com/v3.1/name/" +
        seletPaises.selectedOptions[0].value).then((datos) => {
        datos.forEach((pais) => {
            /* flags: {
                svg: string;
                

            };
            coatOfArms:{
                svg: string;
            }
*/
            // (pais) me pongo encima del error y sale corrección rápida
            let imagen1 = document.createElement("img");
            let imagen2 = document.createElement("img");
            imagen1.src = pais.flags.svg;
            imagen2.src = pais.coatOfArms.svg;
            divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(imagen1);
            divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(imagen2);
        });
    });
});
(_f = document.querySelector("#traducciones")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
    if (!noPais(document.querySelector("#paises").selectedOptions[0].value))
        return;
    //colocar en pantallas datos traducciones
    let h1 = document.createElement("h1");
    limpiar(divContenido);
    h1.innerHTML = "estoy en traducciones";
    divContenido.appendChild(h1);
});
