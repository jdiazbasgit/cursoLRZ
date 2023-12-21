import React, { useState } from 'react'
import "./styles.css"
import axios from 'axios'


const ExternalForm = () => {

  const initialState={
  mail: "",
  contractHours: 0,
  phoneNumber: "",
  natBreakfastDiet: 0,
  natFoodDiet: 0,
  natDinnerDiet: 0,
  natSleepDiet: 0,
  intBreakfastDiet: 0,
  intFoodDiet: 0,
  intDinnerDiet: 0,
  intSleepDiet: 0
  }
  const [form,setForm]=useState(initialState) // setform es una funcion que modifica los campos del formulario
  const handleSubmit =(event) =>{ //es la funcion que se utiliza para enviar el formulario que recibe un evento por parametro
    event.preventDefault(); //se utiliza para cuando el usuario envie el formulario (submit) no se recargue y se pierdan los datos escritos
    axios.post("https://api.traxain.xyz", form).then(rest=>alert("Se ha enviado el formulario exitosamente")).catch(error=>console.log(error))
  }
  const handleChange =(event) =>{
  const{value, name} = event.target; //Usando la sintaxis de desestructuración para sacar los valores Value y Name de event.target
  setForm({  ...form, [name]:value  })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p className="subTitle" style={{ marginTop: "10px" }}>Para un cálculo mas preciso, complete los siguientes campos</p>
        {/* Dietas Nacionales */}
        <div className="natDiet">
          <div className="mail" style={{ marginLeft: "-330px" }}>
            <label>Correo</label>
            <input name='email' value={initialState.mail} type='email' onChange={handleChange} style={{ width: "175px", height: "25px", marginLeft: "18px" }} placeholder='usuario@dominio.com'></input>
          </div>
          <div className="contractHours" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Horas de contrato</label>
            <input name='contractHours' value={initialState.contractHours} className="contractHours" type='number' onChange={handleChange} style={{ width: "105px", height: "25px", marginLeft: "13px" }} placeholder='En minutos'></input>
          </div>
          <div className="natBreakfastDiet" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta desayuno nacional</label>
            <input name='natBreakfastDiet' value={initialState.natBreakfastDiet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "13px" }}></input>
          </div>
          <div className="natFoodDiet" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta comida nacional</label>
            <input name='natFoodDiet' value={initialState.natFoodDiet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "30px" }}></input>
          </div>
          <div className="natDinnerDiet" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta cena nacional</label>
            <input name='natDinnerDiet' value={initialState.natDinnerDiet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "48px" }}></input>
          </div>
          <div className="natSleepDiet" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta pernocta nacional</label>
            <input name='natSleepDiet' value={initialState.natSleepDiet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "18px" }}></input>
          </div>
        </div>
        {/* Dietas Internacionales */}
        <div className="intDiet">
          <div className="phoneNumber" style={{ marginLeft: "320px", marginTop: "-178px" }}>
            <label>Teléfono</label>
            <input name='phoneNumber' value={initialState.phoneNumber} type='number' onChange={handleChange} style={{ width: "200px", height: "25px", marginLeft: "18px" }} placeholder='+34 333 333 333'></input>
          </div>
          <div className="intBreakfastDiet" style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta desayuno internacional</label>
            <input name='intBreakfastDiet' value={initialState.intBreakfastDiet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "13px" }}></input>
          </div>
          <div className="intFoodDiet" style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta comida internacional</label>
            <input name='intFoodDiet' value={initialState.intFoodDiet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "30px" }}></input>
          </div>
          <div className="intDinnerDiet" style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta cena internacional</label>
            <input name='intDinnerDiet' value={initialState.intDinnerDiet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "48px" }}></input>
          </div>
          <div className="intSleepDiet" style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta pernocta internacional</label>
            <input name='intSleepDiet' value={initialState.intSleepDiet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "18px" }}></input>
          </div>
        </div>
        <div className="privacyPolicies" style={{ marginTop: "13px", alignItems: 'center' }}>
          <input name='privacyPolicies' value={initialState.privacyPolicies} type='checkbox' required style={{ marginRight: "5px" }}></input> <span> Al hacer clic en Subir archivo aceptas la <a href="https://www.traxain.com/legal" target="_blank">Política de privacidad de Traxain</a></span>
        </div>
        {/* <button type='submit' className="uploadFile" style={{backgroundColor: '#0d6efd', borderColor: '#0d6efd', fontSize: 14 }}>
          Subir archivo
        </button> */}
      </form>
    </div>
  )
}

export default ExternalForm
