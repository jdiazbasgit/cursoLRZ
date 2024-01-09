import { Flex, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";
import { TableProcess } from "src/components/Dashboard";
import TablePaymentsMaster from "src/components/Dashboard/PaymentsTableMaster";
import { Users } from "src/models";

interface Props{
  userSelected?: Users
}

export default function TablePayments({userSelected}: Props) {
  return (
    <VStack
      spacing={8}
    >
      <Flex w="100%">
        <Filter isProcess />
      </Flex>

      <TablePaymentsMaster userSelected={userSelected}/>
    </VStack>
  )
}
