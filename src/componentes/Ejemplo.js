import { Component } from "react"

export default class Ejemplo extends Component {
   
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)

    }


    render() {
        return (
            <div>
                
                <h1 className="fabada">{this.props.entrada.toUpperCase()}</h1>

            </div>
        )
    }
}