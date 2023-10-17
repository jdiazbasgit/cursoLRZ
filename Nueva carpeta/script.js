
function ver (){
    var divContenedor=document.querySelector("#divContenedor") //querySelector recupera el objeto divContenedor > lo meto en la var divContenedor
    var h1Nuevo=document.createElement("h1") //createElement crea un elemento de tipo H1 vacío en el documento > lo meto en la var h1Nuevo
    h1Nuevo.innerHTML="Has pulsado el botón" //añado el texto "has pulsado el botón" en la var divContenedor
    divContenedor.classList.add("bg-danger") //añade la clase bg-success a la var divContenedor
    divContenedor.appendChild(h1Nuevo) //appendChild crea el h1 como hijo de divContenedor

    var boton=document.querySelector("#boton")
    boton.classList.remove("bg-danger")
    boton.classList.add("bg-success")
    
}