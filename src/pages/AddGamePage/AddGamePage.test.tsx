import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import AddGamePage from "./AddGamePage";

describe("Given the component HomePage", () => {
  describe("When HomePage it is render", () => {
    test("the user should see the heading of HomePage is Games", () => {
      const expetedText = "Add Game";
      const tag = "heading";

      customRender(<AddGamePage />, { isProvider: true, isMemoryRouter: true });

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
