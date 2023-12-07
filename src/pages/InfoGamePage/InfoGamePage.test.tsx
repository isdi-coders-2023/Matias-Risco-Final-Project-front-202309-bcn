import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import InfoGamePage from "./InfoGamePage";
import gamesMock from "../../mocks/gamesMockData";

describe("Given the component InfoGamePage", () => {
  describe("When InfoGamePage it is render", () => {
    test("the user should see the heading of InfoGamePage is 'Info Game'", () => {
      const id = gamesMock[0].id;
      const expectedTitle = "Info Game";
      const tag = "heading";

      customRender(
        <InfoGamePage />,
        { isMemoryRouter: true, isProvider: true },
        {
          preloadedState: { gameState: { games: gamesMock } },
          initialPath: `/game/info/${id}`,
        },
      );

      const TitleElement = screen.getByRole(tag, { name: expectedTitle });

      expect(TitleElement).toBeInTheDocument();
    });
  });
});
