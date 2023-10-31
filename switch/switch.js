
ejemploSwitch = numero => {

    let div = document.querySelector("#contenido")
    let h1 = document.createElement("h1")
    switch (numero) {
        case 1:
            h1.innerHTML = "has pulsado el boton uno"
            break;
        case 2:
            h1.innerHTML = "has pulsado el boton dos"
            break;
        case 3:
            h1.innerHTML = "has pulsado el boton tres"
            break;
        case 4:
            h1.innerHTML = "has pulsado el boton cuatro"
            break;
        case 5:
            h1.innerHTML = "has pulsado el boton cinco"
            break;
        default:
            h1.innerHTML = "No has pulsado ni el uno ni el dos, ni nungun otro boton del 1 al 5"
           

    }
    div.innerHTML = ""
    div.appendChild(h1)
}