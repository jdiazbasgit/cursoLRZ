var _a, _b, _c, _d, _e;
import { Paises } from "./clases/Paises.js";
let pais;
let paises = new Paises();
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
    limpiar(divContenido);
    let h1 = document.querySelector("#error");
    h1.innerHTML = "";
    let selectContinentes = document.querySelector("#continente");
    var selectPaises = document.querySelector("#paises");
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
let noPais = (value) => {
    if (value === "0") {
        let h1 = document.createElement("h1");
        divContenido.innerHTML = "";
        h1.innerHTML = "Deber seleccionar un pais";
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return;
    }
    ;
};
let selectPaises = document.querySelector("#paises");
(_b = document.querySelector("#paises")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", () => {
    limpiar(divContenido);
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "";
    let value = selectPaises.selectedOptions[0].value;
    selectPaises.innerHTML = "";
    let option = document.createElement("option");
    option.value = "0";
    option.text = "Selecciona Pais....";
    selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
    paises.getDatos("https://restcountries.com/v3.1/name/" +
        selectPaises.selectedOptions[0].value).then((datos) => {
        pais = datos[0];
    });
});
(_c = document.querySelector("#generales")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    limpiar(divContenido);
    noPais(document.querySelector("#paises").selectedOptions[0].value);
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    let parrafo4 = document.createElement("p");
    parrafo1.innerHTML = "nombre comun " + pais.name.common;
    parrafo2.innerHTML = "nombre ofical " + pais.name.official;
    parrafo3.innerHTML = "Capital " + pais.capital;
    parrafo4.innerHTML = "poblacion " + pais.population;
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo1);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo2);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo3);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo4);
    //si se ha seleccionado un pais se cumple la promesA y entra aqui
    // paises.getDatos("https://restcountries.com/v3.1/name/" +
    //     (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {
    //         datos.forEach((info:
    //             {
    //                 name: {
    //                     common: string;
    //                     official: string;
    //                 };
    //                 capital: string;
    //                 population: string;
    //             }) => {
    //             // (pais) me pongo encima del error y sale corrección rápida
    //             let parrafo1 = document.createElement("p");
    //             let parrafo2 = document.createElement("p");
    //             let parrafo3 = document.createElement("p");
    //             let parrafo4 = document.createElement("p");
    //             (parrafo1 as HTMLParagraphElement).innerHTML = "nombre comun " + info.name.common;
    //             (parrafo2 as HTMLParagraphElement).innerHTML = "nombre ofical " + info.name.official;
    //             (parrafo3 as HTMLParagraphElement).innerHTML = "Capital " + info.capital;
    //             (parrafo4 as HTMLParagraphElement).innerHTML = "poblacion " + info.population;
    //             divContenido?.appendChild(parrafo1);
    //             divContenido?.appendChild(parrafo2);
    //             divContenido?.appendChild(parrafo3);
    //             divContenido?.appendChild(parrafo4);
    //         })
    //     })
});
(_d = document.querySelector("#geograficos")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    limpiar(divContenido);
    noPais(document.querySelector("#paises").selectedOptions[0].value);
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    let parrafo4 = document.createElement("p");
    parrafo1.innerHTML = "area es " + pais.area;
    parrafo2.innerHTML = "las fronteras son " + pais.borders;
    let googleMaps = document.createElement("a");
    googleMaps.href = pais.maps.googleMaps;
    googleMaps.text = "abre mapa en Google Maps";
    googleMaps.target = "_blank";
    parrafo3.appendChild(googleMaps);
    let streetView = document.createElement("a");
    streetView.href = pais.maps.openStreetMaps;
    streetView.text = "abre mapa en street View";
    streetView.target = "_blank";
    parrafo4.appendChild(streetView);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo1);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo2);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo3);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo4);
    // paises.getDatos("https://restcountries.com/v3.1/name/" +
    // (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {
    //     datos.forEach((info:
    //         {
    //             area: number;
    //             borders: Array <string>;
    //             maps: {
    //                 googleMaps: string;
    //                 openStreetMaps: string;
    //             };
    //         }) => {
    //         // (pais) me pongo encima del error y sale corrección rápida
    //         let parrafo1 = document.createElement("p");
    //         let parrafo2 = document.createElement("p");
    //         let parrafo3 = document.createElement("p");
    //         let parrafo4 = document.createElement("p");
    //         (parrafo1 as HTMLParagraphElement).innerHTML = "area es " + info.area;
    //         (parrafo2 as HTMLParagraphElement).innerHTML = "las fronteras son " + info.borders;
    //         (parrafo3 as HTMLParagraphElement).innerHTML = "la ubicacion en google maps " + info.maps.googleMaps;
    //         (parrafo4 as HTMLParagraphElement).innerHTML = "la ubicacion en Street maps " + info.maps.openStreetMaps;
    //         divContenido?.appendChild(parrafo1);
    //         divContenido?.appendChild(parrafo2);
    //         divContenido?.appendChild(parrafo3);
    //         divContenido?.appendChild(parrafo4);
    //     })
    // })
});
(_e = document.querySelector("#banderas")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    limpiar(divContenido);
    noPais(document.querySelector("#paises").selectedOptions[0].value);
    paises.getDatos("https://restcountries.com/v3.1/name/" +
        selectPaises.selectedOptions[0].value).then((datos) => {
        datos.forEach((info) => {
            // (pais) me pongo encima del error y sale corrección rápida
            let imagen1 = document.createElement("img");
            let imagen2 = document.createElement("img");
            imagen1.src = info.flags.svg;
            imagen2.src = info.coatOfArms.svg;
            divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(imagen1);
            divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(imagen2);
        });
    });
});
