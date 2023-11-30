import { Component } from "react"

export default class Ejemplo extends Component {
    texto = "Andres"

    render() {
        return (
            <div>
                <h1>{this.texto}</h1>

            </div>
        )
    }
}