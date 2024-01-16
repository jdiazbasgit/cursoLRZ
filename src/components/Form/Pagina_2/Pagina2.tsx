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
} from "@chakra-ui/react";
import data from "./json_prefijos.json";

export default function Pagina2(this: any) {
  const StatusBar = ({ totalPages, currentPage }) => {
    return (
      <Flex justify="center" mb={4}>
        {[...Array(totalPages)].map((_, index) => (
          <Text
            key={index}
            fontSize="lg"
            mx={1}
            color={currentPage === index ? "redBrand.900" : "gray.500"}
          >
            ●
          </Text>
        ))}
      </Flex>
    );
  };
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    pais: "",
    telefono: "",
    linkedin: "",
    buscoEmpleo: false,
    expectativaSalarial: "",
    modalidadTrabajo: [],
    movilidad: "",
    ubicacion: [],
    aceptoPoliticas: false,
  });
  type OptionType = {
    nombre: string;
    name: string;
    nom: string;
    iso2: string;
    iso3: string;
    phone_code: number;
  };
  const [options, setOptions] = useState<OptionType[]>(data);

  interface Country {
    value: string;
    label: string;
  }
  const cambiar = () => {
    setCheck(!check);
  };
  const [check, setCheck] = useState(false);
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (
    <Flex>
      <Img
        src="img/_d23039a4-b4ef-4dcf-b1be-2b3efaad5863.jpeg"
        width={500}
        height={500}
      ></Img>

      <SimpleGrid minChildWidth={"310px"} gap={5}>
        <Text fontSize="xl" fontWeight="bold">
          Empleo
        </Text>
        <Checkbox onChange={cambiar}>Busco empleo</Checkbox>
        {check && (
          <div>
            <Input
              placeholder="Expectativa salarial"
              type="range"
              min="10000"
              max="50000"
              required
            />
            <Select placeholder="Modalidad de trabajo" multiple required>
              {/* Aquí puedes agregar las opciones para las modalidades de trabajo */}
            </Select>
            <Select placeholder="Movilidad" required>
              <option>Si</option>
              <option>No</option>
            </Select>
            <Select placeholder="Ubicación" multiple required>
              {/* Aquí puedes agregar las opciones para las ciudades */}
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
