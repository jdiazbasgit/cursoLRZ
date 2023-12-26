import {  SimpleGrid, Text} from '@chakra-ui/react'



export default function FormInscription() {

  return (
    <SimpleGrid as="form" bg={ "brand.50"} color="brand.900" p={ 10} borderRadius={"lg"} minChildWidth={ "310px"} gap={5} >


      <Text fontSize="2xl" fontWeight="bold" color="brand.900" textAlign="center" >Formulario de registro</Text>



    </SimpleGrid >

  )
}