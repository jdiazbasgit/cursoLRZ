import { Component } from "react";

import Nombres from "./componentes/Nombres";
import Login from "./componentes/Login";
import { BrowserRouter, Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Paises from "./componentes/Paises";
import Generales from "./componentes/Generales";
import { Switch } from "antd";
export default class App extends Component {
  texto = "pepepepe"
  render() {

    return (
      <div>

       

        <Paises></Paises>

      </div>
    )
  }
}


