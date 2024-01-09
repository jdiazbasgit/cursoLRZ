import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Heading, HStack, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { getUserAPI } from "src/api"
import { EditProfile } from "src/components/Form"
import PathName from "src/consts/pathName"
import { Role } from "src/models"

export default function UserDetail() {
  const router = useRouter()
  var userId = router.query.userId as string
  const companyCheck = userId.split('&')
  
  var isCompany = false
  if (companyCheck[1] === Role.company) isCompany = true
  userId = companyCheck[0]


  const { data, refetch, isRefetching, isFetched } = useQuery(['userDetail'], () => getUserAPI({ id: userId, isCompany }), {
    refetchOnWindowFocus: false,
    enabled: false
  })

  useEffect(() => {
    if (userId) refetch()
  }, [refetch, userId])

  if (isRefetching) return <Container display={"flex"} justifyContent="center">
    <Spinner thickness='4px' speed='0.65s' emptyColor='redBrand.900' color='brand.50' size='xl' />
  </Container>
  if (isFetched && !data) return <Box
    w="100%"
    bgColor={"brand.50"}
    borderRadius="lg"
    p={4}
  >
    <Heading fontSize={"md"} textAlign="center">Error al obtener datos del usuario</Heading>
  </Box>
  return (
    <SimpleGrid minChildWidth={"30rem"} gap={8} >
      <Box
        bgColor={"brand.50"}
        borderRadius={"lg"}
      >
        <Accordion defaultIndex={[0]} allowToggle borderColor={"brand.100"}>
          <AccordionItem borderTop="none" borderBottomWidth={"1px"}>
            <AccordionButton py={6} px={10}>
              <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"}>Mi Perfil</Heading>
              <AccordionIcon color={"brand.600"} />
            </AccordionButton>
            <AccordionPanel py={6} px={10}>
              <EditProfile userSelected={data} isCompany={data?.role === Role.company}  isNM={data?.role === Role.ninjaMaster} />
              
              {/* <HStack mt={14} justifyContent="center" spacing={10}>
                <Button variant={"primary"} borderRadius="full" onClick={() => router.push(PathName.dashboardAdmin.users + `/${userId}&${companyCheck[1]}/challenge`)}>Code Challenges</Button>

                {isCompany && <Button variant={"primary"} borderRadius="full" onClick={() => router.push(PathName.dashboardAdmin.users + `/${userId}/process`)}>Procesos</Button>}

                {isCompany && <Button variant={"primary"} borderRadius="full" onClick={() => router.push(PathName.dashboardAdmin.users + `/${userId}/billing`)}>Suscripciones</Button>}
                {
                  Boolean(data?.role === Role.ninjaMaster || data?.role === Role.ninjaLegend) &&
                  <Button variant={"primary"} borderRadius="full" onClick={() => router.push(PathName.dashboardAdmin.users + `/${userId}/calendar`)}>Calendario</Button>
                }
               
               
                 
              </HStack> */}

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </SimpleGrid>
  )
}
