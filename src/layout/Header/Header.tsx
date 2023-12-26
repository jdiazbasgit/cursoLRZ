import { Box, Container, HStack, IconButton, Link, Spacer, useMediaQuery, VStack, Image } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import PathName from 'src/consts/pathName'
import { useEffect, useState } from 'react'

import LinkNext from "next/link";
import { useRouter } from 'next/router';

export default function Header() {
  const [isNavMobile, setIsNavMobile] = useState(false)
  const [mdLarge] = useMediaQuery(["(min-width: 992px)"])

  useEffect(() => {
    if (mdLarge) return setIsNavMobile(false)
  }, [mdLarge])

  return (
    <Box
      as='header'
      pos={"sticky"}
      top={0}
      zIndex={999}
      bg="brand.900"
    >
      <HStack
        paddingY={2}
        height="80px"
        alignItems={"center"}
      >
        <Container
          maxW={"94%"}
        >
          <HStack >
            <LinkNext
              href={PathName.home.form_ninja}
              passHref
            >
              <Image src="/img/Logo_NinjaTalent.png" alt="NinjaTalet" width={"140px"} height={"50px"} objectFit="cover" style={{ cursor: "pointer" }} />
            </LinkNext>

            <Spacer />
            
            <IconButton
              onClick={() => setIsNavMobile(e => !e)}

              display={["flex", "flex", "flex", "none"]}
              variant={"unstyled"}
              color="brand.500"
              _hover={{ color: "brand.50" }}
              aria-label='menu'
              icon={isNavMobile ? <CloseIcon w={7} h={7} /> : <HamburgerIcon w={9} h={9} />}
            />
          </HStack>
        </Container>
      </HStack>
    </Box>
  )
}

type PropsNav = {
  isNavMobile: boolean,
  children: JSX.Element,
}
const Nav: React.FC<PropsNav> = ({ isNavMobile, children }) => {
  return (
    <nav>
      {
        isNavMobile ?
          <VStack
            w='100vw'
            bgColor="brand.900"
            zIndex={20}
            h="100vh"
            pos="fixed"
            top="80px"
            left="0"
            overflowY="auto"
            spacing={0}
          >
            {children}
          </VStack>
          :
          <HStack spacing={2} display={["none", "none", "none", "flex"]} >
            {children}
          </HStack>
      }
    </nav>
  )
}

type PropsListLink = {
  isNavMobile: boolean;
  data: Array<{
    value: string;
    href: string;
  }>
  onClick: () => void;
}
const ListLinks: React.FC<PropsListLink> = ({ isNavMobile, data, onClick }) => {
  const router = useRouter()

  function isActive(href: string) {
    if (router.pathname === href) return true
    return false
  }

  return (
    <>
      {data.map((link, index) => {


        return (
          <LinkNext
            key={`link-${index}-${link.value}`}
            href={link.href}
            passHref
          >
            <Link
              href={link.href}
              as="a"
              color={isActive(link.href) ? "redBrand.900" : "brand.500"}
              transitionDuration=".4s"
              _hover={isActive(link.href) ? { color: "redBrand.900" } : { color: "brand.50" }}
              onClick={onClick}
              w={isNavMobile ? "100%" : "auto"}
              textAlign="center"
              padding={isNavMobile ? 4 : 2}
              
              textTransform="capitalize"
              fontWeight={"bold"}
              letterSpacing={1}
              fontSize="md"
            >
              {link.value}
            </Link>
          </LinkNext>
        )
      })}
    </>
  )
}