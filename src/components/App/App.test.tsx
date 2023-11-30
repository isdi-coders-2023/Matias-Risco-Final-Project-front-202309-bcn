import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import App from "./App";

describe("Given the component App", () => {
  describe("When it is render", () => {
    test("Then it should display by screnn h1 'Games'", () => {
      const headingTag = "heading";
      const homeHeadingText = "Games";

      customRender(<App />, { isMemoryRouter: true }, { initialPath: "" });

      const headingElement = screen.getByRole(headingTag, {
        name: homeHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
