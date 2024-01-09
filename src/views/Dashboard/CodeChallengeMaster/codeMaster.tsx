import { Flex, Tab, TabList, TabPanel, TabPanels, Tabs, useMediaQuery, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { ApplyForCodeModal, Filter } from "src/components/common";
import { TableCodes } from "src/components/Dashboard";
import TableCodesAssigned from "src/components/Dashboard/TableCodesAssigned";
import { Users } from "src/models";

interface Props {
  userSelected?: Users
}
export default function CodeChallengeMasterTable({ userSelected }: Props) {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1155px)')
  const [tabIndex, setTabIndex] = useState(0)

  function handleTabsChange(index: number) {
    setTabIndex(index)
  }

  return (
    <VStack
      spacing={6}
    >
      <Flex w="100%" flexDir={isLargerThan1280 ? "row" : "column"} justifyContent={"space-between"} gap={isLargerThan1280 ? 0 : 4}>
        {
          tabIndex === 0 ?
            <Filter isAssignedCodeChallenge /> :
            <Filter isRequestedCodeChallenge />
        }
        {tabIndex === 1 && <ApplyForCodeModal userSelected={userSelected} />}
      </Flex>
      <TableCodes isViewMaster userSelected={userSelected} />
    </VStack>
  )
}


