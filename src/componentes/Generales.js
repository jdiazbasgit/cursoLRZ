import { Component } from "react";

export default class Generales extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h1>Nombre común: {this.props.pais?.capital}</h1>
            </div>

        )
    }
}