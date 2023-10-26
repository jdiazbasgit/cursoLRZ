//array con los 6 numeros de la primitiva:

let numerosPrimi = new Array();

function dameNumero() { //dameNumero = ()=>{
    let numero = 0;
    while (numero == 0 || numero > 49) {
        valido = true;
        numero = Math.trunc(Math.random() * 100); //eq: Math.floor(Math.random()*49 +1);
    }
    return numero;
}

let max=6;
while (numerosPrimi.length < max) {
    let num = dameNumero();
    if (!numerosPrimi.includes(num)) // equivalente: if (numerosPrimi.indexOf(num) === -1)
        numerosPrimi.push(num); 
}

// nombreArray.sort(a,b) SORT ordena un array
let termine = false;
while (!termine) { // while(termine==false)
    termine = true;
    for (let i = 0; i < numerosPrimi.length - 1; i++) {
        if (numerosPrimi[i] > numerosPrimi[i + 1]) {
            termine = false;
            let temporal = numerosPrimi[i + 1];
            numerosPrimi[i + 1] = numerosPrimi[i];
            numerosPrimi[i] = temporal;
        }
    }
}

function muestra(arrayNumeros) {

    let contenedorpares = document.querySelector("#contenedorpares");
    let h1Nuevo = document.createElement("h1");
    h1Nuevo.innerHTML = "Tus números de la primitiva son:";
    contenedorpares.classList.add("text-center");
    contenedorpares.appendChild(h1Nuevo);

    for (let i = 0; i < arrayNumeros.length; i++) {
        let contenedorimpares = document.querySelector("#contenedorimpares");
        let pNuevo = document.createElement("p");
        pNuevo.innerHTML = arrayNumeros[i];
        pNuevo.classList.add("text-center");
        contenedorimpares.appendChild(pNuevo);
    }
    console.log(`Tus numeros para la Primitiva son: ${arrayNumeros}`);
}

muestra(numerosPrimi);