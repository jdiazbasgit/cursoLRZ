
// for (let i = 0; i < 50; i++) {
//     if ((i % 2) == 0) {
//         console.log(i);
//         let contenedorpares = document.querySelector("#contenedorpares");
//         let h1Nuevo = document.createElement("h1");
//         h1Nuevo.innerHTML = i;
//         h1Nuevo.classList.add("text-center","bg-danger");
//         contenedorpares.appendChild(h1Nuevo);

//     }
// }


// for (var i = 51; i < 100; i++) {
//     if ((i % 2) != 0) {
//         console.log(i)
//         let contenedorimpares = document.querySelector("#contenedorimpares");
//         let h1Nuevo = document.createElement("h1");
//         h1Nuevo.innerHTML = i;
//         h1Nuevo.classList.add("text-center","bg-success");

//         contenedorimpares.appendChild(h1Nuevo);
//     }
// }

let fin = 100;
for (let i = 0; i <= fin; i++) {
    if ((i%2==0) &&(i <= fin/2)){
        console.log(i);
        let contenedorpares = document.querySelector("#contenedorpares");
        let h1Nuevo = document.createElement("h1");
        h1Nuevo.innerHTML = i;
        h1Nuevo.classList.add("text-center", "bg-danger");
        contenedorpares.appendChild(h1Nuevo);

    }
    if ((i%2 != 0) &&(i <= fin/2)){
        console.log(i)
        let contenedorimpares = document.querySelector("#contenedorimpares");
        let h1Nuevo = document.createElement("h1");
        h1Nuevo.innerHTML = i;
        h1Nuevo.classList.add("text-center", "bg-success");
        contenedorimpares.appendChild(h1Nuevo);
}
}

// let divEjercicio1 = document.querySelector(#ejercicio1")
// for (let i= <100)


