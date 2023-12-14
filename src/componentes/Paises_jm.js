import { Component } from "react";



export default class Paises extends Component{
	constructor(){
		super ()
        this.textoBotonSinEstado="nuevo texto del boton"
		this.state={
			idBoton:"",
            textBoton: "PULSAME  A MI",
            textoH1:"",
}

    }
    botonPulsado=(e)=>{
        this.setState({textoH1:"BIENVENIDO"})
        //let boton=e.target
        //alert(boton.id)
    }
    render(){
        return(
            <div>
                <button id="soy un boton" onClick={this.botonPulsado}>{this.state.textBoton}</button>
                <button>{this.textoBotonSinEstado}</button>
                <h1>{this.state.textoH1}</h1>
            </div>
        )
    }
}