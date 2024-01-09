import { extendTheme } from "@chakra-ui/react";
import { Button, FormControl, FormLabel, Radio } from "./componentsStyle";
export default extendTheme({
  shadows: "none",
  colors: {
    brand: {
      50: '#FDFDFD',
      100: '#F7F7F7',
      200: '#E4E4E4',
      300: '#CECECE',
      400: '#B1B1B1',
      500: '#7A7A7A',
      600: '#636363',
      700: '#3A3A3A',
      800: '#303030',
      900: '#222222',
    },
    bg: "#e5e5e5",
    redBrand: {
      100: "#F30005",
      900: "#E51D20",
    },
    success: "#25CD6B",
    successRegister: "#5BC980",
    checkedColor: {
      500: "#25CD6B",
      600: "#2F855A"
    },
    lightGrey: "#D8D8D8"
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "white",
        fontSize: "14px"
      }
    }
  },
  components: {
    Button,
    FormControl,
    FormLabel,
    Radio
  },
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Roboto, sans-serif",
    title: "Montserrat, sans-serif",
    logoNinja: "Gang of three, sans-serif"
  }
})