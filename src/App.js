import React from "react";
import { Normalize } from "styled-normalize";

import { rootRoutes } from "./routes";
import { GlobalStyles } from "./global-styles";

export const App = () => (
  <>
    <Normalize />
    <GlobalStyles />
    {rootRoutes()}
  </>
);
