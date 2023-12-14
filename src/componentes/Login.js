import React, { Component } from "react";
import Ejemplo from "./Ejemplo";


export default class Login extends Component {

    constructor() {
        super()
        
        this.state = {
            name: '',
            input: "",
            check:""
        };
        this.guardaNombre = this.guardaNombre.bind(this);
        this.verNombre=this.verNombre.bind(this)
    }

    guardaNombre(e) {
        e.preventDefault();

        this.setState({ name: e.target.value });
        
       
        console.log(e.target)

    }

    cambiar=(e)=>{
        this.setState({check:e.target.checked})
    }

    verNombre = (e) => {
       
        this.setState({input:e.target.value})
    }

    envio(e) {

        alert(this.state.name);
    }

    render() {
        return (
            <div>

                <select onChange={this.guardaNombre}>
                    <option value="0">selecciona opcion</option>
                    <option value="a">aaaa</option>
                    <option value="b">bbbb</option>
                    <option value="c">cccc</option>
                </select><br></br>
                <h1>{this.state.name}</h1>
                <input onChange={this.verNombre}></input>
                <input type="checkbox" onClick={this.cambiar}/>pulsame
            <br></br>
            <h2>{this.state.checked}</h2>
                <button onClick={this.envio.bind(this)}>pulsa</button>
                <h1>{this.state.input}</h1>
                <Ejemplo entrada={this.state.input}></Ejemplo>
            </div>
        )
    }
}