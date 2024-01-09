import { Flex, useMediaQuery, VStack } from "@chakra-ui/react";
import { ApplyForCodeModal, Filter } from "src/components/common";
import { TableCodes } from "src/components/Dashboard";
import { Users } from "src/models";

interface Props {
  userSelected?: Users
}
export default function CodeChallenge({ userSelected }: Props) {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1155px)')

  return (
    <VStack
      spacing={8}
    >
      <Flex w="100%" flexDir={isLargerThan1280 ? "row" : "column"} justifyContent={"space-between"} gap={isLargerThan1280 ? 0 : 4}>
        <Filter isRequestedCodeChallenge />
        <ApplyForCodeModal userSelected={userSelected} />
      </Flex>

      <TableCodes userSelected={userSelected} />
    </VStack>
  )
}
