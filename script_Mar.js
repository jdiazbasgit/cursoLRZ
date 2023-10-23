
function ver (boton){
    var divContenedor=document.querySelector("#divContenedor"); //querySelector recupera el objeto divContenedor > lo meto en la var divContenedor
    var h1Nuevo=document.createElement("h1"); //createElement crea un elemento de tipo H1 vacío en el documento > lo meto en la var h1Nuevo
    h1Nuevo.innerHTML="Has pulsado el botón"; //añado el texto "has pulsado el botón" en la var divContenedor
    divContenedor.classList.add("bg-danger"); //añade la clase bg-success a la var divContenedor
    divContenedor.appendChild(h1Nuevo); //appendChild crea el h1 como hijo de divContenedor

    //var boton=document.querySelector("#botoncito")
    boton.classList.remove("bg-danger");
    boton.classList.add("bg-success");

    var edad="15";
    if (edad===15){ //== compara el valor === compara valor y TIPO más recomendable usar la doble comparación
        let edad=58; //si pusieramos un var machacaría el valor de 15 po 58
        console.log("dentro edad vale:"+edad);       
    }
    console.log("fuera edad vale:"+edad);
}