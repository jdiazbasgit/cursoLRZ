import { Button, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import { Calendar } from 'antd'
import { IconLargeCertification, IconLargeChallenge, IconLargeUser } from 'src/assets/icons'
import { CardInfo } from 'src/components/Dashboard'
import DetailsNotification from 'src/components/Dashboard/Notifications/DetailsNotification'
import PathName from 'src/consts/pathName'
import { selectUserData } from 'src/redux/slices/userData'
import { getCodesChallengeAPI } from 'src/api'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from 'react'
import { CodeChallenge, Role } from 'src/models'
import { useDispatch, useSelector } from "react-redux"
import { addCertification, updateFilterCertification } from 'src/redux/slices/certifications'
import moment from 'moment-timezone';
import dayjs from 'dayjs';
import MyCalendar from 'src/components/Dashboard/calendarDas/calendardas'



const data = [
  {
    type: 'BackEnd',
    sales: 14,
  },
  {
    type: 'FrontEnd',
    sales: 8,
  },
  {
    type: 'FullStack',
    sales: 3,
  },
  {
    type: 'DevOps',
    sales: 7,
  },
  {
    type: 'Python',
    sales: 10,
  },
]

const config = {
  data,
  xField: 'type',
  yField: 'sales',
  color: '#E51D20',
  xAxis: {
    label: {
      autoHide: true,
      autoRotate: false,
    },
  },
  meta: {
    type: {
      alias: 'Tecnologias',
    },
    sales: {
      alias: 'Personas',
    },
  },
}


export default function OverViewNinja() {
  const { userData } = useSelector(selectUserData)
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const [isView, setIsView] = useState<{ isViewNinja?: boolean, isViewMaster?: boolean }>()
  // const [data, setData] = useState<CodeChallenge[]>()
  // const [data, setData] = useState<CodeChallenge[]>()

  const { data: staticData } = useQuery(['requestedCodeChallengess'], () => getCodesChallengeAPI({ userId: userData?.id }), {
    refetchOnWindowFocus: false,
    staleTime: 0
  })
  // useEffect(() => {
  //   if (staticData) {
  //     dispatch(addCertification(staticData))
  //     setData(staticData.data)
  //   }
  // }, [staticData, dispatch])

  // console.log(staticData?.data?.status.name)

  const superadoStatus = staticData?.data.filter(item => {
    return typeof item.status === "object" && item.status?.name === "superado";
  })[0];
  const TitleCode = staticData?.data[0].template.title.split("-").slice(0, 3).join(" ")
  // const TitleCode = '2hola'




  const FechaCode = staticData?.data[0].createdAt;
  const FechaLimCode = staticData?.data[0].limitDateTime;
  const limitdateTimeEvaluator = staticData?.data[0].limitDateTimeEvaluator;


  let fechaFormateada = "";
  if (FechaCode) {
    const fecha = new Date(FechaCode);
    const timeformat = {

      day: 'numeric',
      month: 'long',

    } as const;
    fechaFormateada = fecha.toLocaleDateString('es-ES', timeformat);
  }

  let fechaLimit = "";
  if (FechaLimCode) {
    const fecha = new Date(FechaLimCode);
    const timeformat = {

      day: 'numeric',
      month: 'long',

    } as const;
    fechaLimit = fecha.toLocaleDateString('es-ES', timeformat);
  }

  // const today = moment();
  // const date = today.toDate();
  // const dayjsDate = dayjs(FechaCode).format('YYYY-MM-DD');
  // const dayjsDate2 = dayjs(FechaLimCode).format('YYYY-MM-DD');
  // const dayjsDate3 = dayjs(limitdateTimeEvaluator).format('YYYY-MM-DD');



  // const startDate = new Date(dayjsDate);
  // const endDate = new Date(dayjsDate2);
  // const evaluationDate = new Date(dayjsDate3);

  const dayjsDate = moment.tz(FechaCode, 'UTC').format('YYYY-MM-DD');
  const startDate = moment.tz(dayjsDate, 'YYYY-MM-DD', 'America/Bogota').toDate();

  const dayjsDate2 = moment.tz(FechaLimCode, 'UTC').format('YYYY-MM-DD');
  const endtDate = moment.tz(dayjsDate2, 'YYYY-MM-DD', 'America/Bogota').toDate();

  const dayjsDate3 = moment.tz(limitdateTimeEvaluator, 'UTC').format('YYYY-MM-DD');
  const evaluationDate = moment.tz(dayjsDate3, 'YYYY-MM-DD', 'America/Bogota').toDate();






  return (
    <>
      <SimpleGrid minChildWidth='120px' gridTemplateColumns={"1fr 350px 1fr"} spacing={10}>
        <GridItem display={"flex"} flexDir="column" gap={8}>

          {superadoStatus ?


            <CardInfo title="Code Challenge" icon={<IconLargeChallenge color={'redBrand.100'} boxSize={"7rem"} />} titleButton="Ver"
              text={"Recuerda que el " + fechaLimit + " debes entregar tu codechallenge para obtener tu nuevo certificado."}
              url={`${PathName.dashboard.challenge}`} />
            :
            <CardInfo title="Code Challenge" icon={<IconLargeChallenge color={'redBrand.100'} boxSize={"7rem"} />} titleButton="Ver"
              text={TitleCode ? TitleCode + " del " + fechaFormateada : "No hay codechallenges en curso"}
              url={`${PathName.dashboard.challenge}`} />
          }

          {
            superadoStatus ?
              <CardInfo title="Certificado" icon={<IconLargeCertification color={'redBrand.100'} boxSize={"7rem"} />}

                titleButton="Ver todos"
                text={
                  "Tu ultimo Certificado es " + superadoStatus?.template.title.split("-").slice(0, 3).join(" ")
                }
                url={`${PathName.dashboard.certification}`} />
              :
              <CardInfo title="Certificado" icon={<IconLargeCertification color={'redBrand.100'} boxSize={"7rem"} />} titleButton="Ver todos"
                text={"Recuerda que el " + fechaLimit + " debes entregar tu codechallenge para obtener tu nuevo certificado."}
                url={`${PathName.dashboard.certification}`} />
          }

          {
            typeof staticData?.data[0].assignedEvaluatorInfo === "object" ?
              <CardInfo title="Ninja Master" icon={<IconLargeUser color={'redBrand.100'} boxSize={"7rem"} />}
                titleButton="Ver todos"
                text={"El code Challenge " + TitleCode + " tiene el Ninja Master " + staticData?.data[0].assignedEvaluatorInfo.firstName + staticData?.data[0].assignedEvaluatorInfo.lastName + " como evaluador."}
                url={`${PathName.dashboard.challenge}`}
              />
              :
              <CardInfo title="Ninja Master" icon={<IconLargeUser color={'redBrand.100'} boxSize={"7rem"} />}
                titleButton="Ver todos"
                text={"El code Challenge " + TitleCode + " esta por aprobar tu ninja Master "}
                url={`${PathName.dashboard.challenge}`}
              />

          }

        </GridItem>

        <GridItem rowSpan={2} >
          <DetailsNotification width="350px" height='530' />
        </GridItem>

        <GridItem rowSpan={2} className="overview_calendar">


          <MyCalendar
            startDate={startDate}
            endDate={endtDate}
            redDate={evaluationDate}
          />

          {/* <Calendar fullscreen={false} value={dayjsDate} /> */}
        </GridItem >

      </SimpleGrid>
    </>
  )
}


