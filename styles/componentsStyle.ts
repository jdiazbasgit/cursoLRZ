import { ComponentStyleConfig } from "@chakra-ui/react"

export const Button = {
  variants: {
    primary: {
      color: "brand.50",
      bg: "redBrand.900",
      borderRadius: 4,
      lineHeight: 0,
      fontSize: "sm",
      _active: {
        bg: "brand.500"
      },
      _loading: {
        bgColor: "redBrand.900",
        opacity: 1,
        _hover: {
          bgColor: "brand.500"
        }
      },
      _disabled: {
        bgColor: "redBrand.900",
        opacity: 1,
        _hover: {
          bgColor: "redBrand.900 !important",
        }
      }
    },
    secundary: {
      color: "brand.50",
      bg: "brand.500",
      borderRadius: 4,
      lineHeight: 0,
      fontSize: "sm",
      _active: {
        bg: "brand.600"
      }
    },
    terciary: {
      color: "brand.50",
      lineHeight: 0,
      fontSize: "sm",
      bg: "black",
      borderRadius: "full",
      _loading: {
        bgColor: "black",
        opacity: 1,
        _hover: {
          bgColor: "black"
        }
      },
      _disabled: {
        bgColor: "black",
        opacity: 1,
        _hover: {
          bgColor: "brand.600 !important",
        }
      }
    }
  }
}

export const FormControl = {
  // Styles for the base style
  baseStyle: { fontSize: "sm" },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
}
export const FormLabel = {
  baseStyle: { fontSize: "inherit" },
}

export const Radio: ComponentStyleConfig = {
  baseStyle: {
    control: {
      _checked: {
        color: "redBrand.900",
        bg: "white",
        borderColor: "redBrand.900",
        _before: {
          content: "''",
          bg: "redBrand.900",
          borderRadius: "50%",
          w: "50%",
          h: "50%"
        },
        _hover: {
          bg: "white",
          borderColor: "redBrand.900",
        },
        _disabled: {
          bg: "brand.200",
          borderColor: "red.300",
          _before: {
            bg: "red.300"
          },
        },
      },
      _focus: {
        boxShadow: "none",
      }
    },
    label: {
      color: "ineherit"
    },
    
  }
}
