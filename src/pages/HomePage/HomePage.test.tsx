import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import HomePage from "./HomePage";
import gamesMock from "../../mocks/gamesMockData";
import { Route, Routes } from "react-router-dom";

describe("Given the component HomePage", () => {
  describe("When HomePage it is render", () => {
    test("the user should see the heading of HomePage is Games", () => {
      const expetedText = "Games";
      const tag = "heading";
      const path = "/home?page=2";

      customRender(
        <HomePage />,
        { isProvider: true, isMemoryRouter: true },
        {
          initialPath: path,
          preloadedState: { gameState: { games: [], maxPage: 4, page: 2 } },
        },
      );

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When HomePage it is render", () => {
    test("the user should see the heading of Ultrakill and Cady Crush", () => {
      const portal = gamesMock[0];
      const counterStrike = gamesMock[1];
      const headingTag = "heading";
      const path = "/home?page=1";

      customRender(
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>,
        { isProvider: true, isMemoryRouter: true },
        {
          initialPath: path,
          preloadedState: {
            gameState: {
              games: gamesMock,
              page: 0,
              maxPage: Math.floor(gamesMock.length / 10) + 1,
            },
          },
        },
      );

      const portalHeadingElement = screen.getByRole(headingTag, {
        name: portal.name,
      });

      const counterStrikeHeadingElement = screen.getByRole(headingTag, {
        name: counterStrike.name,
      });

      expect(portalHeadingElement).toBeInTheDocument();
      expect(counterStrikeHeadingElement).toBeInTheDocument();
    });
  });
});
