import React, { Component } from 'react'




class ErrorExpirated extends Component {




    render() {
      window.scrollTo(0, 0)
      return (
              <div className="card mb-4" >
                <div className="card-body">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <table className="table table-borderless text-muted text-center">
                    <thead>
                      
                    </thead>
                    <tbody>
                      <tr>
                      <td><p>{this.props.errorMsg}</p></td>
                      
                      <td>
                      { {/*!product.purchased*/}
                                ?
                        <button nonce="kjcdhjkehfkldgso2379389xbagfjtdfdfg" style={{width:"100%",fontSize:16,}} className="btn btn-primary btn-block btn-lg" onClick={(event) => {
                          this.props.errorStatus()
                          window.location.href = 'http://drive-team.es';
                        }}>Volver</button>
                        :null
                              }
                        </td>
                      
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
                )
              }
 }

 export default ErrorExpirated;