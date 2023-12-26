import { Flex, VStack } from "@chakra-ui/react";
import { CreateUserFromCompany, Filter } from "src/components/common";
import TableCodesCompany from "src/components/Dashboard/TableCodesCompany";
import { Users } from "src/models";

interface Props{
  userSelected?: Users
}

export default function CodeChallengeCompany( { userSelected } : Props) {
  return (
    <VStack
      spacing={8}
    >
      <Flex w="100%" flexWrap={"wrap"} justifyContent={"space-between"} gap={2}>
        <Filter isCodesCompany />
        <CreateUserFromCompany userSelected={userSelected}/>
      </Flex>

      <TableCodesCompany userSelected={userSelected}/>
    </VStack>
  )
}
