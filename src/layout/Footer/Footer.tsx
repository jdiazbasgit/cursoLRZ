import { Box, Container, Divider, Flex, HStack, IconButton, Link, Spacer, Text, useMediaQuery, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [isLarger550] = useMediaQuery('(max-width: 550px)')

  return (
    <HStack
      as="footer"
      color={"brand.900"}
      paddingY={2}
      height={{ base: "auto", lg: "80px" }}
      alignItems={"center"}
    >
      <Container maxW={"94%"} >
        <Flex
          alignItems={"center"}
          flexDir={{ base: "column", lg: "row" }}
          gap={{ base: 3 }}
        >
          <Flex gap={{ base: 2, sm: 6 }} flexDir={{ base: "column", sm: "row" }} alignItems="center">
            <Image src="/img/Logo_NinjaTalent.png" alt="NinjaTalet" width={"140px"} height={"50px"} objectFit="cover" />
            <Text color="redBrand.900">Copyright © 2022 Ninja Talent</Text>
          </Flex>
          <Spacer />
          {/* <HStack as="nav" fontSize={"sm"} >
            <Flex
              as={"ul"}
              gap={3}
              color="brand.50"
              flexDir={isLarger550 ? "column" : "row"}
              alignItems="center"
            >
              <Box as="li" style={{ listStyle: "none" }}>
                <Link isExternal whiteSpace={"nowrap"} textDecor="underline">Términos y condiciones</Link>
              </Box>
              <Divider orientation={isLarger550 ? "horizontal" : "vertical"} w={isLarger550 ? "50px" : "1px"} h={isLarger550 ? "1px" : "18px"} />
              <Box as="li" style={{ listStyle: "none" }}>
                <Link isExternal whiteSpace={"nowrap"} textDecor="underline">Política de privacidad</Link>
              </Box>
              <Divider orientation={isLarger550 ? "horizontal" : "vertical"} w={isLarger550 ? "50px" : "1px"} h={isLarger550 ? "1px" : "18px"} />
              <Box as="li" style={{ listStyle: "none" }}>
                <Link isExternal whiteSpace={"nowrap"} textDecor="underline">Política de cookies</Link>
              </Box>
            </Flex>
          </HStack> */}
          <Spacer />
          <Spacer />
          <HStack color="brand.50">
            <Link isExternal href="https://www.facebook.com/ninjatalent.net" >
              <IconButton
                variant={"unstyled"}
                bg="redBrand.900"
                borderRadius={"full"}
                aria-label='Facebook'
                size={"xs"}
                color="brand.50"
                icon={<FontAwesomeIcon icon={faFacebookF} width="100%" height="18px"  />}
              />
            </Link>
            <Link isExternal href="https://twitter.com/NinjaTalent_">
              <IconButton
                variant={"unstyled"}
                bg="redBrand.900"
                borderRadius={"full"}
                aria-label='Facebook'
                size={"xs"}
                color="brand.50"
                icon={<FontAwesomeIcon icon={faTwitter} width="100%" height="18px" />}
              />
            </Link>
            <Link isExternal href="https://www.instagram.com/ninjatalent_/">
              <IconButton
                variant={"unstyled"}
                bg="redBrand.900"
                borderRadius={"full"}
                aria-label='Instagram'
                size={"xs"}
                color="brand.50"
                icon={<FontAwesomeIcon icon={faInstagram} width="100%" height="18px" />}
              />
            </Link>
            <Link isExternal href="https://www.linkedin.com/company/ninjatalent/">
              <IconButton
                variant={"unstyled"}
                bg="redBrand.900"
                borderRadius={"full"}
                aria-label='Facebook'
                size={"xs"}
                color="brand.50"
                icon={<FontAwesomeIcon icon={faLinkedin} width="100%" height="18px" />}
              />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </HStack>
  )
}
