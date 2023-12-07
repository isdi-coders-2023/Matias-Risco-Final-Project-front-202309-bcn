import { screen } from "@testing-library/react";
import gamesMock from "../../mocks/gamesMockData";
import customRender from "../../utils/customRender";
import GameInfo from "./GameInfo";

describe("Given the component GameInfo", () => {
  describe("When GameInfo it is render with the information of ultrakill", () => {
    test("the user should see the heading of Ultrakill", () => {
      const ultrakill = gamesMock[0];
      const tag = "heading";
      const expectedText = ultrakill.name;

      customRender(<GameInfo game={ultrakill} />, {
        isMemoryRouter: true,
        isProvider: true,
      });

      const headingElement = screen.getByRole(tag, {
        name: expectedText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
