    import { Paises } from "./clases/Paises.js";
var pais:any
let paises = new Paises()
let paisesRecibidos: Array<any> = []
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



document.querySelector("#continente")?.addEventListener("change", () => {
    let h1 = document.querySelector("#error");
    (h1 as HTMLHeadingElement).innerHTML = ""
    let selectContinentes = document.querySelector("#continente")
    let selectPaises = document.querySelector("#paises")
    let value = (selectContinentes as HTMLSelectElement).selectedOptions[0].value;
    if (value === "0") {
        (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Seleciona Pais....";
        (h1 as HTMLHeadingElement).innerHTML = "Deber seleccionar un continente"
        selectPaises?.appendChild(option)
    }

    paises.getDatos("https://restcountries.com/v3.1/region/" +
        (selectContinentes as HTMLSelectElement).selectedOptions[0].value).then((datos:Array<any>) => {
            (selectPaises as HTMLSelectElement).innerHTML = ""
            var optionInicial = document.createElement("option");
            optionInicial.value = "0";
            optionInicial.text = "Seleccciona pais...";
            selectPaises?.appendChild(optionInicial)
            datos.sort((a,b)=>{
            return a.translations.spa.common.localeCompare(b.translations.spa.common)
            })
            datos.forEach((pais:
                {
                    name: {
                        common: string;
                        official:string;
                    };
                    translations: {
                        spa: {
                            official: string;
                            common: string;
                        };
                        
                    };
                }) => {
                // (pais) me pongo encima del error y sale corrección rápida
                let option = document.createElement("option");
                option.value = pais.name.common;
                if (pais.translations?.spa === undefined)
                    option.text = pais.name?.common;
                else
                    option.text = pais.translations?.spa?.common;
                selectPaises?.appendChild(option)
            });


        })
})
document.querySelector("#paises")?.addEventListener("change",()=>{
    let h1=document.createElement("h1")
    
    limpiar(div  as HTMLDivElement)
    h1.innerHTML=
    `he cambiado al pais 
    ${(document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value}`;
    (div as HTMLDivElement).appendChild(h1)
})

let limpiar=(elemento:HTMLDivElement)=>{
    elemento.innerHTML=""
}

document.querySelector("#generales")?.addEventListener("click",()=>{
    let h1=document.createElement("h1")
    limpiar(div as HTMLDivElement)
    
    h1.innerHTML="estoy en generales";

    (div as HTMLDivElement).appendChild(h1)
})

document.querySelector("#geograficos")?.addEventListener("click",()=>{
    let h1=document.createElement("h1")
    limpiar(div as HTMLDivElement)
    h1.innerHTML="estoy en geograficos";
    (div as HTMLDivElement).appendChild(h1)
})

document.querySelector("#banderas")?.addEventListener("click",()=>{
    let h1=document.createElement("h1")
    limpiar(div as HTMLDivElement)
    h1.innerHTML="estoy en banderas";
    (div as HTMLDivElement).appendChild(h1)
})

document.querySelector("#traducciones")?.addEventListener("click",()=>{
    let h1=document.createElement("h1")
    limpiar(div as HTMLDivElement)
    h1.innerHTML="estoy en traducciones";
    (div as HTMLDivElement).appendChild(h1)
})


















//Shadow DOM (DOM independiente del DOM normal)






















