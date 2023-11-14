import { Paises } from "./clases/Paises_nsr.js";
let paises = new Paises();
let paisesRecibidos = [];
paises.getDatos("https://restcountries.com/v3.1/region/europe").then(datos => {
    paisesRecibidos = datos;
    let div = document.querySelector("#contenido");
    paisesRecibidos.forEach(pais => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `${pais.name.official} - ${pais.capital}`;
        div === null || div === void 0 ? void 0 : div.appendChild(h1);
    });
});
