import React, { Component, useState } from 'react'
import "./styles.css"
import axios from 'axios'


const ExternalForm = () => {
  const initialState = {
    mail: "",
    weekly_hours: 0,
    phone: "",
    nat_desayuno_diet: 0,
    nat_tarde_diet: 0,
    nat_cena_diet: 0,
    nat_sleep_diet: 0,
    int_desayuno_diet: 0,
    int_tarde_diet: 0,
    int_cena_diet: 0,
    int_sleep_diet: 0
  }

  const [form, setForm] = useState(initialState) // setform es una funcion que modifica los campos del formulario
  const handleSubmit = (event) => { //es la funcion que se utiliza para enviar el formulario que recibe un evento por parametro
    event.preventDefault(); //se utiliza para cuando el usuario envie el formulario (submit) no se recargue y se pierdan los datos escritos
    axios.post("https://api.traxain.xyz", form).then(rest => alert("Se ha enviado el formulario exitosamente")).catch(error => console.log(error))
  }
  const handleChange = (event) => {
    const { value, name } = event.target; //Usando la sintaxis de desestructuración para sacar los valores Value y Name de event.target
    setForm({ ...form, [name]: value })
  }
  // this.prueba2 = this.prueba2.bind(this)
  // const prueba2 = (event) => {
  //   console.log("estoy dentro")
  // }
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
            <input name='contractHours' value={initialState.weekly_hours} className="contractHours" type='number' onChange={handleChange} style={{ width: "105px", height: "25px", marginLeft: "13px" }} placeholder='En minutos'></input>
          </div>
          <div className="natBreakfastDiet" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta desayuno nacional</label>
            <input name='natBreakfastDiet' value={initialState.nat_desayuno_diet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "13px" }}></input>
          </div>
          <div className="natFoodDiet" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta comida nacional</label>
            <input name='natFoodDiet' value={initialState.nat_tarde_diet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "30px" }}></input>
          </div>
          <div className="natDinnerDiet" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta cena nacional</label>
            <input name='natDinnerDiet' value={initialState.nat_cena_diet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "48px" }}></input>
          </div>
          <div className="natSleepDiet" style={{ marginLeft: "-330px", marginTop: "13px" }}>
            <label>Dieta pernocta nacional</label>
            <input name='natSleepDiet' value={initialState.nat_sleep_diet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "18px" }}></input>
          </div>
        </div>
        {/* Dietas Internacionales */}
        <div className="intDiet">
          <div className="phoneNumber" style={{ marginLeft: "320px", marginTop: "-178px" }}>
            <label>Teléfono</label>
            <input name='phoneNumber' value={initialState.phone} type='number' onChange={handleChange} style={{ width: "200px", height: "25px", marginLeft: "18px" }} placeholder='+34 333 333 333'></input>
          </div>
          <div className="intBreakfastDiet" style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta desayuno internacional</label>
            <input name='intBreakfastDiet' value={initialState.int_desayuno_diet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "13px" }}></input>
          </div>
          <div className="intFoodDiet" style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta comida internacional</label>
            <input name='intFoodDiet' value={initialState.int_tarde_diet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "30px" }}></input>
          </div>
          <div className="intDinnerDiet" style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta cena internacional</label>
            <input name='intDinnerDiet' value={initialState.int_cena_diet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "48px" }}></input>
          </div>
          <div className="intSleepDiet" style={{ marginLeft: "320px", marginTop: "13px" }}>
            <label>Dieta pernocta internacional</label>
            <input name='intSleepDiet' value={initialState.int_sleep_diet} type='number' onChange={handleChange} style={{ width: "60px", height: "25px", marginLeft: "18px" }}></input>
          </div>
        </div>
        <div className="privacyPolicies" style={{ marginTop: "13px", alignItems: 'center' }}>
          <input name='privacyPolicies' value={initialState.privacyPolicies} type='checkbox' required style={{ marginRight: "5px" }}></input> <span> Al hacer clic en Subir archivo aceptas la <a href="https://www.traxain.com/legal" target="_blank">Política de privacidad de Traxain</a></span>
        </div>
        <div>
        {/* <input type='file' name="file"/>
          <label className="selectFile" style={{ backgroundColor: 'lightblue', borderColor: 'lightblue', fontSize: 14, marginTop: "70px" }}>
            Buscar Archivo
          </label> */}
        {/* <button onClick={this.prueba2} type='submit' className="uploadFile" style={{backgroundColor: 'lightblue', borderColor: 'lightblue', fontSize: 14, marginTop: "100px" }}>
          Subir archivo
        </button> */}
        </div>
      </form>
    </div>
  )
}

export default ExternalForm
