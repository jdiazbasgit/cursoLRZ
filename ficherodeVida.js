"use strict";
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
var Paises_js_1 = require("./clases/Paises.js");
var paises = new Paises_js_1.Paises();
var pais; //variable en la q estará el país seleccionado 
var divContenido = document.querySelector("#contenido");
var limpiar = function (elemento) {
    elemento.innerHTML = "";
};
limpiar(divContenido);
(_a = document.querySelector("#continente")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", function () {
    limpiar(divContenido);
    var h1 = document.querySelector("h1");
    h1.innerHTML = "";
    var selectContinentes = document.querySelector("#continente");
    var selectPaises = document.querySelector("#paises");
    var value = selectContinentes.selectedOptions[0].value;
    if (value === "0") {
        selectPaises.innerHTML = "";
        var option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        h1.innerHTML = "Debes seleccionar un continente";
        h1.classList.add("text-danger");
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
    }
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        selectContinentes.selectedOptions[0].value).then(function (datos) {
        selectPaises.innerHTML = "";
        var optionInicial = document.createElement("option");
        optionInicial.value = "0";
        optionInicial.text = "Selecciona pais...";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(optionInicial);
        datos.sort(function (a, b) {
            return a.translations.spa.common.localeCompare(b.translations.spa.common);
        });
        datos.forEach(function (pais) {
            var _a, _b, _c, _d;
            // (pais) me pongo encima del error y sale corrección rápida
            var option = document.createElement("option");
            option.value = pais.name.common;
            if (((_a = pais.translations) === null || _a === void 0 ? void 0 : _a.spa) === undefined)
                option.text = (_b = pais.name) === null || _b === void 0 ? void 0 : _b.common;
            else
                option.text = (_d = (_c = pais.translations) === null || _c === void 0 ? void 0 : _c.spa) === null || _d === void 0 ? void 0 : _d.common;
            selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        });
    });
});
var selectPaises = document === null || document === void 0 ? void 0 : document.querySelector("#paises");
//evento change paises
(_b = document.querySelector("#paises")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", function () {
    limpiar(divContenido);
    var h1 = document.createElement("h1");
    h1.innerHTML = "";
    var valuep = selectPaises.selectedOptions[0].value;
    //si no se ha seleccionado un país:
    if (valuep === "0") {
        selectPaises.innerHTML = "";
        var option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return; //para que no hafa la linea 89
    }
    paises.getDatos("https://restcountries.com/v3.1/name/" +
        selectPaises.selectedOptions[0].value).then(function (datos) {
        pais = datos[0]; //aquí metemos el objeto país (y coges la primera posicion)
    });
});
//evento clic del boton Geograficos
(_c = document.querySelector("#geograficos")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    limpiar(divContenido);
    var h1 = document.createElement("h1");
    var valuep = selectPaises.selectedOptions[0].value;
    if (valuep === "0") {
        selectPaises.innerHTML = "";
        var option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
    }
    //si se ha seleccionado un país se cumple la promesa:
    var parrafo1 = document.createElement("p");
    var parrafo2 = document.createElement("p");
    var parrafo3 = document.createElement("p");
    var parrafo4 = document.createElement("p");
    parrafo1.innerHTML = "\u00C1rea: ".concat(pais.area, " km^2");
    parrafo2.innerHTML = "Fronteras: ";
    //Bucle for para todas las fronteras:
    var fronteras = [];
    for (var i = 0; i < pais.borders.length; i++) {
        fronteras.push(pais.borders[i]);
    }
    var ul = document.createElement("ul");
    fronteras.forEach(function (frontera) {
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = frontera;
    });
    //para cambiar de cca3 a nombre completo
    // paises.getDatos("https://restcountries.com/v3.1/alpha/" + fronteras.then((datos: Array<any>) => {
    // })
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo2);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(ul);
    parrafo3.innerHTML = "Google Map: ";
    var a1 = document.createElement("a");
    a1.href = pais.maps.googleMaps;
    a1.text = "Clica aquí";
    a1.target = "_blank";
    //(a1 as HTMLAnchorElement).innerHTML = `${pais.maps.googleMaps}`;
    parrafo4.innerHTML = "Street Map :";
    var a2 = document.createElement("a");
    a2.href = pais.maps.openStreetMaps;
    a2.text = "Clica aquí";
    a2.target = "_blank";
    //(a2 as HTMLAnchorElement).innerHTML = `${pais.maps.openStreetMaps}`;
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo1);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo3);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo4);
    parrafo3.appendChild(a1);
    parrafo4.appendChild(a2);
});
//evento clic del boton
(_d = document.querySelector("#generales")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    limpiar(divContenido);
    var h1 = document.createElement("h1");
    var valuep = selectPaises.selectedOptions[0].value;
    if (valuep === "0") {
        selectPaises.innerHTML = "";
        var option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return;
    }
    var parrafo1 = document.createElement("p");
    var parrafo2 = document.createElement("p");
    var parrafo3 = document.createElement("p");
    var parrafo4 = document.createElement("p");
    parrafo1.innerHTML = "Nombre com\u00FAn: ".concat(pais.name.common);
    parrafo2.innerHTML = "Nombre oficial: ".concat(pais.name.official);
    parrafo3.innerHTML = "Capital: ".concat(pais.capital);
    parrafo4.innerHTML = "Poblacion: ".concat(pais.population, " habitantes");
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo1);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo2);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo3);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo4);
});
(_e = document.querySelector("#banderas")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", function () {
    limpiar(divContenido);
    var h1 = document.createElement("h1");
    var valuep = selectPaises.selectedOptions[0].value;
    if (valuep === "0") {
        var option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return;
    }
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    img1.src = pais.flags.svg;
    img1.width = 400;
    img2.src = pais.coatOfArms.svg;
    img1.width = 400;
    img1.innerHTML = "Bandera:";
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(img1);
    img2.innerHTML = "Escudo:";
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(img2);
});
(_f = document.querySelector("#traducciones")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", function () {
    limpiar(divContenido);
    var h1 = document.createElement("h1");
    var valuep = selectPaises.selectedOptions[0].value;
    if (valuep === "0") {
        var option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
    }
});
