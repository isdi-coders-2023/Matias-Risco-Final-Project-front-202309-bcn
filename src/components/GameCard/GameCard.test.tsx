import { screen } from "@testing-library/react";
import gamesMock from "../../mocks/gamesMockData";
import customRender from "../../utils/customRender";
import GameCard from "./GameCard";

describe("Given the component GameCard", () => {
  describe("When UserCard it is render with the information of ultrakill", () => {
    test("the user should see the heading of Ultrakill", () => {
      const ultrakill = gamesMock[0];
      const tag = "heading";
      const expectedText = ultrakill.name;

      customRender(<GameCard game={ultrakill} />);

      const headingElement = screen.getByRole(tag, {
        name: expectedText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
