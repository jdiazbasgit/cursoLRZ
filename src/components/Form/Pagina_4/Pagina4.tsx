import { useState } from "react";
import {
  SimpleGrid,
  Text,
  Button,
  Flex,
  Img,
} from "@chakra-ui/react";

export default function Pagina4({ prevPage }) {

  const [page, setPage] = useState(4);

  return (
    <Flex direction="column" alignItems="center">
      <Flex alignItems="center">
        <Img src="img/Ninja_negro.jpg" width={400} height={400}></Img>

        <SimpleGrid minChildWidth={"310px"} gap={5} textAlign="right">
          <Text fontSize="2xl" fontWeight="bold" textAlign="center">
            ¡ENHORABUENA!
          </Text>
          <Text fontSize="xl" fontWeight="bold" textAlign="center">
            Ya eres parte de la comunidad NINJA
          </Text>
          <Button
            bg={"redBrand.900"}
            color="white"
            textAlign="center"
            onClick={prevPage}
          >
            Anterior
          </Button>
        </SimpleGrid>
      </Flex>

      <SimpleGrid columns={[2, 3]} gap={5} textAlign="center" mt={5}>
  {/* Primera fila de imágenes y texto */}
  <Flex flexDirection="column" alignItems="center">
    <Img
      src="img/Carolina.png"
      width={100}
      height={100}
      borderRadius="full"
    ></Img>
    <Text>Carolina Fernandez</Text>
  </Flex>

  <Flex flexDirection="column" alignItems="center">
    <Img
      src="img/MAngeles.png"
      width={100}
      height={100}
      borderRadius="full"
    ></Img>
    <Text>Mª Angeles Doncel</Text>
  </Flex>

  {/* Segunda fila de imágenes y texto */}
  <Flex flexDirection="column" alignItems="center">
    <Img
      src="img/JuanCarlos.png"
      width={100}
      height={100}
      borderRadius="full"
    ></Img>
    <Text>Juan Carlos Garcia</Text>
  </Flex>

  <Flex flexDirection="column" alignItems="center">
    <Img
      src="img/Javi.png"
      width={100}
      height={100}
      borderRadius="full"
    ></Img>
    <Text>Javier Perez</Text>
  </Flex>

  <Flex flexDirection="column" alignItems="center">
    <Img
      src="img/JoseIg.png"
      width={100}
      height={100}
      borderRadius="full"
    ></Img>
    <Text>Jose Ignacio Sotos</Text>
  </Flex>
</SimpleGrid>
    </Flex>
  );
}
