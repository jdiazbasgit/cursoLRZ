import { HStack, Image } from "@chakra-ui/react";

export default function LoadingPage() {
  return (
    <HStack h={"100vh"} justifyContent="center">
      <Image src="/img/logo" alt="NinjaTalet" w="300px"/>
    </HStack>
  )
}
