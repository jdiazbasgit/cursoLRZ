import { Component } from "react";
import Opcion from "../clases/Opcion";
import DatosService from "../services/DatosService";
import Generales from "./Generales";

const restcountries = "https://restcountries.com/v3.1/"
export default class Paises extends Component {

    // servicio = new DatosService();
    constructor() {
        super()
        this.textoBotonSinEstado = "nuevo texto del boton"
        this.textoH1SinEstado = ""
        this.continentes = []
        
        this.servicio= new DatosService()
        this.state = {
            idBoton: "",
            textoBoton: "PULSAME A MI",
            textoH1: "",
            paises: [],
            paisElegido : undefined
        }
        this.recuperaContinente = this.recuperaContinente.bind(this)
        this.cargarPais=this.cargarPais.bind(this)

    }
    componentWillMount() {
        this.continentes.push(new Opcion("0", "Selecciona continente..."))
        this.continentes.push(new Opcion("europe", "Europa"))
        this.continentes.push(new Opcion("asia", "Asia"))
        this.continentes.push(new Opcion("americas", "America"))
        this.continentes.push(new Opcion("africa", "Africa"))
        this.continentes.push(new Opcion("oceania", "Oceania"))

    }

    botonPulsado = () => {
        this.setState({ textoH1: "BIENVENIDO" })
        // this.textoH1SinEstado="HE PULSADO EL BOTON"
        alert("ha cambiado")
        // let boton=e.target
        //alert(boton.id)
    }
    recuperaContinente = (e) => {
        e.preventDefault();
        let select = e.target
       

        this.servicio.getDatos(`${restcountries}/region/${select.value}`)
            .then(response => {
                this.setState({ paises: [] })
                this.setState({ paises: response.data.sort((a,b)=>{
                    return a.translations.spa.common.localeCompare(b.translations.spa.common) })
              
                })
               
            })

        //alert(select.value)
    }
    cargarPais = (e) => {
        e.preventDefault();
        
        let nombrePais=e.target.value
        this.servicio.getDatos(`${restcountries}/name/${nombrePais}`)
        .then(response=>{
            this.setState({paisElegido:response.data[0]})
        })

    }

    render() {
        return (
            <div>
                <button id="soy un boton" onClick={this.botonPulsado}>{this.state.textoBoton}</button>
                <button>{this.textoBotonSinEstado}</button><br />
                <h1>{this.state.textoH1}</h1>
                Continente:<select onChange={this.recuperaContinente}>
                    {this.continentes.map(continente => {
                        return <option value={continente.valor}>{continente.texto}</option>
                    })}
                </select> <br></br>
                <select onChange={this.cargarPais}>
                    <option value="0">Selecciona pais....</option>
                    {this.state.paises.map(pais => <option value={pais.name.common}>{pais.translations.spa.common}</option>)}
                </select>
                <Generales pais={this.state.paisElegido}></Generales>
            </div>
        )
    }
}