import React, { useState } from 'react'

const ExternalForm = () => {

  return (
    <div>
      <p style={{marginTop:"10px"}}>Para un cálculo mas preciso, complete los siguientes campos</p>
        {/* Dietas Nacionales */}
        <div>
          <div style={{ marginLeft: "-330px" }}>
            <label>Dieta pernocta nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "18px" }}></input>
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
        </div>
        {/* Dietas Internacionales */}
        <div style={{ marginTop: "-138px" }}>
          <div style={{ marginLeft: "320px" }}>
            <label>Dieta pernocta nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "18px" }}></input>
          </div>
          <div style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta desayuno nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "13px" }}></input>
          </div>
          <div style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta comida nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "30px" }}></input>
          </div>
          <div style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta cena nacional</label>
            <input type='number' style={{ width: "60px", height: "25px", marginLeft: "48px" }}></input>
          </div>
        </div>
    </div>
  )
}

export default ExternalForm
