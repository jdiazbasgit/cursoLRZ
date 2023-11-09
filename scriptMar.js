// function suma(a, b) {
//     return a + b;
// }

//let suma=(a,b)=>a+b

let divContenido = document.querySelector("#contenido")
let tabla = document.createElement("table")
tabla.border = 1
tabla.align="center"
let trCabecera = document.createElement("tr")
let th1 = document.createElement("th")
let th2 = document.createElement("th")
let th3 = document.createElement("th")
th1.innerHTML = "nombre"
th2.innerHTML = "apellido"
th3.innerHTML = "dni"
trCabecera.appendChild(th1)
trCabecera.appendChild(th2)
trCabecera.appendChild(th3)
tabla.appendChild(trCabecera)
divContenido.appendChild(tabla)


let agregarFila = () => {
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    td1.innerHTML=document.getElementById("nombre").value;
    td2.innerHTML=document.getElementById("apellido").value;
    td3.innerHTML=document.querySelector("#dni").value; //2 formas distintas
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tabla.appendChild(tr)
}

// let divJson= document.querySelector("#json")
// divJson.innerHTML=JSON.stringify(document)
// console.log(document.location.port)




