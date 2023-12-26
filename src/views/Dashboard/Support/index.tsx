import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { FormSupport } from "src/components/Form";
import { supportData } from "src/consts/staticData";

export default function Support() {
  return (
    <SimpleGrid minChildWidth={"30rem"} gap={8} >
      <Box
        bgColor={"brand.50"}
        borderRadius={"lg"}
      >
        <Accordion defaultIndex={[0]} allowToggle borderColor={"brand.300"}>
          {
            supportData.map(element => {
              return (
                <AccordionItem key={element.question} borderTop="none" borderBottomWidth={"1px"} color={"brand.800"}>
                  <h2>
                    <AccordionButton py={6} px={10}>

                      {
                        element.question === "¿Cómo puedo compartir los certificados Ninja?" ?
                      <Heading as='h2' flex='1' textAlign='left' color={"brand.800"}  fontSize={"md"} >
                        {element.question}
                      </Heading>:
                      <Heading as='h2' flex='1' textAlign='left' color={"brand.800"}  fontSize={"md"} >
                      {element.question}
                    </Heading>
                      }
                      <AccordionIcon color={"brand.600"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={8} pt={4} pl={10}>
                    <Text>{element.text}</Text>
                  </AccordionPanel>
                </AccordionItem>
              )
            })
          }
        </Accordion>

      </Box>
      <Box>
        <FormSupport />
      </Box>
    </SimpleGrid>
  )
}
