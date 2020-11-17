import React from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../global";
import Theme from "./theme";

// eslint-disable-next-line react/prop-types
const VdfThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default VdfThemeProvider;
