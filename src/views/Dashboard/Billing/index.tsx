import { Flex, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";
import { TableBilling } from "src/components/Dashboard";

export default function Billing() {

  return (
    <VStack
      spacing={8}
    >
      <Flex w="100%">
        <Filter isBilling />
      </Flex>

      <TableBilling />
    </VStack>
  )
}
