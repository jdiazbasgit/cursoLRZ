import { Component } from "react";
import DatosService from "../services/DatosService";

export default class Nombres extends Component {

  nombres = ["pepe", "luis", "federico", "andres"]
  titulo = "empiezo for"
  service = new DatosService()
  paises = []
  

  constructor(){
    super()
    this.state = {valor: true};
    this.cargaEstado()
  }

  cargaEstado=()=>{
    this.setState({valor:this.state.valor+1})
  }
  
  componentWillMount() {
    this.service.getDatos("https://restcountries.com/v3.1/region/europe")
      .then(paises => {
        this.paises = paises.data;
        //cambiamos el estado 
       //{this.setState({valor: !this.state.valor})}
      })
  }

  render() {

    return (
      <div>

        <ul>
          <li>{this.titulo}</li>
          {this.nombres.map(nombre => {
            //comentario
            return <li>{nombre.toUpperCase()}</li>
          })}
        </ul>

        <ul>
          {
            this.paises.map(pais => <li>{pais.name.common}</li>)
          }

        </ul>
      </div>
    )
  }
}


