
// function ver (boton){
//    var divContenedor=document.querySelector("#divContenedor"); //querySelector recupera el objeto divContenedor > lo meto en la var divContenedor
//    var h1Nuevo=document.createElement("h1"); //createElement crea un elemento de tipo H1 vacío en el documento > lo meto en la var h1Nuevo
//    h1Nuevo.innerHTML="Has pulsado el botón"; //añado el texto "has pulsado el botón" en la var divContenedor
//    divContenedor.classList.add("bg-danger"); //añade la clase bg-success a la var divContenedor
//    divContenedor.appendChild(h1Nuevo); //appendChild crea el h1 como hijo de divContenedor

//    //var boton=document.querySelector("#botoncito")
//    boton.classList.remove("bg-danger");
//    boton.classList.add("bg-success");

//    var edad="15";
//    if (edad===15){ //== compara el valor === compara valor y TIPO más recomendable usar la doble comparación
//        let edad=58; //si pusieramos un var machacaría el valor de 15 po 58
//        console.log("dentro edad vale:"+edad);       
//    }
//    console.log("fuera edad vale:"+edad);
// }
// let fin=100;
// for (i = 1; i <= fin; i++) {
//     if (i%2==0 && i<=fin/2) {
//         console.log(i);
//         let contenedorpares = document.querySelector("#contenedorpares");
//         let h1Nuevo = document.createElement("h1");
//         h1Nuevo.innerHTML = i;
//         h1Nuevo.classList.add("text-center","bg-danger"); //añade las 2 clases a la vez
//         contenedorpares.appendChild(h1Nuevo);
//     }
//     if (i%2!=0 && i>fin/2) {
//         console.log(i);
//         let contenedorimpares = document.querySelector("#contenedorimpares");
//         let h1Nuevo = document.createElement("h1");
//         h1Nuevo.innerHTML = i;
//         h1Nuevo.classList.add("text-center","bg-success");
//         contenedorimpares.appendChild(h1Nuevo);
//     }
// }
// let suma=(... numeros)=>{ // function suma(... numeros){
//     let salida=0;
//     numeros.forEach((elemento)=>{
//         salida+=elemento;
//     })
//     return salida;
// }
//  console.log(suma(3,4))
//  console.log(suma(3,4, 400, 200))

// let numerosPrimitiva =[5,4,9,3,7,2,1]
// let termine=false;

// while(!termine) { // while(termine==false)
//     termine=true;
//     for(let i=0;i<numerosPrimitiva.length-1;i++){
//         if (numerosPrimitiva[i]>numerosPrimitiva[i+1]){
//             termine=false;
//             let temporal=numerosPrimitiva[i+1];
//             numerosPrimitiva[i+1]=numerosPrimitiva[i];
//             numerosPrimitiva[i]=temporal;
//         }
//     }

// } 
// console.log(`Después: ${numerosPrimitiva}`)


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