// // 6 numeros aleatorios del 1 al 49 y que no se repitan//


// function numAle(min,max) {          //definicion de la funcion
//     // min =Math.ceil(1)
//     // max=Math.floor(49)
//     return Math.floor(Math.random() * (max- min +1)+ min);

//   }
//   console.log(numAle(min,max))

// // var myArray=[]
// // while (myArray.length < 6){

// //     var numAleatorio = (numALe(1,49))
// //     var existe = false;
//     // for (i=o;i<myArray.length;i++)
//     //     if(myArray[i] == numAleatorio){
//     //     existe= true;
//     //     break;
//     // }


// // // }
//   let numerosPrimitiva = Array.from({length: 6}, () =>
//    Math.floor(Math.random() * 49));

//    let termine=false

//   for(i=1;i<numerosPrimitiva.length-1;i++){

//     while (!termine) {
//         termine = true
//         for (let i = 0; i < numerosPrimitiva.length - 1; i++) {
//           if (numerosPrimitiva[i] > numerosPrimitiva[i + 1]) { // el elemento es mayor que el siguiente?
//             termine = false
//             let temporal = numerosPrimitiva[i + 1] // guarda el valor del segundo
//             numerosPrimitiva[i + 1] = numerosPrimitiva[i] //invierte el valor
//             numerosPrimitiva[i] = temporal // invierte el valor
      
//           }
      
//         }
//       }
    
        
// //     }
    
//    console.log(numerosPrimitiva)



// let numerosPrimitiva= new Array()

// //function dameNumero(numeroMaximo)
// let dameNumero = (numeroMaximo) =>{
//     let numero = 0
//     while (numero == 0 || numero >49){
//         num = Math.floor(Math.random()*100)

//     }
//     return numero

// }
// let calcularNumerosPrimitiva =(longuitudDelArray) => {
//     numerosPrimitiva = new Array() // un nuevo array cada vez que se pulsa el button
//     while (numerosPrimitiva.length < longuitudDelArray){
//         let numero = dameNumero(49)

//             if(numerosPrimitiva.indexOf(numero)=== -1){
//                 numerosPrimitiva.push(numero)
//             }
//         }
//     }

//     numerosPrimitiva.sort ((a,b) => a-b)

    // ordenar(numerosPrimitiva)

    // let h1= document.createElement ("h1")
    //     // numerosPrimitiva.forEach(numero => {
    //     //     h1.innerHTML = `${h1.innerHTML} ${numero}`
    //     h1.innerHTML =numerosPrimitiva.toString().replaceAll(",","-")
    //   document.querySelector(#primitiva).innerHTML = ""
    //   document.querySelector(#primitiva).appendChild ()



    

    // //ordenar los numeros

    // let ordenar(matrizDeNuemeros)=>{
    //     let termine =false
    // }




    let numerosPrimitiva = new Array()

    //function dameNumero(numeroMaximo){
    let damenumero = (numeroMaximo) => {
        let numero = 0
        while (numero == 0 || numero > numeroMaximo) {
            numero = Math.floor(Math.random() * 100)
        }
        return numero
    }
    
    let calcularNumerosPrimitiva = (longitudDelArray) => {
        numerosPrimitiva = new Array()
        while (numerosPrimitiva.length < longitudDelArray) {
            let numero = damenumero(49)
            if (numerosPrimitiva.indexOf(numero) === -1) {
                numerosPrimitiva.push(numero)
            }
        }
        numerosPrimitiva.sort((a, b) => {return a - b })
        //ordenar(numerosPrimitiva)
        //si el arrow solo tiene una linea se puede quitar flecha y llaves
        let h1 = document.createElement("h1")
        //numerosPrimitiva.forEach(numero => {
        //h1.innerHTML = `${h1.innerHTML}  ${numero}`
        //
        h1.innerHTML = numerosPrimitiva.join(" - ")
        //h1.innerHTML = numerosPrimitiva.toString().replaceAll(","," - ")
        // })
        document.querySelector("#primitiva").innerHTML = ""
        document.querySelector("#primitiva").appendChild(h1)
    
    }
    
    //function ordenar(matrizDeNumeros){
    let ordenar = (matrizDeNumeros) => {
        let termine = false
        //while(termine==false)
    
        while (!termine) {
            termine = true
            for (let i = 0; i < matrizDeNumeros.length - 1; i++) {
                if (matrizDeNumeros[i] > matrizDeNumeros[i + 1]) {
                    termine = false
                    let temporal = matrizDeNumeros[i + 1]
                    matrizDeNumeros[i + 1] = matrizDeNumeros[i]
                    matrizDeNumeros[i] = temporal
                }
            }
        }
    }
    
    calcularNumerosPrimitiva(6)



