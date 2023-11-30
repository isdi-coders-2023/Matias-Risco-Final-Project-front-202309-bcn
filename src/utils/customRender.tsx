import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalsStyled from "../styles/GlobalsStyled";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setupStore } from "./setUpStore";
import { Provider } from "react-redux";

export interface ActivateCustumazerStructure {
  isMemoryRouter?: boolean;
  isProvider?: boolean;
}

export interface InitialPropsStructure {
  initialPath?: string;
  preloadedState?: PreloadedState<RootState>;
}

const customRender = (
  children: React.ReactElement,
  activateCustumazer?: ActivateCustumazerStructure,
  initialProps?: InitialPropsStructure,
) => {
  const initialPropsDummy: InitialPropsStructure = {
    initialPath: "",
    preloadedState: {},
  };
  const ActivateCustumazerDummy: ActivateCustumazerStructure = {
    isMemoryRouter: false,
    isProvider: false,
  };

  const { isMemoryRouter, isProvider } =
    activateCustumazer ?? ActivateCustumazerDummy;
  const { initialPath, preloadedState } = initialProps ?? initialPropsDummy;

  const base = (
    <ThemeProvider theme={mainTheme}>
      {" "}
      <GlobalsStyled />
      {children}
    </ThemeProvider>
  );

  const setProvide: React.ReactElement = isProvider ? (
    <Provider store={setupStore(preloadedState)}>{base}</Provider>
  ) : (
    base
  );

  const setMemoryRouter: React.ReactElement =
    isMemoryRouter ?? ActivateCustumazerDummy.isMemoryRouter ? (
      <MemoryRouter initialEntries={[initialPath!]}>{setProvide}</MemoryRouter>
    ) : (
      setProvide
    );

  return render(setMemoryRouter);
};

export default customRender;
