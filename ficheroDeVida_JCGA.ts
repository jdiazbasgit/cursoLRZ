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


document.querySelector("#continente")?.addEventListener("change",()=>{
    // Lo vinculo con un listener para cuando cambie en el selector de continente
   let selectContinentes=document.querySelector("#continente")
   let selectPaises=document.querySelector("#paises")
    // Doy de alta las 2 variables vinculadas a los id
    
    // A continuación le paso a la web, lo que quiero que me devuelva..., es decir, los paises de la region seleccionada
    // Para ello, le tengo que decir que selctContinentes tiene que interpretarlo como un objeto de tipo SelectElement, en lugar de solo Element(que es su padre), que es lo que haría si no le hicieramos la conversión
    // Y le tengo que decri que es un array de cero para que no espere más que un valor
    paises.getDatos("https://restcountries.com/v3.1/region/"+
     (selectContinentes as HTMLSelectElement).selectedOptions[0].value).then(datos=>{
        (selectPaises as HTMLSelectElement).innerHTML=""
        // Lo anterior, para que me lo deje en blanco, el selector de paises
        // Y a continuación, dado que lo hemos dejado en blanco, le meto la opción por defecto... Y ESTO; DE MOMENTO NO FUNCIONA
        var optionInicial:HTMLOptionElement= document.createElement("option");
       (optionInicial as HTMLOptionElement).value="0";
       (optionInicial as HTMLOptionElement).text="Seleccciona pais...";
        // Para cada pais encontrado en el continente, le creo una entrada en el selector de paises
       datos.forEach((pais: { name: { common: string; }; }) => {
        let option=document.createElement("option");
        (option as HTMLOptionElement).value=pais.name.common;
        (option as HTMLOptionElement).text=pais.name.common;
        selectPaises?.appendChild(option)
       });
        

     })
})