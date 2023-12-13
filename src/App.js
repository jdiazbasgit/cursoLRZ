import { Component } from "react";

import Nombres from "./componentes/Nombres";
import Login from "./componentes/Login";
import { BrowserRouter, Link, Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "react-bootstrap";
export default class App extends Component {
  texto = "pepepepe"
  render() {

    return (
      <div>
        <BrowserRouter>
        <Routes>
   

            <Route  path="/login" element={Login} />

        
        </Routes>
        </BrowserRouter>
        <Nombres></Nombres>
        <Link to="/login" element={Login}/>
      </div>
    )
  }
}


