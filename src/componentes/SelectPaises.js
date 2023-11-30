import {Component} from "react"

export default class SelectPaises extends Component{
  

    render() {
        return (
            <div>
                 Continente:
                <select>
                    <option value="0">selecciona continente....</option>
                    <option value="europe">Europa</option>
                    <option value="africa">Africa</option>
                    <option value="asia">Asia</option>
                    <option value="americas">America</option>
                    <option value="oceania">Oceania</option>
                    
                </select>
            </div>
        )
    }
}