import { Paises } from "./clases/Paises.js";

let paises = new Paises()
let div = document.querySelector("#contenido")
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

document.querySelector("#continente")?.addEventListener("change", () => { //evento "change". El ? hay q ponerlo por si da null
    let selectContinentes = document.querySelector("#continente")
    let selectPaises = document.querySelector("#paises")

    let paisesRecibidos: Array<string> = []; 

    paises.getDatos("https://restcountries.com/v3.1/region/" +
        (selectContinentes as HTMLSelectElement).selectedOptions[0].value).then(datos => {
            (selectPaises as HTMLSelectElement).innerHTML = ""
            var optionInicial: HTMLOptionElement = document.createElement("option");
            (optionInicial as HTMLOptionElement).value = "0";
            (optionInicial as HTMLOptionElement).text = "Seleccciona pais...";
            datos.forEach((pais: { name: { common: string; }; }) => {
                paisesRecibidos.push(pais.name.common);
            })  

            paisesRecibidos.sort() 
            
            paisesRecibidos.forEach(p => {
            let option = document.createElement("option");
            (option as HTMLOptionElement).value = p;//crea atributo value del select
            (option as HTMLOptionElement).text = p;//crea el texto del select
            selectPaises?.appendChild(option)
            })          
        });
})

