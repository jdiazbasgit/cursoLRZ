import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { ChangePassword, EditProfile, EditStripePay, PricePlan, Suscription } from 'src/components/Form'
import FormBilling from 'src/components/Form/Suscription/components/FormBilling'
import { Role } from 'src/models'
import { selectUserData } from 'src/redux/slices/userData'

export default function Setting() {
  const { userData } = useSelector(selectUserData)

  return (
    <Box color={"brand.600"} >
      <Box
        bg="brand.50"
        borderRadius={"lg"}
      >
        <Accordion defaultIndex={[0]} allowToggle>
          <AccordionItem >
            <AccordionButton py={6} px={10}>
              <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"} >Mi perfil</Heading>
              <AccordionIcon color={"brand.600"} />
            </AccordionButton>
            <AccordionPanel py={6} px={10} borderTop={"1px solid"} borderTopColor={"brand.100"}>
              <EditProfile isCompany={userData?.role === Role.company} isNM={userData?.role === Role.ninjaMaster} />
            </AccordionPanel>
          </AccordionItem>
          {

            userData?.role === Role.ninjaMaster &&


            <AccordionItem >
              <AccordionButton py={6} px={10}>
                <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"} >Facturación</Heading>
                <AccordionIcon color={"brand.600"} />
              </AccordionButton>
              <AccordionPanel py={6} px={10} borderTop={"1px solid"} borderTopColor={"brand.100"}>
                <EditStripePay isCompany={userData?.role === Role.ninjaMaster} />
              </AccordionPanel>
            </AccordionItem>
          }
          <AccordionItem borderColor={"brand.100"}>
            <AccordionButton py={6} px={10}>
              <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"}>Contraseña</Heading>
              <AccordionIcon color={"brand.600"} />
            </AccordionButton>
            <AccordionPanel py={6} px={10} borderTop={"1px solid"} borderTopColor={"brand.100"}>
              <ChangePassword />
            </AccordionPanel>
          </AccordionItem>

          {
            userData?.role === Role.company &&
            <AccordionItem borderColor={"brand.100"}>
              <AccordionButton py={6} px={10}>
                <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"}>Suscripción</Heading>
                <AccordionIcon color={"brand.600"} />
              </AccordionButton>
              <AccordionPanel py={6} px={10} borderTop={"1px solid"} borderTopColor={"brand.100"}>
                <PricePlan />
              </AccordionPanel>
            </AccordionItem>
          }
          {
            userData?.role === Role.company &&
            <AccordionItem borderColor={"brand.100"}>
              <AccordionButton py={6} px={10}>
                <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"}>Facturación</Heading>
                <AccordionIcon color={"brand.600"} />
              </AccordionButton>
              <AccordionPanel py={6} px={10} borderTop={"1px solid"} borderTopColor={"brand.100"}>
                <FormBilling />
              </AccordionPanel>
            </AccordionItem>
          }

        </Accordion>
      </Box>
    </Box>
  )
}
