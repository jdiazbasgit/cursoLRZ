import { Box, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { FormInscription } from "src/components/Form";

import { useRouter } from 'next/router';
import PathName from 'src/consts/pathName';
import { useEffect, useLayoutEffect } from 'react';
interface Props {
  isNinja?: boolean;
  isCompany?: boolean;
  IsLogin?: boolean;
}

const ViewInscription: React.FC<Props> = ({ isNinja, isCompany, IsLogin }) => {
  const router = useRouter();


  function bgImage(): string {
    if (isNinja) return '/img/fondo-form-ninja.png'
    if (isCompany) return '/img/fondo-form-company.png'
    return '/img/fondo-form-master.png'
  }


  return (
    <>
      <VStack
        as={"span"}
        height={"calc(100vh - 80px)"}
        w="100%"
        backgroundImage={bgImage()}
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        objectFit="contain"
        backgroundPosition={"center"}
        pos="absolute"
        top={"80px"}
        zIndex={-1}
      />
      <Container maxW="94%">
        <VStack mt={"4rem"} w="100%" spacing={4} >
          <Info isNinja={isNinja} isCompany={isCompany} />
        </VStack>
      </Container>
      <Box as="section" mt={"3rem"} mb={10} w={"100%"}>
        <Container maxW={"container.lg"}>

          <FormInscription />

        </Container>
      </Box>
    </>
  )
}
export default ViewInscription;

const Info: React.FC<Props> = ({ isNinja, isCompany }) => {
  return (
    <>
      <Heading
        as={"h2"}
        fontSize={["1.8rem", "2.8rem", "3.8rem", "4.4rem"]}
        lineHeight={0.9}
        color={"brand.50"}
        textShadow="rgb(0 0 0 / 30%) 4px 4px 0px"
      >
        {isNinja && "ACEPTA EL RETO,"}
        {isCompany && "CONSIGUE"}
        {!isNinja && !isCompany && "CONVIÉRTETE EN"}
      </Heading>
      <Heading
        as={"h2"}
        fontSize={["1.8rem", "2.8rem", "3.8rem", "4.4rem"]}
        lineHeight={0.9}
        color={"brand.50"}
        textShadow="rgb(0 0 0 / 30%) 4px 4px 0px"
      >
        {isNinja && "ÚNETE AL EQUIPO"}
        {isCompany && "EL MEJOR TALENTO"}
        {!isNinja && !isCompany && "UN RECONOCIDO"}
      </Heading>
      {
        Boolean(isNinja || isCompany) ?
          <Heading
            as={"h1"}
            fontFamily="logoNinja"
            fontSize={["6.2rem", "6.8rem", "7.4rem", "8rem"]}
            lineHeight={1}
            color={"redBrand.100"}
            textShadow="rgb(0 0 0 / 30%) 4px 4px 0px">
            TECKY
          </Heading>
          :
          <Stack direction={["column", "column", "row"]} spacing={[2, 4, 6, 8]} alignItems="center">
            <HStack spacing={0}>
              <Heading as={"h1"} fontFamily="logoNinja" fontSize={["4rem", "5rem", "6rem", "8rem"]} lineHeight={0.9} color={"white"} textShadow="rgb(0 0 0 / 30%) 4px 4px 0px">NINJ</Heading>
              <Heading as={"h1"} fontFamily="logoNinja" fontSize={["4rem", "5rem", "6rem", "8rem"]} lineHeight={0.9} color={"redBrand.100"} textShadow="rgb(0 0 0 / 30%) 4px 4px 0px">A</Heading>
            </HStack>
            <Heading as={"h2"} fontSize={["4rem", "5rem", "6rem", "8rem"]} lineHeight={1} fontWeight="semibold" color={"white"} textShadow="rgb(0 0 0 / 30%) 4px 4px 0px">MASTER</Heading>
          </Stack>
      }
    </>
  )
}
