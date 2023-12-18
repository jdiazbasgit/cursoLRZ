import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Nav from './componentes/Nav';
import Footer from './componentes/Footer';

import A from './componentes/A';
import B from './componentes/B';
import C from './componentes/C';
import { Component } from 'react';
import { BrowserRouter,  Route,Routes} from 'react-router-dom';


export default class App extends Component {



  render() {
    return (
      <div>
        <Header>

        </Header>
        <BrowserRouter>
        <Nav></Nav>
       
          <h1>antes</h1>
          <Routes>

            <Route exact path='/a' element={<A/>} />
            <Route exact path='b' element={<B/>} />
            <Route exact path='c' element={<C/>}/>
          </Routes>
      
          <h1>despues</h1>
        </BrowserRouter>

        <Footer></Footer>
      </div >
    )
  }
}


