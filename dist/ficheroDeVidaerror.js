var _a;
import { Paises } from "./clases/Paises.js";
let paises = new Paises();
let divContenido = document.querySelector("#contenido");
divContenido.innerHTML = "";
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
    h1.innerHTML = ""; //HTMLHeadingElement es para los tipos header (h1...h6)
    let selectContinentes = document.querySelector("#continente");
    let selectPaises = document.querySelector("#paises");
    let value = selectContinentes.selectedOptions[0].value; //no hace falta poner value:string xq ya le asignas valor. Podemos usar los atributos .selecteOptions[0].value xq ya lo hemos casteado a HTMLSelectElement
    if (value === "0") {
        selectPaises.innerHTML = ""; //  (selectPaises as HTMLSelectElement) CASTEAR
        let option = document.createElement("option"); //aquí no hace falta castear "as" porque es un option y ya sabe de qué tipo es
        option.value = "0";
        option.text = "Selecciona país...";
        h1.innerHTML = "Debes seleccionar un continente";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option); //? porque tmb puede devolver null
    }
    let paisesRecibidos = [];
    //a getDatos le pasamos la URL / "el value q hayamos seleccionado en la selec"
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        selectContinentes.selectedOptions[0].value).then(datos => {
        var _a;
        selectPaises.innerHTML = "";
        var optionInicial = document.createElement("option");
        optionInicial.value = "0"; //(optionInicial as HTMLOptionElement).value = "0";//casting redundante
        optionInicial.text = "Seleccciona pais...";
        selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(optionInicial);
        //datos es un array de objetos
        datos.forEach((pais) => {
            paisesRecibidos.push(pais.name.common); //si no todos los paises tienen "common" poner ? para q no pare la ejecución: paisesRecibidos.push(pais.name?.common);
        });
        paisesRecibidos.sort();
        paisesRecibidos.forEach(p => {
            let option = document.createElement("option");
            option.value = p; //crea atributo value del select
            option.text = p; //crea el texto del select
            selectPaises === null || selectPaises === void 0 ? void 0 : selectPaises.appendChild(option);
        });
        //evento change del segundo select
        (_a = document.querySelector("#paises")) === null || _a === void 0 ? void 0 : _a.addEventListener("change", () => {
            h1.innerHTML = ""; //HTMLHeadingElement es para los tipos header (h1...h6)
            let value = selectPaises.selectedOptions[0].value; //no hace falta poner value:string xq ya le asignas valor. Podemos usar los atributos .selecteOptions[0].value xq ya lo hemos casteado a HTMLSelectElement
            if (value === "0") {
                selectPaises.innerHTML = ""; //  (selectPaises as HTMLSelectElement) CASTEAR
                h1.innerHTML = "Debes seleccionar un país";
            }
            //URL con el nombre del pais tras la barra
            paises.getDatos("https://restcountries.com/v3.1/region/" +
                selectPaises.selectedOptions[0].value).then(datos => {
                //añadir cuerpo!!!!!!!!!!!!
                // meter el valor del pais en una variable
                var _a;
                //evento clic del boton Generales
                (_a = document.querySelector("#generales")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                    let parrafo = document.createElement("p");
                    parrafo.innerHTML = "";
                    // datos.forEach((pais: {name: {common: string;};}) => { 
                    //     paisesRecibidos.push(pais.name.common); 
                    //     (parrafo as HTMLParagraphElement).innerHTML= pais.name.common;
                    // })
                    divContenido === null || divContenido === void 0 ? void 0 : divContenido.appendChild(parrafo);
                });
            });
        });
    });
});
