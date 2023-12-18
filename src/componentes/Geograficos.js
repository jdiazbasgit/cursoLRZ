import { Component } from "react";

export default class Geograficos extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            capital: this.props.pais?.capital,
            fronteras: this.props.pais?.borders
        }


    }

    render() {
        return (
            <div>
                <h1>Capital:{this.props.pais?.capital}</h1>
                <h1>Fronteras:{this.props.pais?.borders.toString()}</h1>
            </div>

        )
    }

}