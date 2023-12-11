import { Component } from "react";
import Ejemplo from "./componentes/Ejemplo";
import Nombres from "./componentes/Nombres";
export default class App extends Component {

  render(){
  
    return (
      <div>
      <Ejemplo></Ejemplo>
      <Nombres></Nombres>
      </div>
    )
  }
}


