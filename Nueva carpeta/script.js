

function ver (boton){
    var divContenedor=document.querySelector("#divContenedor")
    var h1Nuevo=document.createElement("h1")
    h1Nuevo.innerHTML="has pulsado el boton"
    divContenedor.appendChild(h1Nuevo)
    // var boton=document.querySelector("#boton")
    boton.classList.remove("bg-danger")
    boton.classList.add("bg-sucess")
 
}