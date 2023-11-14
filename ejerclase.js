

console.log ("los primeros 50 números pares desde el 1 al 50 son:")

// for (let i=2; i<51; i+=2){
//     console.log (`  ${i}`);
    

// }

// console.log ("los segundos 50 números impares desde el 51 al 100 son:")
// for (i=51; i<100; i+=2){
//     console.log (`${i}`);
// }

// for (let i=0; i<=50;i++){
//     if (i %2 ==0){
//     let numerospares = document.querySelector("#numerospares")
//     let h1nuevo = document.createElement("h1")
//     h1nuevo.innerHTML=i
//     h1nuevo.classList.add("bg-danger")
//     h1nuevo.classList.add("tex-center")
//     numerospares.appendChild(h1nuevo)
    
// }
// }

let divEjercicio1 = document.querySelector("#ejercicio1")
for (let i=0; i<fin; i++){
    if ((i<=fin/2) && (i%2==0)){
        let h1=document.createElement("h1")
        h1.innerHTML=i
        if ((i<= fin/2) && (i%2==0)) {
            h1.classList.add("text-center","bg-danger")
            divEjercicio1
        }


    }
}