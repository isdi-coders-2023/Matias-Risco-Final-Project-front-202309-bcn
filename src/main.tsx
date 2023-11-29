import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import GlobalsStyled from "./styles/GlobalsStyled";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalsStyled />
      <div />
    </ThemeProvider>
  </React.StrictMode>
);
