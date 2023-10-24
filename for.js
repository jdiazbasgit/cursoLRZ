


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

  
      
    