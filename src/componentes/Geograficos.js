import { Component } from "react";

export default class Geograficos extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state={
            population:this.props.pais?.population
        }
        this.state={
            common:this.props.pais?.name.common
        }
        this.state={
            capital:this.props.pais?.capital
        }


    }

    render() {
        return (
            <div>
                <h1>Nombre comun:{this.props.pais?.name.common}</h1>
                <h1>Poblacion:{this.props.pais?.population}</h1>
                <h1>Capital:{this.props.pais?.capital}</h1>
            </div>

        )
    }
}