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
        top={"50px"}
        zIndex={-1}
      />
      <Container maxW="94%">
        <VStack  w="100%" spacing={4} >
          <Info isNinja={isNinja} isCompany={isCompany} />
        </VStack>
      </Container>
      <Box as="section"  mb={10} w={"100%"}>
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

    </>
  )
}
