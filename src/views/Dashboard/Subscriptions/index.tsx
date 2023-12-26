import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { PricePlan } from 'src/components/Form';
import FormBilling from 'src/components/Form/Suscription/components/FormBilling';
import MySubscription from 'src/components/Form/Suscription/components/MySubscription';
import { selectUserData } from 'src/redux/slices/userData';

export default function Subscriptions() {
  const { userData } = useSelector(selectUserData)
  const isSuscription = !!userData?.subscription

  return (
    <Box color={"brand.600"} >
      <Box
        bg="brand.50"
        borderRadius={"lg"}
      >
        <Accordion defaultIndex={[isSuscription ? 1 : 0]} allowToggle>
          <AccordionItem borderColor={"brand.100"} >
            <AccordionButton py={6} px={10} >
              <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"}>
                Plan de precios
              </Heading>
              <AccordionIcon color={"brand.600"} />
            </AccordionButton>
            <AccordionPanel py={10} px={10} borderTop={"1px solid"} borderTopColor={"brand.100"}>
              <PricePlan />
            </AccordionPanel>
          </AccordionItem >

          {
            isSuscription &&
            <>
              <AccordionItem borderColor={"brand.100"} >
                <AccordionButton py={6} px={10} >
                  <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"}>Mi suscripción</Heading>
                  <AccordionIcon color={"brand.600"} />
                </AccordionButton>
                <AccordionPanel py={6} px={10} borderTop={"1px solid"} borderTopColor={"brand.100"}>
                  <MySubscription />
                </AccordionPanel>
              </AccordionItem >

              <AccordionItem borderColor={"brand.100"} >
                <AccordionButton py={6} px={10} >
                  <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"}>Facturación</Heading>
                  <AccordionIcon color={"brand.600"} />
                </AccordionButton>
                <AccordionPanel py={6} px={10} borderTop={"1px solid"} borderTopColor={"brand.100"}>
                  <FormBilling />
                </AccordionPanel>
              </AccordionItem >
            </>
          }

        </Accordion>
      </Box>
    </Box>
  )
}
