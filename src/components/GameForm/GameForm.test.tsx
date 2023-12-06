import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import GameForm from "./GameForm";

describe("Given the component Form", () => {
  describe("When the component it is render", () => {
    test("Then there should be in screen a heading with 'New Game'", () => {
      const expectedText = "New Game";
      const expectedTag = "heading";

      customRender(<GameForm title="New Game" />, {
        isMemoryRouter: true,
        isProvider: true,
      });

      const imgElement = screen.getByRole(expectedTag, {
        name: expectedText,
      });

      expect(imgElement).toBeInTheDocument();
    });
  });
});
