import { screen } from "@testing-library/react";
import gamesMock from "../../mocks/gamesMockData";
import customRender from "../../utils/customRender";
import GamesList from "./GamesList";

describe("Given the component GameCard", () => {
  describe("When GameCard it is render with the information of Ultrakill and Cady Crush", () => {
    test("the user should see the heading of Ultrakill and Cady Crush", () => {
      const ultrakill = gamesMock[0];
      const cadyCrush = gamesMock[1];
      const headingTag = "heading";

      customRender(
        <GamesList />,
        { isProvider: true, isMemoryRouter: true },
        {
          preloadedState: {
            gameState: {
              games: gamesMock,
              page: 0,
              maxPage: Math.floor(gamesMock.length / 10) + 1,
            },
          },
        },
      );

      const ultrakillHeadingElement = screen.getByRole(headingTag, {
        name: ultrakill.name,
      });

      const cadyCrushHeadingElement = screen.getByRole(headingTag, {
        name: cadyCrush.name,
      });

      expect(ultrakillHeadingElement).toBeInTheDocument();
      expect(cadyCrushHeadingElement).toBeInTheDocument();
    });
  });
});
