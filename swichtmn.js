ejemploSwicht = numero => {

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
            h1.innerHTML = "no has pulsado ningun boton"
            break;
    }
    //aqui limpiamos para que presente los demas botones
    div.innerHTML="" 
    div.appendChild(h1)
}

