import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
 
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
    font-family: "Anonymous Pro", sans-serif;
    background-color: #f3f7fa;
  }
`;
