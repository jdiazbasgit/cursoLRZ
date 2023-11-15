import { Paises } from "./clases/Paises_JCGA.js";


// Primera parte, para que me escriba en la pantalla los nombre de los paises y su capital
let paises = new Paises()
let paisesRecibidos: Array<any> = []
let div = document.querySelector("#contenido")
paises.getDatos("https://restcountries.com/v3.1/region/europe").then(datos => {
    paisesRecibidos = datos
  
    paisesRecibidos.forEach(pais => {
        let h1 = document.createElement("h1")
        h1.innerHTML = `${pais.name.official} - ${pais.capital}`
        div?.appendChild(h1)
    })
}).catch(error=>{
    //respuesta del error. Para que si no encuentra la web, me devuelva que hay un error
    let h1= document.createElement("h1")
    h1.innerHTML=error
    div?.appendChild(h1)
})

// Segundo ejercicio, para tener un selector de continente, en función de el, para que le pase los nombre de los paises en ese continente yield, en función del elegido, que empiece a escribir parte de sus datos por pantalla 

// Lo vinculo con un listener para cuando cambie en el selector de continente
document.querySelector("#continente")?.addEventListener("change", () => {
    let h1 = document.querySelector("#error");
    (h1 as HTMLHeadingElement).innerHTML = ""
    let selectContinentes = document.querySelector("#continente")
    let selectPaises = document.querySelector("#paises")
     // Doy de alta las 2 variables vinculadas a los id
    let value = (selectContinentes as HTMLSelectElement).selectedOptions[0].value;
    // Meto un if para tratar si no ha elegido nada
    if (value === "0") {
        (selectPaises as HTMLSelectElement).innerHTML = "";
        let option = document.createElement("option");
        option.value = "0";
        option.text = "Seleciona Pais....";
        (h1 as HTMLHeadingElement).innerHTML = "Deber seleccionar un continente"
        selectPaises?.appendChild(option)
    }
//     // A continuación le paso a la web, lo que quiero que me devuelva..., es decir, los paises de la region seleccionada
//     // Para ello, le tengo que decir que selctContinentes tiene que interpretarlo como un objeto de tipo SelectElement, en lugar de solo Element(que es su padre), que es lo que haría si no le hicieramos la conversión
//     // Y le tengo que decri que es un array de cero para que no espere más que un valor
    paises.getDatos("https://restcountries.com/v3.1/region/" +
        (selectContinentes as HTMLSelectElement).selectedOptions[0].value).then(datos => {
            // Lo anterior, para que me lo deje en blanco, el selector de paises
            // Y a continuación, dado que lo hemos dejado en blanco, le meto la opción por defecto
            (selectPaises as HTMLSelectElement).innerHTML = ""
            var optionInicial = document.createElement("option");
            optionInicial.value = "0";
            optionInicial.text = "Seleccciona pais...";
            selectPaises?.appendChild(optionInicial)
            // Para cada pais encontrado en el continente, le creo una entrada en el selector de paises
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
                // Si solo pongo (pais), me da error luego en los common, porque me dice que no tiene definido esa variable. me pongo encima del error y sale corrección rápida
                let option = document.createElement("option");
                option.value = pais.name.common;
                if (pais.translations?.spa === undefined)
                    option.text = pais.name?.common;
                else
                    option.text = pais.translations?.spa?.common;
                // El "?" dice que aunque falta algo por indefinido, siga la ejecución. Si no, si no encuentra un pais traducido, se pararía
                    selectPaises?.appendChild(option)
            });


        })
})
