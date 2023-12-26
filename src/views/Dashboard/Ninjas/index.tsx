import { Flex, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";
import { TableNinjas } from "src/components/Dashboard";

export default function Ninjas() {

  return (
    <VStack
      spacing={8}
    >

       <Flex w="100%">
        <Filter isNinjass />
      </Flex> 

      <TableNinjas />
    </VStack>
  )
}
