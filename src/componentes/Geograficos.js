import { Component } from "react";

export default class Geograficos extends Component {

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

                

                <h1>
                    <a href="{this.props.pais?.maps.googleMaps}" target="_blank">Maps </a>
                </h1>
                <h1>
                    <a href="{this.props.pais?.maps.openStreetMaps}" target="_blank">OpenStreet</a>
                </h1>





            </div>

        )
    }





}