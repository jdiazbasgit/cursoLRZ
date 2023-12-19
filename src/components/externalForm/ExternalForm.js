import React, { useState } from 'react'

const ExternalForm = () => {

  return (
    <div>
      <p style={{marginTop:"10px"}}>Para un cálculo mas preciso, complete los siguientes campos</p>
        {/* Dietas Nacionales */}
        <div>
          <div style={{ marginLeft: "-330px" }}>
            <label>Correo</label>
            <input type='email' style={{ width: "175px", height: "25px", marginLeft: "18px" }}></input>
          </div>
          <div style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Horas de contrato</label>
            <input type='number' style={{ width: "105px", height: "25px", marginLeft: "13px"}} placeholder='En minutos'></input>
          </div>
          <div style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta desayuno nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "13px" }}></input>
          </div>
          <div style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta comida nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "30px" }}></input>
          </div>
          <div style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta cena nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "48px" }}></input>
          </div>
          <div style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta pernocta nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "18px" }}></input>
          </div>
        </div>
        {/* Dietas Internacionales */}
        <div style={{ marginTop: "-178px" }}>
          <div style={{ marginLeft: "320px" }}>
            <label>Teléfono</label>
            <input type='number' style={{ width: "200px", height: "25px", marginLeft: "18px" }}></input>
          </div>
          <div style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta desayuno internacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "13px" }}></input>
          </div>
          <div style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta comida internacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "30px" }}></input>
          </div>
          <div style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta cena internacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "48px" }}></input>
          </div>
          <div style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta pernocta internacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "18px" }}></input>
          </div>
        </div>
        <div style={{ marginTop:"13px", alignItems: 'center' }}>
          <input type='checkbox' required style={{marginRight:"5px"}}></input> <span> Al hacer clic en Subir archivo aceptas la <a href="https://www.traxain.com/legal" target="_blank">Política de privacidad de Traxain</a></span>
        </div>
    </div>
    
  )
}

export default ExternalForm
