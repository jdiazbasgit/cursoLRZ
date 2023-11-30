import { Component } from "react";

export default class SelectPaises extends Component {

    render() {
        return (
            <div>
                <h1>Ejercicio de JGL</h1>

                <select name="continentes" id="continentes">
                    <option value="0" disabled selected>Seleccionar continente</option>
                    <option value="africa">África</option>
                    <option value="america">América</option>
                    <option value="asia">Asia</option>
                    <option value="europa">Europa</option>
                    <option value="oceania">Oceanía</option>
                </select>

                <select name="paises" id="paises">
                    <option value="" disabled selected>Seleccionar pais</option>
                </select>


            </div>

        )
    }

}