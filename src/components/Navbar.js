import React, { Component, useContext, useState } from 'react'
import logoAvif from '../logonuevo.gif'
import logoPNG from '../logonuevo.png'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
  async componentDidMount() {
    try{
    let winWidth = await window.innerWidth

    let winHeight = await window.innerHeight
    await this.setState({ winWidth: winWidth })

    await this.setState({ winHeight: winHeight })
    let device = await this.getDeviceType()
    await this.setState({ device: device })
  } catch (err) {
    await this.setState({ errorHappened: true })
    await this.setState({ errorMsg: 'Se ha producido un error en el navegador' })

  }
  }

  async getDeviceType() {
    try {
      let ua = await navigator.userAgent;
      if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
      }
      if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
          ua
        )
      ) {
        return "mobile";
      }
      return "desktop";
    } catch (err) {
      await this.setState({ errorHappened: true })
      await this.setState({ errorMsg: 'Se ha producido un error al detectar el tiempo de dispositivo' })

    }
  };

  constructor(props) {
    super(props)
    this.state = {
      winWidth: 0,
      winHeight: 0,
      device: ""
      
    }
  }

  render() {
    try{      
      let field0 
      let field1 
      let field3
      let width = this.state.winWidth

      if (this.props.userRole) {
        if (this.state.device === "desktop") {
          //si el usuario está logueado y tiene vista de escritorio
          field3 = 
          <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
            <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "30%"}}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%"}}>
                  <NavLink className="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"to="/">
                    Inicio  
                  </NavLink>
                </div>
              </td>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
                  <NavLink  className="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" to="/sobre-drive-team">
                    Nosotros
                  </NavLink>
                </div>
              </td>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "40%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                  <form  style={{ width:"100%" }}
                         onSubmit={(event) => {
                         event.preventDefault()
                         this.props.showNavigatorModal()}}>
                    <button  style={{ width:"100%" }} type="submit" class="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg">
                      Más acciones
                    </button>
                  </form>
                </div>
              </td>              
            </tr>
          </table>
        } else {
          //si el usuario está logueado pero su vista no es de escritorio
          field3 = 
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
              <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "70%" }}>
                  <table>
                    <tr>
                      <td>
                        <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                          <NavLink nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{color: "#28BAC1", textDecoration: "none", width: "100%"}} to="/">Inicio</NavLink>
                        </div>
                      </td>
                    </tr>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                      <td>
                        <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
                          <NavLink nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#28BAC1", textDecoration: "none", width: "100%"}} to="/sobre-drive-team">Nosotros</NavLink>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
                <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%" }}>
                  <div>
                    <form onSubmit={(event) => {
                      event.preventDefault()
                      this.props.showNavigatorModal()}}>
                      <button style={{ fontSize: 17 }} type="submit" className="button"><b>+</b></button>
                    </form>
                  </div>
                </td>
              </tr>
            </table>
        }
      } else {
        if (this.state.device === "desktop") {
          //si el usuario no está logueado y lo ve desde escritorio
          field3 = 
          <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
            <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "20%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                  <NavLink  className="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  to="/"> Inicio  </NavLink>
                </div>
              </td>
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "20%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }} >
                  <NavLink className="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  to="/sobre-drive-team">Nosotros</NavLink>
                </div>
              </td>
              {/* Registro */}
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "20%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                  <form  style={{ width:"100%" }}
                         onSubmit={(event) => {
                         event.preventDefault()
                         this.props.showRegisterModal()}}>
                    <button  style={{ width:"100%" }} type="submit" class="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg">
                      Registrarse
                    </button>
                  </form>
                </div>
              </td>
              {/* Registro */}
              {/* Iniciar sesion */}
              <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "20%" }}>
                <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                  <form  style={{ width:"100%" }}
                         onSubmit={(event) => {
                         event.preventDefault()
                         this.props.showLoginModal()}}>
                    <button  style={{ width:"100%" }} type="submit" class="btn btn-sm btn-block nav-btn" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg">
                      Iniciar sesión
                    </button>
                  </form>
                </div>
              </td>              
              {/* Iniciar sesion */}
            </tr>
          </table>
        } else {
          //si el usuario no está logueado y no lo ve desde escritorio
          field3 = 
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
              <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%" }}>
                <td style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  <div className='btn-group'>
                    <button type="button" className="btn btn-outline-primary" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" onClick={() => this.props.showRegisterModal()}>Registrarse</button>
                    <button type="button" className="btn btn-outline-primary" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" onClick={() => this.props.showLoginModal()}>Iniciar sesión</button>
                  </div>
                </td>
              </tr>
            </table>
        }
      }

      if (this.props.userRole === "admin") {
        let field0Text = "Calcular Complementos"
        if (this.props.showANDirecto) {
          field0Text = "Salir del calculador"
        }

        field0 = <form onSubmit={(event) => {
          event.preventDefault()

          this.props.selectANDirecto()

        }}>
          <button type="submit" className="button" >{field0Text}</button>

        </form>

          field1 = 
          <form onSubmit={(event) => {
            event.preventDefault()
            this.props.usersEmployeeLoad()}}>
            <button type="submit" className="button" >
              Cargar empleados
            </button>
          </form>
      }

      if(this.props.userRole){

        //habilitados ambos botones
        if (this.state.device === 'desktop' && this.props.stateHistory.length>=1 && this.props.stateFuture.length>=1) {
          return (            
          
          <nav nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"      style={{ width: "100%", height: "12%" }} className="navbar fixed-top bg-white shadow">
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "100%", height: "90%" }}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "80%" }}>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center", height: "100%" }}>
                    <a href='https://drive-team.es'>
                      <img src={logoAvif} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", height: "80%" }} className="d-inline-block" alt="Drive-Team" 
                      onError={(e) => {
                        e.target.src = logoPNG;
                      }}/>
                    </a>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 35, width: "25%", textAlign: "left" }}>
                    <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>Drive-Team</a>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {field3}
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{  textAlign: "center", verticalAlign: "middle", width: "12%" }}>
                   
                  </td>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                </tr>
              </tbody>
            </table>

            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "100%", height: "10%", marginTop: "30px"}}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                      {/* Botones */}
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "35%" }}></td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "30%" }}>
                    <div class="btn-group shadow" style={{ width: "100%" }}>
                      <button class="btn btn-primary" 
                              nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                              onClick={(event) => {
                                event.preventDefault()
                                this.props.volverAlPasado()}}>
                        <i className="fas fa-arrow-left"></i>
                      </button>
                      <button class="btn btn-primary" 
                              nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                              onClick={(event) => {
                                event.preventDefault()
                                this.props.regresoAlFuturo()}}> 
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "35%" }}></td>
                  {/* Botones */}
                </tr>
              </tbody>
            </table>    

          </nav>
          
          )
        } 
        //deshabilitado boton de atras
        else if (this.state.device === 'desktop' && this.props.stateHistory.length<1 && this.props.stateFuture.length>=1) {
          return (
          
          <nav nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "12%" }} className="navbar fixed-top bg-white shadow">
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "90%" }}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "80%" }}>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center", height: "100%" }}>
                    <a href='https://drive-team.es'>
                      <img src={logoAvif} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", height: "80%" }} className="d-inline-block" alt="Drive-Team" 
                      onError={(e) => {
                        e.target.src = logoPNG;
                      }}/>
                    </a>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 35, width: "25%", textAlign: "left" }}>
                    <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>Drive-Team</a>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {field3}
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{  textAlign: "center", verticalAlign: "middle", width: "12%" }}>
                    
                  </td>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                </tr>
              </tbody>
            </table>

            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "100%", height: "10%", marginTop: "30px"}}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                      {/* Botones */}
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "35%" }}></td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "30%" }}>
                    <div class="btn-group shadow" style={{ width: "100%" }}>
                      <button class="btn btn-primary disabled" 
                              nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                              onClick={(event) => {
                                event.preventDefault()
                                this.props.volverAlPasado()}}>
                        <i className="fas fa-arrow-left"></i>
                      </button>
                      <button class="btn btn-primary" 
                              nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                              onClick={(event) => {
                                event.preventDefault()
                                this.props.regresoAlFuturo()}}> 
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "35%" }}></td>
                  {/* Botones */}
                </tr>
              </tbody>
            </table>    

          </nav>
          
          )
        }         
        //deshabilitado boton de alante        
        else if (this.state.device === 'desktop' && this.props.stateHistory.length>=1 && this.props.stateFuture.length<1) {
          return (
          
          <nav nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"      style={{ width: "100%", height: "12%" }} className="navbar fixed-top bg-white shadow">
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "100%", height: "90%" }}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "80%" }}>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center", height: "100%" }}>
                    <a href='https://drive-team.es'>
                      <img src={logoAvif} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", height: "80%" }} className="d-inline-block" alt="Drive-Team" 
                      onError={(e) => {
                        e.target.src = logoPNG;
                      }}/>
                    </a>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 35, width: "25%", textAlign: "left" }}>
                    <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>Drive-Team</a>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {field3}
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{  textAlign: "center", verticalAlign: "middle", width: "12%" }}>
                  
                  </td>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                </tr>
              </tbody>
            </table>

            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "100%", height: "10%", marginTop: "30px"}}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                      {/* Botones */}
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "35%" }}></td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "30%" }}>
                    <div class="btn-group shadow" style={{ width: "100%" }}>
                      <button class="btn btn-primary" 
                              nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                              onClick={(event) => {
                                event.preventDefault()
                                this.props.volverAlPasado()}}>
                        <i className="fas fa-arrow-left"></i>
                      </button>
                      <button class="btn btn-primary disabled" 
                              nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                              onClick={(event) => {
                                event.preventDefault()
                                this.props.regresoAlFuturo()}}> 
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "35%" }}></td>
                  {/* Botones */}
                </tr>
              </tbody>
            </table>    

          </nav>
          
          )
        }
        //deshabilitados ambos botones        
        else if (this.state.device === 'desktop' && this.props.stateHistory.length<1 && this.props.stateFuture.length<1) {
          return (
          
          <nav nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"      style={{ width: "100%", height: "12%" }} className="navbar fixed-top bg-white shadow">
            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "100%", height: "90%" }}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "80%" }}>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center", height: "100%" }}>
                    <a href='https://drive-team.es'>
                      <img src={logoAvif} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", height: "80%" }} className="d-inline-block" alt="Drive-Team" 
                      onError={(e) => {
                        e.target.src = logoPNG;
                      }}/>
                    </a>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 35, width: "25%", textAlign: "left" }}>
                    <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>Drive-Team</a>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {field3}
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{  textAlign: "center", verticalAlign: "middle", width: "12%" }}>
                   
                  </td>
                </tr>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                </tr>
              </tbody>
            </table>

            <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"  style={{ width: "100%", height: "10%", marginTop: "30px"}}>
              <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"style={{ width: "100%", height: "100%" }}>
                <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                      {/* Botones */}
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "35%" }}></td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "30%" }}>
                    <div class="btn-group shadow" style={{ width: "100%" }}>
                      <button class="btn btn-primary disabled" 
                              nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                              onClick={(event) => {
                                event.preventDefault()
                                this.props.volverAlPasado()}}>
                        <i className="fas fa-arrow-left"></i>
                      </button>
                      <button class="btn btn-primary disabled" 
                              nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg"
                              onClick={(event) => {
                                event.preventDefault()
                                this.props.regresoAlFuturo()}}> 
                        <i className="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width: "35%" }}></td>
                  {/* Botones */}
                </tr>
              </tbody>
            </table>    

          </nav>
          
          )
        }  


        else {
          return (
    
            <nav style={{ height: "7%", width: "100%" }} className="navbar fixed-top bg-white flex-md-nowrap p-1 shadow">
    
              <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "#484848", height: "100%", width: "100%" }}>
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                  <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "10%" }}>
                    </tr>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "80%" }}>
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "35%" }}>
                        <h1><a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>
    
                          <img src={logoAvif} className="d-inline-block" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80px", height: "80%" }} alt="Drive Team" 
                          onError={(e) => {
                            e.target.src = logoPNG;
    
                          }}/>
                        </a>
                        </h1>
                      </td>
    
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%", height: "100%" }}>
    
    
    
                      </td>
                      <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "35%", height: "100%" }}>
                        {field3}
                      </td>
                    </tr>
                    <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "30%", height: "10%" }}>
                    </tr>
    
                  </tbody>
                </table>
    
    
    
              </div>
    
    
            </nav>
    
    
          )
    
    
        }
      } else {

        if (this.state.device === 'desktop') {
          console.log("desktop")
          return (
            <nav nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "10%", width: "100%" }} className="navbar fixed-top bg-white shadow">
              <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                <tbody nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "10%", width: "100%" }}>
      
                  </tr>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "90%" }}>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center", height: "100%" }}>
                      <a href='https://drive-team.es'>
      
                        <img src={logoAvif} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", height: "80%" }} className="d-inline-block" alt="Drive Team" 
                        onError={(e) => {
                          e.target.src = logoPNG;
                        }}/>
                      </a>
      
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ fontSize: 35, width: "40%", textAlign: "left" }}>
                      <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>Drive-Team</a>
                    </td>
      
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", verticalAlign: "middle" }}>
      
                      {field3}
      
                    </td>
      
                  </tr>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "0%" }}>
      
                  </tr>
                </tbody>
              </table>
      
              <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "25%" }}>
      
              </div>    
      
              <div className="text-center" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "15%", fontSize: 30 }}>
      
              </div>
      
            </nav>
          )       
        } else {

          let winHeigth = window.innerHeight
          let winWidth = window.innerWidth
    
          let turnmode = winWidth>winHeigth    

          if (turnmode === false) {
            return (
      
              <nav style={{ height: "auto", width: "100%", marginBottom: "10px" }} className=" fixed-top bg-white shadow">
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%" }}>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "100%", marginBottom: "10px" }}>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "2%"}}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "35%", textAlign: "center", verticalAlign: "middle", padding: "10px 0" }}>
                      <h1>
                        <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>
                          <img src={logoAvif} className="d-inline-block" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%" }} alt="Drive Team"
                            onError={(e) => {
                              e.target.src = logoPNG;
                            }} />
                        </a>
                      </h1>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "11%", height: "100%" }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "50%", height: "100%" }}>
                      {field3}
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "2%"}}></td>
                  </tr>
                </table>
              </nav>    
            )
          }else{
            return (
    
              <nav style={{ heightMax: "50px", width: "100%", marginBottom: "10px" }} className=" fixed-top bg-white shadow">
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "50px" }}>
                  <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", height: "50px", marginBottom: "10px" }}>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "2%"}}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "35%", textAlign: "center", verticalAlign: "middle", padding: "10px 0" }}>
                      <h1>
                        <a nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textDecoration: "none", color: "#5A5A5A", fontFamily: "Helvetica" }} href='https://drive-team.es'>
                          <img src={logoAvif} className="d-inline-block" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ height: "40px" }} alt="Drive Team"
                            onError={(e) => {
                              e.target.src = logoPNG;
                            }} />
                        </a>
                      </h1>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "11%", height: "100%" }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "50%", height: "100%", textAlign: "center", verticalAlign: "middle"  }}>
                      {field3}
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "2%"}}></td>
                  </tr>
                </table>
              </nav>    
            )
  
          }
        }
      } 


  } catch(err) {
    setTimeout(() => window.location.reload(), 2000);
    return (<div>Error al cargar el Navegador</div>)


  }
  }

 }

export default Navbar;