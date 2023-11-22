import { PaisesMn1 } from "../ClassRest/PaisesMn1.js";
import { Pais } from "../types/Pais.js";

let paises = new PaisesMn1();
let paisesRecibidos: Pais;
let divContenido = document.querySelector("#contenido");

let limpiar = (elemento: HTMLDivElement) => {
  elemento.innerHTML = "";
}
limpiar(divContenido as HTMLDivElement);
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

document.querySelector("#continente")?.addEventListener("change", () => {
  let h1 = document.querySelector("#error");
  (h1 as HTMLHeadingElement).innerHTML = "";
  let selectContinentes = document.querySelector("#continente");
  let selectPaises = document.querySelector("#paises");
  let value = (selectContinentes as HTMLSelectElement).selectedOptions[0].value;
  if (value === "0") {
    (selectPaises as HTMLSelectElement).innerHTML = "";
    let option = document.createElement("option");
    option.value = "0";
    option.text = "Seleciona Pais....";
    (h1 as HTMLHeadingElement).innerHTML = "Deber seleccionar un continente";
    selectPaises?.appendChild(option);
  }

  paises.getDatos("https://restcountries.com/v3.1/region/" +
        (selectContinentes as HTMLSelectElement).selectedOptions[0].value)
        .then((datos: Array<any>) => {
      (selectPaises as HTMLSelectElement).innerHTML = "";
      var optionInicial = document.createElement("option");
      optionInicial.value = "0";
      optionInicial.text = "Seleccciona pais...";
      selectPaises?.appendChild(optionInicial);
      datos.sort((a: Pais, b: Pais) => {
        return a.translations.spa.common.localeCompare(
          b.translations.spa.common
        );
      });
      datos.forEach((pais: Pais) => {
        // (pais) me pongo encima del error y sale corrección rápida
        let option = document.createElement("option");
        option.value = pais.name.common;
        if (pais.translations?.spa === undefined)
          option.text = pais.name?.common;
        else option.text = pais.translations?.spa?.common;
        selectPaises?.appendChild(option);
      });
    });
})

let noPais= (value: string) :boolean => {
  if (value === "0") {
    let h1 = document.createElement("h1");
    (divContenido as HTMLDivElement).innerHTML = "";
    (h1 as HTMLHeadingElement).innerHTML = "Debes seleccionar un pais";
    divContenido?.appendChild(h1);
    
    return false;
  };
  return true;
}
//creo las acciones para la select de paises
let seletPaises = document.querySelector("#paises");
document.querySelector("#paises")?.addEventListener("change", () => {
  limpiar(divContenido as HTMLDivElement);
  let h1 = document.createElement("h1");
  (h1 as HTMLHeadingElement).innerHTML = "";
  let value = (seletPaises as HTMLSelectElement).selectedOptions[0].value;

  /*(seletPaises as HTMLSelectElement).innerHTML = "";
  let option = document.createElement("option");
  option.value = "0";
  option.text = "Selecciona Pais....";
  seletPaises?.appendChild(option);*/
  

  paises.getDatos("https://restcountries.com/v3.1/name/" +
        (seletPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {
      paisesRecibidos = datos[0];
        });
    })

    document.querySelector("#generales")?.addEventListener("click", () => {
        limpiar(divContenido as HTMLDivElement)
        if(!noPais((document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value))
        return; 
        let parrafo1 = document.createElement("p");
        let parrafo2 = document.createElement("p");
        let parrafo3 = document.createElement("p");
        let parrafo4 = document.createElement("p");
    
        (parrafo1 as HTMLParagraphElement).innerHTML = "nombre comun " + paisesRecibidos.name.common;
        (parrafo2 as HTMLParagraphElement).innerHTML = "nombre ofical " + paisesRecibidos.name.official;
        (parrafo3 as HTMLParagraphElement).innerHTML = "Capital " + paisesRecibidos.capital;
        (parrafo4 as HTMLParagraphElement).innerHTML = "poblacion " + paisesRecibidos.population;
    
        divContenido?.appendChild(parrafo1);
        divContenido?.appendChild(parrafo2);
        divContenido?.appendChild(parrafo3);
        divContenido?.appendChild(parrafo4);
    })






    document.querySelector("#geograficos")?.addEventListener("click", () => {
        limpiar(divContenido as HTMLDivElement)
        if(!noPais((document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value))
      return;
        let parrafo1 = document.createElement("p");
        let parrafo2 = document.createElement("p");
        let parrafo3 = document.createElement("p");
        let parrafo4 = document.createElement("p");
    
        (parrafo1 as HTMLParagraphElement).innerHTML = "area es " + paisesRecibidos?.area;
        (parrafo2 as HTMLParagraphElement).innerHTML = "las fronteras son " + paisesRecibidos?.borders;
        let googleMaps=document.createElement("a");
        googleMaps.href = paisesRecibidos?.maps.googleMaps;
        googleMaps.text= "abre mapa en Google Maps";
        googleMaps.target= "_blank";
        (parrafo3 as HTMLParagraphElement).appendChild(googleMaps);
        let streetView=document.createElement("a");
        streetView.href= paisesRecibidos?.maps.openStreetMaps;
        streetView.text="abre mapa en street View";
        streetView.target="_blank";
    
        (parrafo4 as HTMLParagraphElement).appendChild(streetView);
    
    
    
        divContenido?.appendChild(parrafo1);
        divContenido?.appendChild(parrafo2);
        divContenido?.appendChild(parrafo3);
        divContenido?.appendChild(parrafo4);
});
document.querySelector("#banderas")?.addEventListener("click", () => {
    limpiar(divContenido as HTMLDivElement)
    if(!noPais((document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value))
      return;

    paises.getDatos("https://restcountries.com/v3.1/name/" +
    (seletPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {

        datos.forEach((pais:Pais)=>
            {
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

            (imagen1 as HTMLImageElement).src = pais.flags.svg;
            (imagen2 as HTMLImageElement).src = pais.coatOfArms.svg;

            divContenido?.appendChild(imagen1);
            divContenido?.appendChild(imagen2);
        

        })

    })

})
document.querySelector("#traducciones")?.addEventListener("click",()=>{
  if(!noPais((document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value))
      return;
    //colocar en pantallas datos traducciones
    let h1=document.createElement("h1")
   
    limpiar(divContenido as HTMLDivElement)
    h1.innerHTML="estoy en traducciones";
    (divContenido as HTMLDivElement).appendChild(h1)
})