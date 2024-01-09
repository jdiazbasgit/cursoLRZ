import { Global } from "@emotion/react";

export default function Fonts() {
  return (
    <Global
      styles={`
      /* Fuente primary logo */
      @font-face {
        font-family: "Gang of three";
        src: url('/font/fontLogo.ttf') format("truetype")
      }

      @font-face {
        font-family: "Roboto";
        font-weight: 400;
        src: url('/font/Roboto-Regular.ttf') format("truetype")
      }
      @font-face {
        font-family: "Roboto";
        font-weight: 500;
        src: url('/font/Roboto-Medium.ttf') format("truetype")
      }
      @font-face {
        font-family: "Roboto";
        font-weight: 700;
        src: url('/font/Roboto-Bold.ttf') format("truetype")
      }
      
      @font-face {
        font-family: "Montserrat";
        font-weight: 500;
        src: url('/font/Montserrat-Medium.otf') format("opentype")
      }
      @font-face {
        font-family: "Montserrat";
        font-weight: 600;
        src: url('/font/Montserrat-SemiBold.otf') format("opentype")
      }
      @font-face {
        font-family: "Montserrat";
        font-weight: 700;
        src: url('/font/Montserrat-Bold.otf') format("opentype")
      }
      `}
    />
  )
}