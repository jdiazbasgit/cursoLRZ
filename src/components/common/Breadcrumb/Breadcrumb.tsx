import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { IconBackRounded } from 'src/assets/icons';


interface nameUrl {
  [key: string]: string
}

const NAME_OF_URL = {
  setting: 'Perfil',
  challenge: 'Code Challenge',
  certification: 'certificados',
  support: 'Soporte',
  requests: 'Solicitudes',
  calendar: 'Calendario',
  process: 'Procesos',
  ninjas: 'Ninjas',
  subscriptions: 'Suscripciones',
  "ninja-legend": 'Ninja Legend',
  users: 'Usuarios',
  billing: "Facturación",
  new: "Nueva suscripción",
  mails:"Mails",
  mail:"Correo",
  newmail:"Nuevo",
  template:"Rubricas",
  success: "exiso",
  templates: "Templates",
  payments: "Pagos",
  payMaster: "Pagos Ninjas Master",
} as nameUrl

export default function CustomBreadcrumb() {
  const router = useRouter()
  const namesPath: Array<string> = router.route.slice(1).split("/").slice(1)
  var backButton = true;

  function breadcrumbName(): Array<String> {
    if (namesPath.includes('[evaluationId]')) return ['Evaluación Code Challenge']
    if (namesPath.includes('[challengeId_selectDate]')) return ['Calendario']
    return namesPath.map((item, idx) => {
      if (item === '[challengeId]') return 'Detalle'
      if (item === '[ninjaId]') return 'Detalle'
      if (item === '[userId]') return 'Detalle'
      if (item === '[challengeAdminId]') return 'Detalle'
      if (item === '[ListMailId]') return 'Lista de Correo'
      if (item === '[mailId]') return 'Detalle'
      if (item === '[success]') return 'hola'
      if (item === '[templateId]') return 'Detalle'
      if (item === '[userIdMaster]') return 'Detalle'

      return NAME_OF_URL[namesPath[idx]]
    })
  }

  if (namesPath.length <= 0) return (
    <VStack spacing={2} alignItems="start">
      <Text as="span" visibility={"hidden"} fontSize={"sm"} onClick={() => router.back()}>Volver</Text>
      <Breadcrumb >
        <BreadcrumbItem>
          <BreadcrumbLink as="span" _hover={{ textDecor: 'none' }} cursor="default" >
            <Heading as="h1" color={"brand.600"} fontSize="3xl">Dashboard</Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </VStack>
  )
  let lastElement = namesPath.slice(-1)[0]

  if (lastElement === 'ninja-legend' || lastElement === 'billing' || lastElement === 'support') backButton = !backButton
  return (
    <VStack spacing={2} alignItems="start">
      
      <HStack color={"brand.500"} cursor="pointer" spacing={1} alignItems="center" onClick={() => router.back()} >
        {
        backButton? <><IconBackRounded />
        <Text fontSize={"sm"}>Volver</Text>
        </>:<br/>
        }
        
      </HStack>
      <Breadcrumb fontSize="3xl" color={"brand.600"} >
        {breadcrumbName().map((item, idx) => {
          return (
            <BreadcrumbItem key={idx}>
              <BreadcrumbLink as="span" _hover={{ textDecor: 'none' }} cursor="default" >
                <Heading as="h1" color="inherit" fontSize="inherit" fontWeight={600} textTransform={"capitalize"}>{item}</Heading>
              </BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </VStack>
  )
}
