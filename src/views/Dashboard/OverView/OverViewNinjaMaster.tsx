import { Box, GridItem, SimpleGrid, VStack } from '@chakra-ui/react'
import { Calendar } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { CardInfoMaster } from 'src/components/Dashboard'
import DetailsNotification from 'src/components/Dashboard/Notifications/DetailsNotification'

import TableCodesMasterIndex from 'src/components/Dashboard/TableCodesMasterIndex'
import { selectUserData } from "src/redux/slices/userData";
import { CodeChallenge, Users } from "src/models";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCodesChallengeAssignedEnviadoAPI,
  getCodesChallengeAssignedRevisionAPI,
  getCodesChallengeAssignedSuperadoAPI,
  getCodesChallengeAssignedNoSuperadoAPI,
  getCodesChallengeAssignedEvaluadoAPI,
  getAdminListUsersAPI,
  getMasterListUsersAPI,
  getCodesChallengeAssignedAPI,
  getInterviewAPI
} from 'src/api'
import { useEffect, useState } from "react";
import MyCalendarMaster from 'src/components/Dashboard/calendarDas/calendardasMaster'

interface Porps {
  isViewLegend?: boolean
  userSelected?: Users
}
export default function OverViewNinja({ isViewLegend, userSelected }: Porps) {
  const [dataCode, setDataCode] = useState<CodeChallenge[]>()
  const [codeNumber, setCodeNumber] = useState<number | undefined>()
  const [codeEvaluator, setCodeEvaluator] = useState<number | undefined>()
  const [totalNijas, setTotalNijas] = useState<number | undefined>()
  const [updatedObject, setUpdatedObject] = useState<number | undefined>()
  const dispatch = useDispatch()
  let userData: Users | null = null
  if (userSelected) userData = userSelected
  const { userData: me } = useSelector(selectUserData)
  if (!userSelected) userData = me



  const { data: staticDataEnviado, isLoading, refetch, isRefetching } = useQuery(['assignedCodeChallengesenviado'], () => getCodesChallengeAssignedEnviadoAPI({
    userId: userData?.id,

  }), {
    refetchOnWindowFocus: false,
    staleTime: 0
  })
  const { data: staticDataRevision, } = useQuery(['assignedCodeChallengesRevision'], () => getCodesChallengeAssignedRevisionAPI({
    userId: userData?.id,

  }), {
    refetchOnWindowFocus: false,
    staleTime: 0
  })
  const { data: staticDataSuperado, } = useQuery(['assignedCodeChallengesSuperado'], () => getCodesChallengeAssignedSuperadoAPI({
    userId: userData?.id,

  }), {
    refetchOnWindowFocus: false,
    staleTime: 0
  })
  const { data: staticDataNoSuperado, } = useQuery(['assignedCodeChallengesNoSuperado'], () => getCodesChallengeAssignedNoSuperadoAPI({
    userId: userData?.id,

  }), {
    refetchOnWindowFocus: false,
    staleTime: 0
  })
  const { data: staticDataEvaluado, } = useQuery(['assignedCodeChallengesEvaluado'], () => getCodesChallengeAssignedEvaluadoAPI({
    userId: userData?.id,

  }), {
    refetchOnWindowFocus: false,
    staleTime: 0
  })


  const { data: listUsers } = useQuery(['usersListMaster'], () => getMasterListUsersAPI(), {
    refetchOnWindowFocus: false
  })


  const { data: staticData } = useQuery(['assignedCodeChallenges'], () => getCodesChallengeAssignedAPI({
    userId: userData?.id
  }), {
    refetchOnWindowFocus: false,
    staleTime: 0
  })

  interface InterviewData {
    fecha: Date;
    descripcion: string;
  }

  interface InterviewData {
    fecha: Date;
    descripcion: string;
  }

  const dateInterview: InterviewData[] = [];


  if (staticData && staticData.data.length > 0) {
    staticData.data.map((info) => {
      const Interview = typeof info.interview === 'object' && info.interview.id;
      if (Interview) {
        const fetchData = async () => {
          const data = await getInterviewAPI({ interviewId: Interview });
          if (data) {
            const assignedDateTime = data.dateTime.start;
            if (assignedDateTime) {
              const newData = {
                fecha: new Date(assignedDateTime),
                descripcion: "Entrevista",
              };
              dateInterview.push(newData);
            }
          }


        };
        fetchData();
      }
    });
  }


  // interface InterviewData {
  //   fecha: Date;
  //   descripcion: string;
  // }

  // const dateInterview: InterviewData[] = [];

  // if (staticData && staticData.data.length > 0) {
  //   staticData.data.forEach(async (info) => {
  //     const Interview = typeof info.interview === 'object' && info.interview.id;
  //     if (Interview) {
  //       try {
  //         const data = await getInterviewAPI({ interviewId: Interview });
  //         const assignedDateTime = data?.dateTime?.start;
  //         if (assignedDateTime) {
  //           const { fecha, descripcion } = {
  //             fecha: new Date(assignedDateTime),
  //             descripcion: "Entrevista",
  //           };
  //           dateInterview.push({ fecha, descripcion });
  //         }
  //       } catch (error) {
  //         console.error(`Error fetching interview data: ${error}`);
  //       }
  //     }
  //   });
  // }


  const dateCode = [];
  if (staticData && staticData.data.length > 0) {
    const newData = staticData.data.map((info) => {
      const assignedDateTime = info.assignedEvaluatorDateTime;
      if (assignedDateTime) {
        return {
          fecha: new Date(assignedDateTime),
          descripcion: "Asignación de code",
        };
      }
      return null; // O algún valor por defecto para los objetos no válidos
    }).filter((obj): obj is { fecha: Date; descripcion: string } => {
      return obj !== null && obj.fecha instanceof Date;
      // Eliminar los objetos no válidos de newData
    });

    dateCode.push(...newData);
  }

  const DateEvaluation = [];

  if (staticData && staticData.data.length > 0) {
    const newData = staticData.data.map((info) => {
      const DateEvaluation = info.limitDateTimeEvaluator;
      if (DateEvaluation) {
        return {
          fecha: new Date(DateEvaluation),
          descripcion: "Tiempo limite de evaluar code",
        };
      }
      return null; // O algún valor por defecto para los objetos no válidos
    }).filter((obj): obj is { fecha: Date; descripcion: string } => {
      return obj !== null && obj.fecha instanceof Date;
      // Eliminar los objetos no válidos de newData
    });

    DateEvaluation.push(...newData);
  }





  useEffect(() => {
    if (typeof staticDataEnviado?.paging === "object" && staticDataEnviado?.paging.total && typeof staticDataRevision?.paging === "object" && staticDataRevision?.paging.total) {
      setCodeNumber(staticDataEnviado.paging.total + staticDataRevision?.paging.total)

    }
  }, [staticDataEnviado])

  useEffect(() => {
    if (
      typeof staticDataSuperado?.paging === "object" && staticDataSuperado?.paging.total &&
      typeof staticDataNoSuperado?.paging === "object" && staticDataNoSuperado?.paging.total &&
      typeof staticDataEvaluado?.paging === "object" && staticDataEvaluado?.paging.total

    ) {
      setCodeEvaluator(staticDataSuperado.paging.total + staticDataNoSuperado?.paging.total + staticDataEvaluado?.paging.total)

    }
  }, [staticDataEnviado])

  useEffect(() => {
    if (typeof listUsers?.paging === "object" && listUsers?.paging.total) {
      setTotalNijas(listUsers.paging.total)

    }
  }, [listUsers])



  // const fechaa='19/04/2023'

  return (
    <VStack>

      <SimpleGrid width='100%' columns={3} spacing={4}>

        <Box  >
          <GridItem mb={30}>
            <CardInfoMaster
              title="Número de codes por evaluar"
              numberPercentage={1}
              scoreGraphCircle={codeNumber} />
          </GridItem>
          <GridItem mb={30}>
            <CardInfoMaster
              title="Número total de codes Evaluados"
              numberPercentage={11.8}
              scoreGraphCircle={codeEvaluator} />
          </GridItem>
          <GridItem mb={30}>
            <CardInfoMaster
              title="Total de Ninjas Aprobados"
              numberPercentage={11.8}
              scoreGraphCircle={totalNijas} />
          </GridItem>

        </Box>

        <Box  >
          <GridItem rowSpan={2} >
            <DetailsNotification width="100%" height="540px" />
          </GridItem>
        </Box>

        <Box >
          <GridItem rowSpan={2} className="overview_calendar">
            <MyCalendarMaster
              DateAssigned={dateCode}
              DateEvaluation={DateEvaluation}
              DateInterview={dateInterview}

            />
          </GridItem >
        </Box>



      </SimpleGrid>

      {/* <TableCodesMasterIndex /> */}



    </VStack>
  )
}


