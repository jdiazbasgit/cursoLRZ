import { Component } from "react";

export default class Generales extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state={
            capital:this.props.pais?.capital
        }


    }

    render() {
        return (
            <div>
                <h1>Area:{this.props.pais?.area}</h1>
                <h1>Fronteras:{this.props.pais?.borders}</h1>
                <h1>Google maps:{this.props.pais?.capital}</h1>
                <h1>Open street:{this.props.pais?.population}</h1>
            </div>
            

        )
    }
}