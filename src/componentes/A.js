import { Component } from "react";


export default class A extends Component {


    constructor(){
        super()
        this.state={
            valor:true
        }
    }
    componentDidMount(){
        this.setState({valor:false})
    }

    render() {
        return (
            <div>
                <h1> SOY A</h1>
            </div>

        )
    }
}