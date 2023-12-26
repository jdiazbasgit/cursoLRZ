import { Box, Flex, VStack } from "@chakra-ui/react";
import { Filter } from "src/components/common";
import TableCodesAssigned from "src/components/Dashboard/TableCodesAssigned";
import { Users } from "src/models";

interface Props {
  userSelected?: Users
}
export default function CodeChallengeLegend({ userSelected }: Props) {

  return (
    <VStack
      spacing={8}
    >
      <Flex w="100%" justifyContent={"space-between"} gap={4}>
        <Filter isAssignedCodeChallenge isAssignedCodeChallengeLegend />
      </Flex>
      <Box p={10} bgColor="white" borderRadius={"lg"} borderTopLeftRadius={0} mt={"2px"} w="100%">
        <TableCodesAssigned isViewLegend userSelected={userSelected} />
      </Box>
    </VStack>
  )
}
