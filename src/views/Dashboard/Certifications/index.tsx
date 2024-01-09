import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { CardsCertification } from "src/components/Dashboard";
import { ApplyForCodeModal, Filter } from "src/components/common";

export default function Certifications() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1100px)')
  return (
    <Box>
      <Flex w="100%" flexDir={isLargerThan1280 ? "row" : "column"} justifyContent={"space-between"} gap={isLargerThan1280 ? 0 : 4}>
        <Filter isCertifications />
        <ApplyForCodeModal />
      </Flex>

      <CardsCertification />

    </Box>
  )
}
