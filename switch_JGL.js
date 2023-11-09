// SWITCH solo puede evaluar Texto (string) o Números (number)

ejemploSwitch = (numero) => {

    let div = document.querySelector("#contenido");
    let h1 = document.createElement("h1")
    switch (numero) {
        case 1:
            h1.innerHTML = "Has pulsado el botón 1"
            break;
        case 2:
            h1.innerHTML = "Has pulsado el botón 2"
            break;
        case 3:
            h1.innerHTML = "Has pulsado el botón 3"
            break;
        case 4:
            h1.innerHTML = "Has pulsado el botón 4"
            break;
        case 5:
            h1.innerHTML = "Has pulsado el botón 5"
            break;
        default:
            h1.innerHTML = "NO has pulsado del 1 al 5"
    }
    div.innerHTML = " "
    div.appendChild(h1)
}