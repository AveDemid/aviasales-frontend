import { createGlobalStyle } from "styled-components";
import { font_face_open_sans } from "@assets/fonts/Open_Sans";

export const GlobalStyles = createGlobalStyle` 
  ${font_face_open_sans}
 
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-family: "Open Sans", sans-serif;
    background-color: #f3f7fa;
  }
`;
