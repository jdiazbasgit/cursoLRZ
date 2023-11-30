
import { Component } from "react"

export default class SelectPaises extends Component {
    
    render() {
        return (
            <div>              
                Continente:<select>
                    <option value="0">Selecciona continente...</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europa</option>
                    <option value="americas">América</option>
                    <option value="africa">África</option>
                    <option value="oceania">Oceanía</option>
                </select>
                Pais:<select>
                    <option value="0">Selecciona pais...</option>
                </select>
            
            </div>
        )
    }
}



