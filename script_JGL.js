

// Se podría utilizar también un arrow function y sería así:
// var ver=(botonParaPulsar)=> {

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

    var edad = 14;
    if (edad !== 15) {
        let edad = 58;
        console.log("dentro edad vale: " + edad)
    }
    else {
        console.log("Vale otra cosa")
    }

    console.log("fuera edad vale: " + edad);

    // for(valor de inicio;condición;incremento/decremento)

    // for(let i=0;i<10;i++){
    //     console.log(`Valor de i: ${i}`)
    // }

    for (let o = 2; o < 10; o += 2) {
        console.log(`Valor de o: ${o}`)
    }

    let contador = 0;

    for (let i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            console.log(`Valor de i: ${i}`)
            contador++
        }
    }

    console.log(`el numero de elementos es ${contador}`)

    let numeros = new Array();

    let numeros1 = [];

    let numeros2 = [3, 6, 5, 7, 9, 34];

    console.log(numeros);
    console.log(numeros1);
    console.log(numeros2);

    // for (i = 0; i < numeros2.length; i++)
    //     console.log(`valor del array ${numeros2[i]}`)

    // numeros2.forEach(function (e) {
    //     console.log(`elemento dentro del forEach es: ${e + 100}`)
    // })

    numeros2.forEach(function (e) {
        console.log(e)
        for (i = 0; i < e.length; i++)
            console.log(e[i])
    })

    // Esto es igual que lo de debajo

    // numeros2.forEach( (e) => {
    //     console.log(e)
    //     for (i = 0; i < e.length; i++)
    //         console.log(e[i])
    // })


}

