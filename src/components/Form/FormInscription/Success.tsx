import { Alert, AlertIcon, Box, Button, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import PathName from 'src/consts/pathName'

interface Props {
  title: string
  body: string
  bodyy?: string
  isLegend?: boolean
}
export default function Success({ title, body, isLegend,bodyy }: Props) {
  const router = useRouter()
  function navegateTo() {
    if (isLegend) {
      router.push(PathName.dashboardAdmin.base)
    } else {
      router.push(PathName.home.acces)
    }
  }
  return (
    <VStack bg={"brand.50"} color="brand.900" p={10} borderRadius={"lg"} gap={5} >
      <Alert status='success' bgColor="transparent" fontFamily='Montserrat,sans-sherif;'  color="successRegister" fontSize={'16px'} fontWeight={500} p={0}  >
        <AlertIcon />
        {title}
      </Alert>
      {/* <Box w="100%" mb={1}>
        <Text w="75%" fontSize={'14px'} >{title}</Text>        
      </Box> */}
      <Box w="100%">
        <Text w="75%"  fontSize={'14px'} >{body}</Text>        
        <Text w="75%" fontFamily='Roboto,sans-sherif;' color={'brand.900'}  fontWeight={700} fontSize={'14px'} >{bodyy}</Text>        
      </Box>
      
      <Box w="100%" display="flex" justifyContent="flex-end" >
        <Button variant={"terciary"} px={10} onClick={navegateTo}>Finalizar</Button>
      </Box>
    </VStack>
  )
}
