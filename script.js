

function ver(botonParaPulsar) {
    console.log(botonParaPulsar.classList)
    var divContenedor = document.querySelector("#divContenedor")
    var h1Nuevo = document.createElement("h1")
    h1Nuevo.innerHTML = "has pulsado el boton"
    divContenedor.classList.add("bg-danger")
    divContenedor.appendChild(h1Nuevo)
    //var boton=document.querySelector("#boton")
    botonParaPulsar.classList.remove("bg-danger")
    botonParaPulsar.classList.add("bg-success")

    var edad = 15;
    var salario = 50;
    if (edad <= 15)
        salario = 20
    let edad1 = 58;
    console.log("dentro edad vale:" + edad1);
// al no tener el ; considera que solo la primera linea es parte del if

    edad++
    // ++ añade 1 al valor edad

    console.log("el salario vale:" + salario)
    console.log("fuera la edad vale:" + edad);

}
