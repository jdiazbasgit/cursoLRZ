import { Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Filter } from "src/components/common";
import ModalEmail from "src/components/common/ModalNewEmail";
import { ListMail, SendMail } from "src/components/Dashboard";
import { useRouter } from "next/router"
import PathName from "src/consts/pathName"
import { Users } from "src/models";

interface Props {
  userSelected?: Users
}
export default function TableEmails({ userSelected }: Props) {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1155px)')
  const [tabIndex, setTabIndex] = useState(0)
  const router = useRouter()

  function handleTabsChange(index: number) {
    setTabIndex(index)
  }
  return (
    <VStack
      spacing={6}
    >
      <Flex w="100%" flexDir={isLargerThan1280 ? "row" : "column"} justifyContent={"space-between"} gap={isLargerThan1280 ? 0 : 4}>
        <Filter isMails />
        {
          tabIndex === 1 ?
            <ModalEmail userSelected={userSelected} titleButton="Crear" title="Añadir nueva lista de correo" /> :
            <Button variant={"primary"} borderRadius="full" onClick={() => router.push(PathName.dashboardAdmin.mails + `/newmail`)}>+ Crear</Button>
        }



      </Flex>
      <Tabs w="100%" index={tabIndex} onChange={handleTabsChange} isLazy={true}>
        <TabList border="none">
          <Tab
            fontSize={"16px"}
            fontWeight="bold"
            bgColor={"brand.100"}
            border="1px solid lightGrey"
            borderTopLeftRadius="lg"
            borderBottomWidth="2px"
            _selected={{ color: "inithial", borderBottomColor: "redBrand.900", bgColor: "white" }}
          >
            Envíos
          </Tab>
          <Tab
            fontSize={"16px"}
            fontWeight="bold"
            bgColor={"brand.100"}
            border="1px solid lightGrey"
            borderLeft={"none"}
            borderTopEndRadius="lg"
            borderBottomWidth="2px"
            _selected={{ color: "inithial", borderBottomColor: "redBrand.900", bgColor: "white" }}
          >
            Lista de correo
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={10} bgColor="white" borderRadius={"lg"} borderTopLeftRadius={0} mt={"2px"}>
            <SendMail />
          </TabPanel>
          <TabPanel p={10} bgColor="white" borderRadius={"lg"} borderTopLeftRadius={0} mt={"2px"}>
            <ListMail />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  )
}
