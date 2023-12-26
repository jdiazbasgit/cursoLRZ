import { Box, Container, Grid, Heading, Image, VStack } from "@chakra-ui/react";
import Footer from "src/layout/Footer/Footer";

interface Props {
  children: JSX.Element
}
export default function Auth({ children }: Props) {
  return (
    <>
      <Box as="main"
        justifyItems="center"
        height={"100vh"}
        bgImage="/img/fondo-form-ninja.png"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        objectFit="contain"
        backgroundPosition={"center"}
      >
        <Grid
          templateColumns='repeat(2, 1fr)'
          gap={6}
          height="100%"
          alignContent="center"
        >
          <Container display="flex" flexDir={"column"} gap={16} minW="550px" justifyContent={"center"}>
            <Image src="/img/Logo_NinjaTalent.png" alt="NinjaTalet" w="370px" objectFit="cover" />
            <VStack alignItems={"flex-start"}>
              <Heading
                as={"h2"}
                fontSize={["1.5rem", "2rem", "3rem", "55px"]}
                lineHeight={1.2}
                color={"brand.50"}
                textShadow="rgb(0 0 0 / 30%) 4px 4px 0px"
                textTransform={"uppercase"}
              >
                sólo un tecky puede evaluar a otro
              </Heading>
              <Heading
                as={"h1"}
                fontFamily="logoNinja"
                fontSize={["6rem", "6.6rem", "7.2rem", "7.8rem"]}
                lineHeight={1}
                color={"redBrand.100"}
                textShadow="rgb(0 0 0 / 30%) 4px 4px 0px">
                TECKY
              </Heading>
            </VStack>
          </Container>
          <Container display="flex" flexDir={"column"} gap={4} bg="brand.50" color="brand.900" p={10} borderRadius={"lg"} minW="474px" justifyContent={"center"}>
            {children}
          </Container>
        </Grid>
      </Box>

      <Footer />
    </>
  )
}



