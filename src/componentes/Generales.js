import { Component } from "react";

export default class Generales extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state={
            capital:this.props.pais?.capital,
            poblacion:this.props.pais?.population
        }


    }

    render() {
        return (
            <div>
                <h1>Nombre comun:{this.props.pais?.name.common}</h1>
                <h1>Población:{this.props.pais?.population}</h1>
            </div>

        )
    }
}