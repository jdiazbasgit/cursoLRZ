import React, { Component, useContext } from 'react'
import logo from '../logonuevo.avif'
import './modal.css';
import AskInstall from './AskInstall';




class NavigatorModal extends Component {

  render() {
    try {
      var show = this.props.show
      let field0 = <div></div>
      let field1 = <div></div>
      let field2 = <div></div>
      let field3


      if (this.props.userRole) {
        field3 = <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: "100%" }}>
          <form nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: "100%" }} onSubmit={(event) => {
            event.preventDefault()
            this.props.onCloseNav()
            this.props.askNewPass()

          }}>

            <button type="submit" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "66%", backgroundColor: "#2381B8" }} class="btn btn-secondary btn-sm">Cambiar contraseña</button>

          </form>
        </div>
      }


      if (this.props.userRole === "admin") {
        let field0Text = "Calcular Complementos"
        if (this.props.showANDirecto) {
          field0Text = "Salir del calculador"
        }

        field0 = <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: "100%" }}>
          <form nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: "100%" }} onSubmit={(event) => {
            event.preventDefault()
            this.props.onCloseNav()
            this.props.selectANDirecto()

          }}>

            <button type="submit" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "66%", backgroundColor: "#2381B8" }} class="btn btn-secondary btn-sm" >{field0Text}</button>

          </form>
        </div>

        field1 = <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: "100%" }}>
          <form nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", width: "100%" }} onSubmit={(event) => {
            event.preventDefault()
            this.props.onCloseNav()
            this.props.usersEmployeeLoad()

          }}>

            <button type="submit" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "66%", backgroundColor: "#2381B8" }} class="btn btn-secondary btn-sm" >Cargar empleados</button>

          </form>
        </div>

        field2 = <form onSubmit={(event) => {
          event.preventDefault()
          this.props.onCloseNav()
          his.props.usersEmployeeCount(0, 0, "text", {})


        }}>

          <button type="submit" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ "width": "66%", backgroundColor: "#2381B8" }} class="btn btn-secondary btn-sm" >Ver empleados</button>

        </form>

      }

      var showHideClassName = show ? "modal display-block" : "modal display-none";

      if(this.props.userRole==="admin"){
        if (this.props.device === "desktop") {
          return (
  
            <div className={showHideClassName} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center" }}>
              <section className="modal-main" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", borderRadius:"10px", border:"1px solid silver", backgroundColor: '#e6e6fa' }}>
  
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                  <tr>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "40%", textAlign: "center" }}>
                      <br></br>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                        {field2}
                      </div>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "40%", textAlign: "center" }}>
                      <br></br>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                        {field3}
                      </div>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  </tr>
                  
                  <tr>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "40%", textAlign: "center" }}>
                      <br></br>
                      <button type="button" class="btn btn-secondary btn-block btn-sm" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "66%", backgroundColor:"green"}} onClick={this.props.onCloseNav}>
                        Volver atrás
                      </button>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "40%", textAlign: "center" }}>
                      <br></br>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                       
                      </div>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  </tr>
  
                </table>
                <br></br>
              </section>
            </div>
  
  
          );
        } else {
  
          return (
  
            <div className={showHideClassName} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center" }}>
              <section className="modal-main" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", borderRadius:"10px", border:"1px solid silver", backgroundColor: '#e6e6fa' }}>
  
                <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                  <tr>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", textAlign: "center" }}>
                      <br></br>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                        {field2}
                      </div>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  </tr>
                  <tr>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", textAlign: "center" }}>
                      <br></br>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                        {field3}
                      </div>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  </tr>
                  <tr>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center" }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", textAlign: "center" }}>
                      <br></br>
                      <button type="button" class="btn btn-secondary btn-block btn-sm" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "66%", backgroundColor: "green" }} onClick={this.props.onCloseNav}>
                        Volver atrás
                      </button>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  </tr>
                  <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center" }}></td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", textAlign: "center" }}>
                    <br></br>

         
                </td>
                <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%", textAlign: "center" }}></td>
                </tr>
                  <tr>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%", textAlign: "center" }}>
                      <br></br>
                      <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
        
                      </div>
                    </td>
                    <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  </tr>
                </table>
                <br></br>
              </section>
            </div>);
        }
      } else {
        return (
          <div className={showHideClassName} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center" }}>
            <section className="modal-main" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", borderRadius:"10px", border:"1px solid silver", backgroundColor: '#e6e6fa' }}>
              <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                    <br></br>
                    <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                      {field2}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                    <br></br>
                    <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                      {field3}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                    <br></br>
                    <button type="button" class="btn btn-secondary btn-block btn-sm" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "66%", backgroundColor: "green" }} onClick={this.props.onCloseNav}>
                      Volver atrás
                    </button>
                  </td>
                </tr>
                <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                    <br></br>

              
                </td>
                </tr>

                <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                    <br></br>
                    <div nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                      
                    </div>
                  </td>
                </tr>
              </table>
              <br></br>
            </section>
          </div>);
      }
      
    } catch (err) {
      return (<div>Error al cargar el componente</div>)
    }
  }
}






export default NavigatorModal;
