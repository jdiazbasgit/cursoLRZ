import { useState, useEffect, ChangeEvent } from "react";
import {
  SimpleGrid,
  Text,
  Input,
  Select,
  Checkbox,
  Button,
  Flex,
  Img,
  CheckboxGroup,
} from "@chakra-ui/react";
import React from "react";

export default function Pagina2({ nextPage, prevPage }) {
  const [page, setPage] = useState(2);
  const cambiar = () => {
    setCheck(!check);
  };
  const [check, setCheck] = useState(false);

  const [expectativaSalarial, setExpectativaSalarial] = useState<number>(10000);
  const [isOn, setIsOn] = useState(false);

  const [movilidad, setMovilidad] = useState<boolean>(false);
  const [modalidad, setModalidad] = useState<string[]>([]);

  const toggleMovilidad = () => {
    setMovilidad(!movilidad);
  };

  const opcionesModalidad = ["Teletrabajo", "Presencial", "Híbrido"];

  const handleChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setModalidad(selectedOptions);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoValor = parseInt(e.target.value, 10);
    setExpectativaSalarial(nuevoValor);
  };

  const communities = [
    { value: 'madrid', label: 'Madrid' },
    { value: 'galicia', label: 'Galicia' },
    { value: 'andalucia', label: 'Andalucia' },
    { value: 'asturias', label: 'Asturias' },
  ];

  return (
    <Flex>
      <Img
        src="img/_d23039a4-b4ef-4dcf-b1be-2b3efaad5863.jpeg"
        width={500}
        height={500}
      ></Img>

      <SimpleGrid minChildWidth={"310px"} gap={5} margin={4}>
        <Text fontSize="xl" fontWeight="bold">
          Empleo
        </Text>
        <Checkbox onChange={cambiar}>Busco empleo</Checkbox>
        {check && (
          <div>
            <div>
              <label htmlFor="expectativaSalarial">
                Expectativa salarial: {expectativaSalarial} €
              </label>
            </div>{" "}
            <Input
              placeholder="Expectativa salarial"
              type="range"
              min="10000"
              max="50000"
              step="1000"
              required
              value={expectativaSalarial}
              onChange={handleInputChange}
              bg={"grew"}
            />
            <label>Modalidad de Trabajo:</label>
            <Select
              multiple
              value={modalidad}
              onChange={handleChange}
              style={{
                padding: '5px',
                borderRadius: '4px',
                height: 'auto',
                minHeight: '30px'
              }}
            >
              {opcionesModalidad.map((opcion) => (
                <option  style={{
                  backgroundColor: 'black',
                  color: 'white', // Cambia el color del texto si es necesario// Ajusta una altura mínima para el cuadro de selección
                }}  key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </Select>
            <div>
              <label>Posibilidad de Movilidad:</label>
              <div>
                <input
                  type="radio"
                  value="Si"
                  checked={movilidad}
                  onChange={toggleMovilidad}
                />{" "}
                <span>Si</span>{" "}
                <input
                  type="radio"
                  value="No"
                  checked={!movilidad}
                  onChange={toggleMovilidad}
                />{" "}
                No
              </div>
            </div>
            <label>Ubicación:</label>
            <Select
              multiple
              onChange={(event) => handleChange(event)}
              required
              style={{
                padding: '5px', // Ajusta el espaciado interno
                borderRadius: '4px', // Ajusta la esquina del cuadro de selección
                height: 'auto', // Ajusta la altura según la cantidad de opciones
                minHeight: '30px' // Ajusta una altura mínima para el cuadro de selección
              }}
            >
              {communities.map((community) => (
                <option  style={{
                  backgroundColor: 'black',
                  color: 'white', // Cambia el color del texto si es necesario// Ajusta una altura mínima para el cuadro de selección
                }}  key={community.value} value={community.value}>
                  {community.label}
                </option>
              ))}
            </Select>
            <Checkbox required>
              Acepto las políticas de privacidad y uso de la aplicación
            </Checkbox>
          </div>
        )}

        <Button
          bg={"redBrand.900"}
          color="white"
          textAlign="center"
          onClick={prevPage}
        >
          Anterior
        </Button>
        <Button
          bg={"redBrand.900"}
          color="white"
          textAlign="center"
          onClick={nextPage}
        >
          Siguiente
        </Button>
      </SimpleGrid>
    </Flex>
  );
}
