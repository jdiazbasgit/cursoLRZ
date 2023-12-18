import { Component } from "react";

export default class Banderas extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state={
            capital:this.props.pais?.flags.svg,
            poblacion:this.props.pais?.coatOfArms.svg
        }


    }

    render() {

        return (
            <div>
                <img style={{height: "100px",padding: 10}} src={this.props.pais?.flags.svg} />
                <img style={{height: "100px",padding: 10}} src={this.props.pais?.coatOfArms.svg} />
            </div>

        )
    }
}