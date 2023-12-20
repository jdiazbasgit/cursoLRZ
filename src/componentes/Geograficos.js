import { Component } from "react";

export default class Geograficos extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            capital: this.props.pais?.capital
        }


    }

    render() {
        return (
            <div>
                <h1>Area: {this.props.pais?.area}</h1>
                <h1>Fronteras: {this.props.pais?.borders}</h1>
                <h1>mapa: <a href="{{pais.maps.googleMaps}}" target="_blank">{this.props.pais?.maps.googleMaps}</a></h1>
            </div>

        )
    }
}