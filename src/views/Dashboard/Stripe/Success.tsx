import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Heading } from '@chakra-ui/react'
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import PathName from "src/consts/pathName"
import { useSelector } from 'react-redux'
import { ChangePassword, EditProfile, Suscription } from 'src/components/Form'
import FormBilling from 'src/components/Form/Suscription/components/FormBilling'

import { Role } from 'src/models'
import { selectUserData } from 'src/redux/slices/userData'

export default function SuccessStripe() {
  const router = useRouter()


  return (
    <Box display={'Flex'}  w={"100%"} bg={"white"} h={"100%"} flexDirection={"column"}>
      <Box as="div" mt={20}>
        <Heading as='h4' fontSize='18px' textAlign={"center"} fontWeight={700}>¡Tu suscripción se ha realizado con éxito!</Heading>
        <Heading as='p' size='xs' textAlign={"center"} mt={10} fontFamily='Roboto,sans-sherif;' fontWeight={400}>
          <b>Se ha realizado correctamente la suscripción a tu plan.</b>  
          <Heading  fontFamily='Roboto,sans-sherif;'as='p' size='xs' textAlign={"center"} color={"brand.900"} fontWeight={100}>
        
          En las próximas horas se activarán tus créditos y podrás empezar a buscar al candidato ideal.
        </Heading>
        </Heading>
        

      </Box>
      <Box display={'Flex'} justifyContent={"center"} >
        <Button

         
          
          mt={10}
          type="submit"
          variant={"terciary"}
          px={10}
         color={"#ffffff"}
          width={'136px'}
          height={'34'}
          fontSize="14"
          paddingX={10}
          onClick={() => router.push(PathName.dashboardCompany.subscriptions)}

        >
          Volver
        </Button>
        </Box>
    </Box>
  )
}
