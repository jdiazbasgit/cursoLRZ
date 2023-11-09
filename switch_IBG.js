
ejemploSwitch = numero => {

    let div = document.querySelector("#contenido")
    let h1 = document.createElement("h1")
    switch (numero) {
        case 1:
            h1.innerHTML = "has pilsado el boton 1"
            break;
        case 2:
            h1.innerHTML = "has pilsado el boton 2"
            break;
        case 3:
            h1.innerHTML = "has pilsado el boton 3"
            break;
        case 4:
            h1.innerHTML = "has pilsado el boton 4"
            break;
        case 5:
            h1.innerHTML = "has pilsado el boton 5"
            break;
        default:
            h1.innerHTML = "No has pulsado ninguno de los anteriores"
            break;

    }

    div.innerHTML = "" /*para que se vacie al terminar el contenido*/
    div.appendChild(h1)

}