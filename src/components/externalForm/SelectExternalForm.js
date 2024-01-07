import React, { useEffect, useState } from 'react';

const Select = () => {
  const [paises, setPaises] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState('');

  useEffect(() => {
    const obtenerPaises = async () => {
      try {
        const respuesta = await fetch('https://www.universal-tutorial.com/api/countries/', {
         method: 'GET',
         headers:{
          Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJtdmdhZGFnaUBnbWFpbC5jb20ifSwiZXhwIjoxNTY2MjM0ODU0fQ.nMWPN38zptwwDKAo11bFyjhCRuzNhZc6NqqCaYJVxP0",
          Accept: "application/json"
         },
         redirect: 'follow',
        });
        console.log(respuesta)
        const resultado = await respuesta.json();
        setPaises(resultado);
      } catch (e) {
        console.log(e);
      }
    }
    obtenerPaises();
  }, []);

  const manejarCambio = (evento) => {
    setPaisSeleccionado(evento.target.value);
  };

  return (
    <form>
      <label>
        País:
{        <select value={paisSeleccionado} onChange={manejarCambio} style={{width:"100px", marginLeft: "13px"}}>
          {paises.map((pais) => (
            <option key={pais.country_short_name} value={pais.country_name}>
              {pais.country_name}
            </option>
          ))}
        </select>}
      </label>
    </form>
  );
};

export default Select