var _a;
import { Paises } from "./clases/Paises.js";
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
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    let selectNombresOficiales = document.querySelector("#nombreOfficial");
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        selectContinentes.selectedOptions[0].value).then(datos => {
        selectNombresOficiales.innerHTML = "";
        selectPaises.innerHTML = "";
        var optionInicial = document.createElement("option");
        optionInicial.value = "0";
        optionInicial.text = "Seleccciona pais...";
        datos.forEach((pais) => {
            let option = document.createElement("option");
            option.value = pais.name.common;
            option.text = pais.name.common;
            selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
            datos.forEach((pais) => {
                let option = document.createElement("option");
                option.value = pais.name.official;
                option.text = pais.name.official;
                selectNombresOficiales === null || selectNombresOficiales === void 0 ? void 0 : selectNombresOficiales.appendChild(option);
            });
        });
    });
});
