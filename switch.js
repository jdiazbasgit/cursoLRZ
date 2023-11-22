
ejemploSwitch = numero =>{

let div=document.querySelector("#contenido")    
let h1= document.createElement("h1")
switch(numero){
    case 1:
        h1.innerHTML="has pulsado el boton 1"
        break;
    case 2: 
    h1.innerHTML="has pulsado el boton 2"
    break;
    case 3:
        h1.innerHTML="has pulsado el boton 3"
        break;
    case 4:
        h1.innerHTML="has pulsado el boton 4"
        break;
    case 5:
        h1.innerHTML="has pulsado el boton 5"
        break;
     default:
        h1.innerHTML=" no has pulsado el boton 1,2,3,4,5"
        break;


}
div.innerHTML=""
div.appendChild(h1)

}
