

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

    var edad =19
    var salario =50
    if (edad <=15)
        salario=20
    let edad1 = 58
    console.log("dentro edad vale:" + edad1)
    
    
    
    console.log("salario=" + salario)
    edad++
    console.log("fuera edad vale:" + edad)     


//for (valor de inicio; condicion; incremento o decremento)
let contador=0;
    for (let i=0; i<10)



        if (i % 2 != 0) {
            console.log(`valor de i: ${i}`)
             contador++
        }
    }    

    console.log(`el número de elementos es ${contador}`)

    let numeros= new Array() // array que inicia vacio
    let numeros1=[] //array de una dimension que inicia vacio
    let numeros2=[3,6,5,7,9,34] //array de una dimension que inicia con valores
    let numeros3=[[3,6,6,6,6,5],
                    [7,9,34]] // array de dos dimensiones filas y columnas
    numeros3[1][2]=316 // de la variable "numeros3" cambiame el valor de la fila 1 (0,1) y la columna 2 (0,1,2) el valor de 34 por 316
    numeros2[5]=15 //cambiar el valor del 34 que esta en la posiciòn 5, es decir, se cuenta desde 0,1,2,3,4,5
    console.log(numeros) //imprime por consola los valores de la variable numeros
    console.log(numeros1) //imprime por consola los valores de la variable numeros1
    console.log(numeros2) //imprime por consola los valores de la variable numeros2
    console.log(numeros3) //imprime por consola los valores de la variable numeros3
    for (i=0;i<numeros2.length;i++)
        console.log(`valor del array: ${numeros2[i]}`)

        numeros2.forEach(function(e){//le agrego los valores de la variable numeros2 a "e"
            console.log(`elemento dentro del foreach es: ${e+100}`)//a cada valor de numeros2 que le pase a "e" le sumo 100
        })
    }
