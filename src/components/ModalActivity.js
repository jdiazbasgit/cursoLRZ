import React, { Component } from "react";
import './modal.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class ModalActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: 'Comentario',
      place: 'Lugar',
      modeGood: 'Rest',
    };
  }

  async componentDidMount() {
    await this.setState({ comments: 'Comentario', place: 'Lugar', modeGood: 'Rest' })
  }

  async handleChangeModeGood(mode) {
    await this.setState({ modeGood: mode })
  }

  render() {
    try {
      var show = this.props.show
      var children = this.props.children

      var showHideClassName = show ? "modal display-block" : "modal display-none";
      let mode = { label: "Conducción", value: "Driving" }
      return (
        <div className={showHideClassName} nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center" }}>
          <section className="modal-main" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center", borderRadius: "10px", border: "1px solid silver" }}>
            <h5>{children}</h5>
            <form nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ textAlign: "center" }} onSubmit={(event) => {
              event.preventDefault()
              let comments = this.comments.value
              let place = this.place.value
              let modeGoodVal = this.state.modeGood.value
              this.props.editActivityDetails(comments, place, modeGoodVal)
            }}>
              <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", textAlign: "center" }}>
                <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%" }}>
                    <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                      <tr>
                        <td>
                          Comentarios
                        </td>
                      </tr>
                      <tr nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                          <input
                            ref={(comments) => { this.comments = comments }}
                            nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "grey", fontSize: 14, width: "100%" }}
                            className="form-control form-control-lg"
                            defaultValue={this.props.defaultComments}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Lugar
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            ref={(place) => { this.place = place }}
                            nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "grey", fontSize: 14 }}
                            className="form-control form-control-lg"
                            defaultValue={this.props.defaultPlace}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Modalidad
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Dropdown
                            nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ color: "grey" }}
                            className="form-control-lg"
                            onChange={(mode) => this.handleChangeModeGood(mode)}
                            options={[
                              { value: "Driving", label: "Conducción" },
                              { value: "Working", label: "Otros Trabajos" },
                              { value: "Available", label: "Disponible" },
                              { value: "Rest", label: "Descanso" }
                            ]}
                          />
                        </td>
                      </tr>
                      <tr>
                      </tr>
                    </table>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                </tr>
                <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%" }}>
                    <br></br>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                </tr>
                <tr>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "80%" }}>
                    <table nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%" }}>
                      <tr>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "40%" }}>
                          <button nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", backgroundColor: "green", border: "none", fontSize: 16 }} type="submit" className="btn btn-primary btn-block btn-lg">Confirmar</button>
                        </td>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "20%" }}>
                        </td>
                        <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "40%" }}>
                          <button type="button" className="btn btn-primary btn-block btn-lg" nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "100%", backgroundColor: "red", border: "none", fontSize: 16 }} onClick={this.props.onClose}>
                            Cerrar
                          </button>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{ width: "10%" }}></td>
                </tr>
              </table>
            </form>
            <br></br>
          </section>
        </div>
      );
    } catch (err) {
      return (<div>Error al cargar el componente</div>)
    }
  }
}

export default ModalActivity;
