

function ver(){
    alert ("hola")
}
function ver2(){
    var h1=document.querySelector("#h1")
}
function ver3() {
    var divContenedor=document.querySelector("#divContenedor")
    var h1Nuevo=document.createElement("h1")
    h1Nuevo.innerHTML="has pulsado el boton"
    divContenedor.classList.add(bg-danger)
    divContenedor.appendChild(h1Nuevo)
    var boton=document.querySelector("#boton")
    boton.classList.remove("bg-danger")
    boton.classList.add("bg-success")
}