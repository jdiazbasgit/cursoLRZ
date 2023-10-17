
function ver (){
    var divContenedor=document.querySelector("#divContenedor") // querySelector recupera el objeto divContenedor, y lo meto en una var
    var h1Nuevo=document.createElement("h1") //crea un elemento de tipo H1 vacío en el documento, y lo meto en la var h1Nuevo
    h1Nuevo.innerHTML="Has pulsado el botón" //añado el texto "has pulsado el botón" en divContenedor
    divContenedor.classList.add("bg-danger") //añade la clase bg-success
    divContenedor.appendChild(h1Nuevo) // crea el h1 como hijo del div

    var boton=document.querySelector("#boton")
    boton.classList.remove("bg-danger")
    boton.classList.add("bg-success")
    
}