import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Flex, Grid, GridItem, Heading, HStack, SimpleGrid, Spinner, Text } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { getSubscription, getUserAPI } from "src/api"
import SubscriptionTypeData from "src/components/Form/Suscription/components/SubscriptionTypeData"

export default function CompanyDetail() {
  const router = useRouter()
  const CompanyId = router.query.userId as string
  const { data, refetch, isRefetching, isFetched } = useQuery(['CompanyDetail'], () => getUserAPI({ id: CompanyId, isCompany: true }), {
    refetchOnWindowFocus: false,
    enabled: true,
  })
  const subscriptionID = data?.subscription?.id;
  const {data: subscription, error, isError, isLoading} = useQuery(['CompanySubscription'], ()=> getSubscription(subscriptionID?subscriptionID:''), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: !!subscriptionID
  })

  useEffect(() => {
    if (CompanyId) refetch()
  }, [refetch, CompanyId])


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
  if (!data || !subscription) return <p>loading...</p>
  return (
    <SimpleGrid minChildWidth={"30rem"} gap={8} >
      <Box
        bgColor={"brand.50"}
        borderRadius={"lg"}
      >
        <Accordion defaultIndex={[0]} allowToggle borderColor={"brand.100"}>
          <AccordionItem borderTop="none" borderBottomWidth={"1px"}>
            <AccordionButton py={6} px={10}>
              <Heading as='h2' flex='1' textAlign='left' color={"lightGrey"} fontWeight="bold" fontSize={"md"}>Perfil</Heading>
              <AccordionIcon color={"brand.600"} />
            </AccordionButton>
            <AccordionPanel py={6} px={10}>
            <Grid templateColumns='repeat(2, 30%)' gap={6} w="100%">
              <GridItem colSpan={[1, 1, 2]} >
                <Heading as='h4' marginY={"20px"} color={"brand.900"} size='sm'>Tipo de suscripción</Heading>
                <Text color={"brand.600"}>{typeof subscription.subscriptionPlan === 'object' ? subscription.subscriptionPlan.name : 'No hay plan asociado'}</Text>
              </GridItem>
            </Grid>
              <SubscriptionTypeData subscription={data.subscription} credits={data?.credits} packSelected={data.subscription?.subscriptionPlan} />
              <Flex w="100%" justifyContent={"flex-end"} gap={4} alignItems="center">
                {subscription.active? '': (<Button
                  type="submit"
                  variant={"terciary"}
                  px={10}
                  w={{ base: "100%", md: "auto" }}
                  fontSize="md"
                >
                  Renovar
                </Button>)}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </SimpleGrid>
  )
}
