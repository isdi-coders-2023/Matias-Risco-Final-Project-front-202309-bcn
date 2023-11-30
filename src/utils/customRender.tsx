import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalsStyled from "../styles/GlobalsStyled";

export interface ActivateCustumazerStructure {
  isMemoryRouter?: boolean;
}

export interface InitialPropsStructure {
  initialPath?: string;
}

const customRender = (
  children: React.ReactElement,
  activateCustumazer?: ActivateCustumazerStructure,
  initialProps?: InitialPropsStructure,
) => {
  const initialPropsDummy: InitialPropsStructure = {
    initialPath: "",
  };
  const ActivateCustumazerDummy: ActivateCustumazerStructure = {
    isMemoryRouter: false,
  };

  const { isMemoryRouter } = activateCustumazer ?? ActivateCustumazerDummy;
  const { initialPath } = initialProps ?? initialPropsDummy;

  const base = (
    <ThemeProvider theme={mainTheme}>
      {" "}
      <GlobalsStyled />
      {children}
    </ThemeProvider>
  );

  const setMemoryRouter: React.ReactElement =
    isMemoryRouter ?? ActivateCustumazerDummy.isMemoryRouter ? (
      <MemoryRouter initialEntries={[initialPath!]}>{base}</MemoryRouter>
    ) : (
      base
    );

  return render(setMemoryRouter);
};

export default customRender;