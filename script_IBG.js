
// var ver=(botonParaPulsar)=>{
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

    var edad=15;
    var salario=0;
    if(edad<=15){ 
    
        salario=20
        // alert("la edad la veo")
    }
    else{
        salario=50
        
    }
    edad++
    console.log("fuera la edad vake:"+edad)

    let numeros = new Array ();
let numeros1 = [];
let numeros2 = [3, 6, 5, 7, 9, 34]
numeros2[5] = 15
console.log(numeros)
console.log(numeros1)
console.log(numeros2)
for (i = 0; i < numeros2.length; i++);
console.log(`valor del array: ${numeros2[i]}`);

numeros2.forEach(function(e){
    console.log(e)
    for(i=0;i<e.length;i++) 
    console.log(e[i])

})
}




