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
export default function Pagina3({ nextPage, prevPage }) {
  const [page, setPage] = useState(3);
  
  const cambiar = () => {
    setCheck(!check);
  };
  const [check, setCheck] = useState(false);


  return (
    <Flex>
    <Img src="img/_7a98cf39-6b79-4365-8442-423e5ff61d8c.jpg" width={500} height={600} ></Img>

    <SimpleGrid minChildWidth={"310px"} gap={5} margin={6}>
      <Text fontSize="xl" fontWeight="bold">Resumen</Text>
      <Text>Nombre: </Text>
      <Text>Apellidos: </Text>
      <Text>Email: </Text>
      <Text>País de residencia: </Text>
      <Text>Número de teléfono: </Text>
      <Text>Linkedin: </Text>
      <Text>Busco empleo: Sí </Text>
      <Text>Expectativa salarial: </Text>
      <Text>Modalidad de trabajo: </Text>
      <Text>Movilidad: </Text>
      <Text>Ubicación: </Text>
  
      <Button bg={"redBrand.900"} color="white" textAlign="center" onClick={prevPage}>Anterior</Button>
      <Button bg={"redBrand.900"} color="white" textAlign="center" type="submit" onClick={nextPage}>Guardar</Button>
      </SimpleGrid>
      </Flex>
)}