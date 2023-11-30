import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "@fontsource/roboto/400.css";
import mainTheme from "./styles/mainTheme";
import GlobalsStyled from "./styles/GlobalsStyled";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <GlobalsStyled />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
