


let verNumeros=(fin)=>{
   let ejercicio1 = document.querySelector("#ejercicio1")

   for(let i = 0; i< fin; i++){ 

   if (i <=fin/2 && i % 2 == 0 ) {
     
      let h1 = document.createElement("h1")
      h1.innerHTML = i
      h1.classList.add ("text-center")
      h1.classList.add ("bg-danger")
      ejercicio1.appendChild(h1)
      // console.log(`valor de i en pares: ${i}`)   
   } 
   if (i > fin/2 && i % 2 != 0 ) {
     
      let h1 = document.createElement("h1")
      h1.classList.add  ("text-center")   
      h1.innerHTML = i
      h1.classList.add  ("bg-success")
      ejercicio1.appendChild(h1)
      // console.log(`valor de i en pares: ${i}`)   
   } 
}
}  
/*
let numerosPrimitiva = [5,4,9,3,7,2,1]
  let termine = false
  //while (termine != false)
  console.log("antes:"+ numerosPrimitiva); 
  while(!termine)
  {
   termine = true
   for(let i = 0; i< numerosPrimitiva.length-1; i++) {
      if(numerosPrimitiva[i] > numerosPrimitiva[i+1]){
         termine = false
         let temporal = numerosPrimitiva[i+1]
         numerosPrimitiva[i+1]= numerosPrimitiva[i]
         numerosPrimitiva[i]= temporal
      }
   }
  }
      console.log("despues:"+ numerosPrimitiva);
*/



    ///primitiva con random

    let max = 49
      function getRandomInt() {
         let numerosAleatorios = []

         while (numerosAleatorios.length < 6) {
            let numerosAleatorio = Math.floor(Math.random() * 49)+1

            if (!numerosAleatorios.includes(numerosAleatorio)) {
               numerosAleatorios.push(numerosAleatorio) 
            }
         }
            return numerosAleatorios;
      }
            numerosAleatoriosGenerados=getRandomInt()
            console.log(numerosAleatoriosGenerados);
   
            let termine = false
            //while (termine != false)
            console.log("antes:"+ numerosAleatoriosGenerados); 
            while(!termine)
            {
             termine = true
             for(let i = 0; i< numerosAleatoriosGenerados.length-1; i++) {
                if(numerosAleatoriosGenerados[i] > numerosAleatoriosGenerados[i+1]){
                   termine = false
                   let temporal = numerosAleatoriosGenerados[i+1]
                   numerosAleatoriosGenerados[i+1]= numerosAleatoriosGenerados[i]
                   numerosAleatoriosGenerados[i]= temporal
                }
             }
            }
                console.log("despues:"+ numerosAleatoriosGenerados);
     
  
  
  
  
  