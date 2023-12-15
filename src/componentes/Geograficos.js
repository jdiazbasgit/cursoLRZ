import { Component } from "react";

export default class Geograficos extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        

    }

    render() {
        return (
            <div>
                <h1>Área: {this.props.pais?.area}</h1>
                <h1>Fronteras: {this.props.pais?.borders[0]}{this.props.pais?.borders[1]}
                    {this.props.pais?.borders[2]}{this.props.pais?.borders[3]}
                    {this.props.pais?.borders[4]}{this.props.pais?.borders[5]}
                    {this.props.pais?.borders[6]}{this.props.pais?.borders[7]}
                    {this.props.pais?.borders[8]}
                </h1>
                <h1>Enlaces:
                    <ul>{this.props.pais?.maps.googleMaps}</ul>
                    <ul>{this.props.pais?.maps.openStreetMaps}</ul>
                </h1>
            </div>

        )
    }
}