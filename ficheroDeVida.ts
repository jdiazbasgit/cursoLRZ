import { Paises } from "./clases/Paises.js";

let pais:any;
let paises = new Paises();
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
    limpiar(divContenido as HTMLDivElement)
    let h1 = document.querySelector("#error");
    (h1 as HTMLHeadingElement).innerHTML = ""
    let selectContinentes = document.querySelector("#continente")
    var selectPaises = document.querySelector("#paises")
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
        (selectContinentes as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {
            (selectPaises as HTMLSelectElement).innerHTML = ""
            var optionInicial = document.createElement("option");
            optionInicial.value = "0";
            optionInicial.text = "Seleccciona pais...";
            selectPaises?.appendChild(optionInicial)
            datos.sort((a, b) => {
                return a.translations.spa.common.localeCompare(b.translations.spa.common)
            })
            datos.forEach((pais:
                {
                    name: {
                        common: string;
                        official: string;
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
let noPais=(value:string)=>{
    if (value === "0") {
        let h1 = document.createElement("h1");
        (divContenido as HTMLDivElement).innerHTML="";
        
        (h1 as HTMLHeadingElement).innerHTML = "Deber seleccionar un pais";
        divContenido?.appendChild(h1);
        return;
    
    };

}
let selectPaises = document.querySelector("#paises");
document.querySelector("#paises")?.addEventListener("change", () => {
    limpiar(divContenido as HTMLDivElement)
    let parrafo = document.createElement("p");
    (parrafo as HTMLParagraphElement).innerHTML = ""
    let value = (selectPaises as HTMLSelectElement).selectedOptions[0].value;
    (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises?.appendChild(option);

    paises.getDatos("https://restcountries.com/v3.1/name/" +
    (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {

        pais=datos[0]
        })
})

document.querySelector("#generales")?.addEventListener("click", () => {
    limpiar(divContenido as HTMLDivElement)
    noPais((document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value)
    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    let parrafo4 = document.createElement("p");

    (parrafo1 as HTMLParagraphElement).innerHTML = "nombre comun " + pais.name.common;
    (parrafo2 as HTMLParagraphElement).innerHTML = "nombre ofical " + pais.name.official;
    (parrafo3 as HTMLParagraphElement).innerHTML = "Capital " + pais.capital;
    (parrafo4 as HTMLParagraphElement).innerHTML = "poblacion " + pais.population;

    divContenido?.appendChild(parrafo1);
    divContenido?.appendChild(parrafo2);
    divContenido?.appendChild(parrafo3);
    divContenido?.appendChild(parrafo4);


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

})
document.querySelector("#geograficos")?.addEventListener("click", () => {
    limpiar(divContenido as HTMLDivElement)
    noPais((document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value)

    let parrafo1 = document.createElement("p");
    let parrafo2 = document.createElement("p");
    let parrafo3 = document.createElement("p");
    let parrafo4 = document.createElement("p");

    (parrafo1 as HTMLParagraphElement).innerHTML = "area es " + pais.area;
    (parrafo2 as HTMLParagraphElement).innerHTML = "las fronteras son " + pais.borders;
    let googleMaps=document.createElement("a");
    googleMaps.href=pais.maps.googleMaps;
    googleMaps.text="abre mapa en Google Maps";
    googleMaps.target="_blank";
    (parrafo3 as HTMLParagraphElement).appendChild(googleMaps);
    let streetView=document.createElement("a");
    streetView.href=pais.maps.openStreetMaps;
    streetView.text="abre mapa en street View";
    streetView.target="_blank";

    (parrafo4 as HTMLParagraphElement).appendChild(streetView);



    divContenido?.appendChild(parrafo1);
    divContenido?.appendChild(parrafo2);
    divContenido?.appendChild(parrafo3);
    divContenido?.appendChild(parrafo4);
        



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

document.querySelector("#banderas")?.addEventListener("click", () => {
    limpiar(divContenido as HTMLDivElement)
    noPais((document.querySelector("#paises") as HTMLSelectElement).selectedOptions[0].value);


    paises.getDatos("https://restcountries.com/v3.1/name/" +
    (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {

        datos.forEach((info:
            {
                flags: {
                    svg: string;
                    

                };
                coatOfArms:{
                    svg: string; 
                }

            }) => {
            // (pais) me pongo encima del error y sale corrección rápida
            let imagen1 = document.createElement("img");
            let imagen2 = document.createElement("img");

            (imagen1 as HTMLImageElement).src = info.flags.svg;
            (imagen2 as HTMLImageElement).src = info.coatOfArms.svg;

            divContenido?.appendChild(imagen1);
            divContenido?.appendChild(imagen2);
        

        })

    })

});