import { Flex, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";
import TableMasterPayment from "src/components/Dashboard/TableMasterPayments";

import TablePaymentMaster from "src/components/Dashboard/TablePaymentsMaster";

export default function MasterPayments() {
  return (
    <VStack
      spacing={8}
    >
      <Flex w="100%" flexDir={"column"} justifyContent={"space-between"} gap={4}>
        <Filter isUsers />
      </Flex>

      <TableMasterPayment />

    </VStack>
  )
}
