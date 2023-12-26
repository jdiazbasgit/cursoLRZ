import { Flex, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";
import { TableUsers } from "src/components/Dashboard";

export default function Users() {
  return (
    <VStack
      spacing={8}
    >
      <Flex w="100%" flexDir={"column"} justifyContent={"space-between"} gap={4}>
        <Filter isUsers />
      </Flex>

      <TableUsers />

    </VStack>
  )
}
