import { Box, Flex } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getProfileWithTechnologiesAPI, getStatusAPI } from "src/api/utils";
import { CustomBreadcrumb } from "src/components/common";
import Header from "src/layout/Dashboard/Header";
import Slider from "src/layout/Dashboard/Slider";
import { selectUserData } from "src/redux/slices/userData";

interface Props {
  children: JSX.Element
}
export default function Dashboard({ children }: Props) {
  const { userData } = useSelector(selectUserData)

  const available_technologies = useQuery(['available-technologies'], getProfileWithTechnologiesAPI, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity
  })
  const status = useQuery(['status'], getStatusAPI, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity
  })

  if (!userData?.id) return <p>loading...</p>
  return (
    <>
      <Header />
      <Box bg="brand.200" display={"flex"}>
        <Slider />
        <Flex w="100%" color="brand.900" p={8} flexDir="column" gap={5} overflowX="auto">
          <CustomBreadcrumb />
          {children}
        </Flex>
      </Box>
    </>
  )
}