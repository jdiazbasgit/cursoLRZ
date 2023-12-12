import React, { Component, useContext, useState } from 'react'


class Footer extends Component {



  async componentDidMount() {
    try{
    let winWidth = await window.innerWidth

    let winHeight = await window.innerHeight
    await this.setState({ winWidth: winWidth })

    await this.setState({ winHeight: winHeight })
    let device = await this.getDeviceType()
    await this.setState({ device: device })



    }catch(err){
     console.log("error")
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
    try {
      if (this.props.device === "desktop") {
        return (
          <footer className="footer shadow" style={{ width: "100%", height: "45px", backgroundColor: "white", position: "fixed", bottom: 0, display: "flex", justifyContent: "space-between", padding: "0 20px"}}>
            <div style={{width: "30%"}}>
              <div style={{ marginRight: "10px" }}>Un producto de Traxain SL</div>
              <div style={{ marginRight: "10px" }}>Contáctanos en <a href="https://traxain.com">traxain.com</a></div>
            </div>
            <div style={{width: "30%"}}>
              <div style={{ marginRight: "10px" }}>Email: <a href="mailto:ignacio@traxain.com">ignacio@traxain.com</a></div>
              <div style={{ marginRight: "10px" }}>Rosa de Lima 52,28290, Las Rozas de Madrid, Madrid, España</div>
            </div>
          </footer>
        );
      }else{
        return(              
          <footer className="footer shadow" style={{ width: "100%", height: "auto", backgroundColor: "white", display: "flex", justifyContent: "space-between", padding: "0 20px"}}>
            <div style={{width: "45%"}}>
              <div style={{ marginRight: "10px" }}>Un producto de Traxain SL</div>
              <div style={{ marginRight: "10px" }}>Contáctanos en <a href="https://traxain.com">traxain.com</a></div>
            </div>
            <div style={{width: "45%"}}>
              <div style={{ marginRight: "10px" }}>Email: <a href="mailto:ignacio@traxain.com">ignacio@traxain.com</a></div>
              <div style={{ marginRight: "10px" }}>Rosa de Lima 52,28290, Las Rozas de Madrid, Madrid, España</div>
            </div>
          </footer>
)
      }
    } catch (err) {
      this.setState({ errorHappened: true });
      this.setState({ errorMsg: 'Se ha producido un error no especificado, no se verá el footer' });
    }
  }
}

export default Footer