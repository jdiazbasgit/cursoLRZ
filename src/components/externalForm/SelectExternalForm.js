import React, { useEffect, useState } from 'react';

const SelectExternalForm = () => {
  const [paises, setPaises] = useState([]);
  const [paisSeleccionado, setPaisSeleccionado] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPaises = async () => {
      try {
        const respuesta = await fetch('https://www.universal-tutorial.com/api/countries/', {
          method: 'GET',
          headers: {
            Authorization: "Bearer tu_token",
            Accept: "application/json"
          },
          redirect: 'follow',
        });
  
        if (!respuesta.ok) {
          throw new Error(`Error al obtener la lista de países. Código: ${respuesta.status}`);
        }
  
        const resultado = await respuesta.json();
        setPaises(resultado);
      } catch (error) {
        console.error("Error en la llamada a la API:", error);
        setError("Hubo un problema al obtener la lista de países. Por favor, inténtalo de nuevo más tarde.");
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
        <select value={paisSeleccionado} onChange={manejarCambio} style={{ width: "100px", marginLeft: "13px" }}>
          {paises.map((pais) => (
            <option key={pais.country_short_name} value={pais.country_name}>
              {pais.country_name}
            </option>
          ))}
        </select>
      </label>
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default SelectExternalForm;