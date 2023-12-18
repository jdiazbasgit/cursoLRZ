import { Component } from "react";
import { Router, Link, BrowserRouter } from 'react-router-dom';

export default class Nav extends Component {

    render() {
        return (
            <div>
                <ul>
                   
                        <li><Link to="a"> ir a A</Link></li>
                        <li><Link to="/b">ir a B</Link></li>
                        <li><Link to="/c">ir a C</Link></li>
                   
                </ul>

            </div>
        )
    }
}