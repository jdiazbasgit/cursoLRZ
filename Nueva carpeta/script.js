

function ver(){
    alert("he pulsado el boton")
}
function ver1(){
    var divContenedor=document.querySelector("#divContenedor")
    // querySelector recupera un elemento y lo mete en una variable
    var h1Nuevo=document.createElement("h1")
    // createElement crea un nuevo elemento de un tipo concreto, en este caso, uno de tipo h1
    h1Nuevo.innerHTML="Has pulsado el boton"
    // escribe en el html un nuevo h1 con ese texto
    divContenedor.appendChild(h1Nuevo)
    // mete el eleemnto creado como hijo de un contenedor
    divContenedor.classList.add("bg-danger")
    // añade el color rojo al h1
}