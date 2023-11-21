var _a, _b, _c, _d, _e, _f;
import { Paises } from "./clases/Paises.js";
let paises = new Paises();
var pais; //variable en la q estará el país seleccionado de tipo Pais
let divContenido = document.querySelector("#contenido");
let limpiar = (elemento) => {
    elemento.innerHTML = "";
};
limpiar(divContenido);
(_a = document.querySelector("#continente")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", () => {
    limpiar(divContenido);
    let h1 = document.querySelector("h1");
    h1.innerHTML = "";
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    let value = selectContinentes.selectedOptions[0].value;
    if (value === "0") {
        selectPaises.innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        h1.innerHTML = "Debes seleccionar un continente";
        h1.classList.add("text-danger");
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
    }
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        selectContinentes.selectedOptions[0].value).then((datos) => {
        selectPaises.innerHTML = "";
        var optionInicial = document.createElement("option");
        optionInicial.value = "0";
        optionInicial.text = "Selecciona pais...";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(optionInicial);
        datos.sort((a, b) => {
            return a.translations.spa.common.localeCompare(b.translations.spa.common);
        });
        datos.forEach((pais) => {
            var _a, _b, _c, _d;
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
let selectPaises = document === null || document === void 0 ? void 0 : document.querySelector("#paises");
//evento change paises
(_b = document.querySelector("#paises")) === null || _b === void 0 ? void 0 : _b.addEventListener("change", () => {
    limpiar(divContenido);
    let h1 = document.createElement("h1");
    h1.innerHTML = "";
    let valuep = selectPaises.selectedOptions[0].value;
    //si no se ha seleccionado un país:
    if (valuep === "0") {
        selectPaises.innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return; //para que no siga a la linea 104
    }
    paises.getDatos("https://restcountries.com/v3.1/name/" +
        selectPaises.selectedOptions[0].value).then((datos) => {
        pais = datos[0]; //aquí metemos el objeto país (y coges la primera posicion)
    });
});
(_c = document.querySelector("#generales")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => {
    limpiar(divContenido);
    let h1 = document.createElement("h1");
    let valuep = selectPaises.selectedOptions[0].value;
    if (valuep === "0") {
        selectPaises.innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return;
    }
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    let parrafo4 = document.createElement("p");
    parrafo1.innerHTML = `Nombre común: ${pais.name.common}`;
    parrafo2.innerHTML = `Nombre oficial: ${pais.name.official}`;
    parrafo3.innerHTML = `Capital: ${pais.capital}`;
    parrafo4.innerHTML = `Poblacion: ${pais.population} habitantes`;
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo1);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo2);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo3);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo4);
});
//evento clic del boton Geograficos
(_d = document.querySelector("#geograficos")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", () => {
    limpiar(divContenido);
    let h1 = document.createElement("h1");
    let valuep = selectPaises.selectedOptions[0].value;
    if (valuep === "0") {
        selectPaises.innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return;
    }
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    let parrafo4 = document.createElement("p");
    parrafo1.innerHTML = `Área: ${pais.area} km^2`;
    parrafo2.innerHTML = `Fronteras: `;
    let ul = document.createElement("ul");
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo2);
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(ul);
    //Bucle for para todas las fronteras:
    for (let i = 0; i < pais.borders.length; i++) {
        //URL con cca3 
        paises.getDatos("https://restcountries.com/v3.1/alpha/" + pais.borders[i]).then((datos) => {
            let li = document.createElement("li");
            ul.appendChild(li);
            li.innerHTML = `${datos[0].cca3}: ${datos[0].name.common}`; //datos[0].cca3 = pais.borders[i]
        });
    }
    parrafo3.innerHTML = `Google Map: `;
    let a1 = document.createElement("a");
    a1.href = pais.maps.googleMaps;
    a1.text = "Clica aquí";
    a1.target = "_blank";
    //(a1 as HTMLAnchorElement).innerHTML = `${pais.maps.googleMaps}`;
    parrafo4.innerHTML = `Street Map :`;
    let a2 = document.createElement("a");
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
(_e = document.querySelector("#banderas")) === null || _e === void 0 ? void 0 : _e.addEventListener("click", () => {
    limpiar(divContenido);
    let h1 = document.createElement("h1");
    let valuep = selectPaises.selectedOptions[0].value;
    if (valuep === "0") {
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
        return;
    }
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    img1.src = pais.flags.svg;
    img1.width = 400;
    img2.src = pais.coatOfArms.svg;
    img1.width = 400;
    img1.innerHTML = `Bandera:`;
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(img1);
    img2.innerHTML = `Escudo:`;
    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(img2);
});
(_f = document.querySelector("#traducciones")) === null || _f === void 0 ? void 0 : _f.addEventListener("click", () => {
    limpiar(divContenido);
    let h1 = document.createElement("h1");
    let valuep = selectPaises.selectedOptions[0].value;
    if (valuep === "0") {
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        h1.innerHTML = "Debes seleccionar un país";
        h1.classList.add("text-danger");
        divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(h1);
    }
});
