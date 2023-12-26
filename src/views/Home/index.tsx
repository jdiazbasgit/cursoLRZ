import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import Footer from "src/layout/Footer/Footer";
import Header from "src/layout/Header/Header";

interface Props {
  children: JSX.Element
}
export default function Home({children}: Props) {


  return (
    <>
      <Header />
      <Box as="main" minH={"calc(100vh - 80px)"}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
