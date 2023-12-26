import { Box, Button, Heading } from '@chakra-ui/react'

import { useRouter } from "next/router"
import PathName from "src/consts/pathName"


export default function CancelStripe() {
  const router = useRouter()


  return (
    <Box display={'Flex'} w={"100%"} bg={"white"} h={"100%"} flexDirection={"column"}>
      <Box as="div" mt={20} >
        <Heading as='h4' size='md' textAlign={"center"}>¡Vaya! Ha ocurrido un error</Heading>
        <Heading as='p' size='xs' textAlign={"center"} mt={10} color={"brand.900"}>
          No se ha podido procesar tu pago. 
          <Heading as='span' size='xs' textAlign={"center"} mt={10} color={"brand.900"} fontWeight={100}>
             Actualiza tu información de pago para disfrutar de tu nuevo plan.

          </Heading>
        </Heading>
        <Heading as='p' size='xs' textAlign={"center"} color={"brand.900"} fontWeight={100}>

          Si crees que ha sido problema de la plataforma ponte en contacto con <Heading as="span" size='xs' color="redBrand.900" onClick={() => router.push(PathName.dashboardCompany.support)}  > soporte.</Heading>
        </Heading>

      </Box>
      <Box display={'Flex'} justifyContent={"center"} >
        <Button
          mt={10}
          mx="2"
          type="submit"
          background="white"
          variant={"terciary"}
          color={"brand.600"}
          px={10}
          fontSize="md"
          paddingX={10}
          onClick={() => router.push(PathName.dashboardCompany.base)}

        >
          Volver
        </Button>
        <Button
          mt={10}
          type="submit"
          variant={"terciary"}
          px={10}
          fontSize="md"
          paddingX={10}
          onClick={() => router.push(PathName.dashboardCompany.subscriptions)}

        >
          Actualizar Pago
        </Button>
      </Box>
    </Box>
  )
}
