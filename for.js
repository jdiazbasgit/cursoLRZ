function ver(botonParaPulsar) {
   console.log(botonParaPulsar.classList)
  var divContenedor=document.querySelector("#divContenedor")
   var h1Nuevo = document.createElement("h1")
   h1Nuevo.innerHTML = "has pulsado el boton"
   divContenedor.classList.add("bg-danger")
   divContenedor.appendChild(h1Nuevo)
   //var boton=document.querySelector("#boton")
   botonParaPulsar.classList.remove("bg-danger")
   botonParaPulsar.classList.add("bg-success")
}

 for(let i=0; i<=100; i++){  
   if (i % 2 == 0 ) {
      console.log(`valor de i en pares: ${i}`)   
   } 
}
   

  
  
      
    

// for(let i=0; i<=51; i+=2){    
//    console.log(`valor de i: ${i}`)
// }
// for(let i=53; i<=100; i+=3){    
//    console.log(`valor de i: ${i}`)
// }
