import { Paises } from "./clases/Paises.js";

let paises = new Paises();

var pais: any; //variable en la q estará el país seleccionado 
let divContenido = document.querySelector("#contenido");
(divContenido as HTMLDivElement).innerHTML = "";

let limpiar = (elemento: HTMLDivElement) => {
    elemento.innerHTML = "";
}


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
        option.text = "Selecciona Pais....";
        (h1 as HTMLHeadingElement).innerHTML = "Deber seleccionar un continente"
        selectPaises?.appendChild(option)
    }

    paises.getDatos("https://restcountries.com/v3.1/region/" +
        (selectContinentes as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {
            //(selectPaises as HTMLSelectElement).innerHTML = ""
            var optionInicial = document.createElement("option");
            optionInicial.value = "0";
            optionInicial.text = "Selecciona pais...";
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

let selectPaises = document?.querySelector("#paises");

//evento change paises
document.querySelector("#paises")?.addEventListener("change", () => {
    limpiar(divContenido as HTMLDivElement);
    let parrafo = document.createElement("p");
    (parrafo as HTMLParagraphElement).innerHTML = "";
    let valuep = (selectPaises as HTMLSelectElement).selectedOptions[0].value;

    //si no se ha seleccionado un país:
    if (valuep === "0") {
        // (selectPaises as HTMLSelectElement).innerHTML = "";
        // let option = document.createElement("option");
        // option.value = "0";
        // option.text = "Selecciona Pais....";
        // selectPaises?.appendChild(option);

        (parrafo as HTMLParagraphElement).innerHTML = "Debes seleccionar un país";
        divContenido?.appendChild(parrafo);
    }
})

//evento clic del boton Geograficos
document.querySelector("#geograficos")?.addEventListener("click", () => {
    limpiar(divContenido as HTMLDivElement);
    let parrafo = document.createElement("p");

    let valuep = (selectPaises as HTMLSelectElement).selectedOptions[0].value;
    if (valuep === "0") {
        (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises?.appendChild(option);

        (parrafo as HTMLParagraphElement).innerHTML = "Debes seleccionar un país";
        divContenido?.appendChild(parrafo);
    }


    //si se ha seleccionado un país se cumple la promesa:
    paises.getDatos("https://restcountries.com/v3.1/name/" +
        (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {

            datos.forEach((info:
                {
                    area: string,
                    borders: Array<string>,

                    maps: {
                        googleMaps: string,
                        openStreetMaps: string,
                    };

                }) => {
                let parrafo1 = document.createElement("p");
                let parrafo2 = document.createElement("p");
                let parrafo3 = document.createElement("p");
                let parrafo4 = document.createElement("p");
                
                (parrafo1 as HTMLParagraphElement).innerHTML = `Área: ${info.area} km^2`;
                (parrafo2 as HTMLParagraphElement).innerHTML = `Fronteras: `;
                
                //Bucle for para todas las fronteras:
                let fronteras:Array<string>=[];
                for (let i=0; i < info.borders.length; i++) {
                    fronteras.push(info.borders[i]);      
                }
                let ul = document.createElement("ul");
                fronteras.forEach((frontera)=> {
                    let li = document.createElement("li");
                    ul.appendChild(li);
                    (li as HTMLLIElement).innerHTML = frontera;
                })

                //para cambiar de cca3 a nombre completo
                // paises.getDatos("https://restcountries.com/v3.1/alpha/" + fronteras.then((datos: Array<any>) => {

                // })
                               
                divContenido?.appendChild(parrafo2);
                divContenido?.appendChild(ul);

                         
                (parrafo3 as HTMLParagraphElement).innerHTML = `Google Map: `;
                let a1 = document.createElement("a");  
                a1.href = info.maps.googleMaps;
                a1.target = "_blank";
                (a1 as HTMLAnchorElement).innerHTML = `${info.maps.googleMaps}`;

                (parrafo4 as HTMLParagraphElement).innerHTML = `Street Map :`;
                let a2 = document.createElement("a");
                a2.href = info.maps.openStreetMaps;
                a2.target = "_blank";
                (a2 as HTMLAnchorElement).innerHTML = `${info.maps.openStreetMaps}`;


                divContenido?.appendChild(parrafo1);
                divContenido?.appendChild(parrafo3);
                divContenido?.appendChild(parrafo4);
                parrafo3.appendChild(a1);
                parrafo4.appendChild(a2);

            })
        })
})

//evento clic del boton
document.querySelector("#generales")?.addEventListener("click", () => {
    limpiar(divContenido as HTMLDivElement);
    let parrafo = document.createElement("p");

    let valuep = (selectPaises as HTMLSelectElement).selectedOptions[0].value;
    if (valuep === "0") {
        (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises?.appendChild(option);

        (parrafo as HTMLParagraphElement).innerHTML = "Debes seleccionar un país";
        divContenido?.appendChild(parrafo);
    }

    //si se ha seleccionado un país se cumple la promesa:
    paises.getDatos("https://restcountries.com/v3.1/name/" +
        (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {
            datos.forEach((info:
                {
                    name: {
                        common: string;
                        official: string;
                    };
                    capital: string;
                    population: string;

                }) => {
                let parrafo1 = document.createElement("p");
                let parrafo2 = document.createElement("p");
                let parrafo3 = document.createElement("p");
                let parrafo4 = document.createElement("p");
                (parrafo1 as HTMLParagraphElement).innerHTML = `Nombre común: ${info.name.common}`;
                (parrafo2 as HTMLParagraphElement).innerHTML = `Nombre oficial: ${info.name.official}`;
                (parrafo3 as HTMLParagraphElement).innerHTML = `Capital: ${info.capital}`;
                (parrafo4 as HTMLParagraphElement).innerHTML = `Poblacion: ${info.population} habitantes`;

                divContenido?.appendChild(parrafo1);
                divContenido?.appendChild(parrafo2);
                divContenido?.appendChild(parrafo3);
                divContenido?.appendChild(parrafo4);
            });
        })
})

document.querySelector("#banderas")?.addEventListener("click", () => {
    limpiar(divContenido as HTMLDivElement);
    let parrafo = document.createElement("p");

    let valuep = (selectPaises as HTMLSelectElement).selectedOptions[0].value;
    if (valuep === "0") {
        (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises?.appendChild(option);

        (parrafo as HTMLParagraphElement).innerHTML = "Debes seleccionar un país";
        divContenido?.appendChild(parrafo);
    }

    paises.getDatos("https://restcountries.com/v3.1/name/" +
        (selectPaises as HTMLSelectElement).selectedOptions[0].value).then((datos: Array<any>) => {
            datos.forEach((info:
                {
                    coatOfArms: {
                        svg: string;
                    };
                    flags: {
                        svg: string;
                    };

                }) => {
                let img1 = document.createElement("img");
                let img2 = document.createElement("img");
                img1.src = info.flags.svg;
                img1.width = 400;
                img2.src = info.coatOfArms.svg;
                img1.width = 400;

                (img1 as HTMLImageElement).innerHTML = `Bandera:`;
                divContenido?.appendChild(img1);
                (img2 as HTMLImageElement).innerHTML = `Escudo:`;
                divContenido?.appendChild(img2);
            });
        })
})

document.querySelector("#traducciones")?.addEventListener("click", () => {
    limpiar(divContenido as HTMLDivElement);
    let parrafo = document.createElement("p");

    let valuep = (selectPaises as HTMLSelectElement).selectedOptions[0].value;
    if (valuep === "0") {
        (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Selecciona Pais....";
        selectPaises?.appendChild(option);

        (parrafo as HTMLParagraphElement).innerHTML = "Debes seleccionar un país";
        divContenido?.appendChild(parrafo);
    }


})










