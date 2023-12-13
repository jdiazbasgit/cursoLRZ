import { Component } from "react";
import Opcion from "../clases/Opcion";

export default class Paises extends Component {


    constructor() {
        super()
        this.textoBotonSinEstado="nuevo texto del boton"
        this.textoH1SinEstado=""
        this.continentes=[]
        this.state = {
            idBoton: "",
            textoBoton: "PULSAME A MI",
            textoH1:""
        }


    }
    componentWillMount(){
        this.continentes.push(new Opcion("0","Selecciona continente..."))
        this.continentes.push(new Opcion("europe","Europa"))
        this.continentes.push(new Opcion("asia","Asia"))
        this.continentes.push(new Opcion("americas","America"))
        this.continentes.push(new Opcion("africa","Africa"))
        this.continentes.push(new Opcion("oceania","Oceania"))

    }

    botonPulsado=()=>{
        this.setState({textoH1:"BIENVENIDO"})
       // this.textoH1SinEstado="HE PULSADO EL BOTON"
        alert("ha cambiado")
       // let boton=e.target
        //alert(boton.id)
    }
    render() {
        return (
            <div>
                <button id="soy un boton" onClick={this.botonPulsado}>{this.state.textoBoton}</button>
                <button>{this.textoBotonSinEstado}</button><br/>
                <h1>{this.state.textoH1}</h1>
                <select>
                    {this.continentes.map(continente=>{
                        return <option value={continente.valor}>{continente.texto}</option>
                    })}
                </select>
            </div>
        )
    }
}