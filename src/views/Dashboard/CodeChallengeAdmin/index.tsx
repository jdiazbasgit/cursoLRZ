import { Box, Flex, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";
import { TableCodes } from "src/components/Dashboard";
import TableCodesAdmin from "src/components/Dashboard/TableCodesAdmin";
import { Users } from "src/models";

interface Props {
  userSelected?: Users
}
export default function CodeChallengeAdmin({ userSelected }: Props) {

  return (
    <VStack
      spacing={8}
    >
      {/* <Flex w="100%" justifyContent={"space-between"} gap={4}>
        <Filter />
      </Flex> */}
      <Box p={10} bgColor="white" borderRadius={"lg"} borderTopLeftRadius={0} mt={"2px"} w="100%">
        <TableCodesAdmin />
      </Box>
    </VStack>
  )
}
