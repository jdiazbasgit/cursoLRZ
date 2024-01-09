import { Flex, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";

import TablePaymentMaster from "src/components/Dashboard/TablePaymentsMaster";

export default function PayMaster() {
  return (
    <VStack
      spacing={8}
    >
      {/* <Flex w="100%" flexDir={"column"} justifyContent={"space-between"} gap={4}>
        <Filter isUsers />
      </Flex> */}

      <TablePaymentMaster />

    </VStack>
  )
}
