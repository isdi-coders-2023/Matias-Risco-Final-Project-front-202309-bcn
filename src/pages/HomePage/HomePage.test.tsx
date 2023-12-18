import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import HomePage from "./HomePage";
import gamesMock from "../../mocks/gamesMockData";
import { Route, Routes } from "react-router-dom";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";

describe("Given the component HomePage", () => {
  describe("When HomePage it is render", () => {
    test("the user should see the heading of HomePage is Games", () => {
      const expetedText = "Games";
      const tag = "heading";
      const path = "/home?page=200";

      customRender(
        <HomePage />,
        { isProvider: true, isMemoryRouter: true },
        {
          initialPath: path,
          preloadedState: { gameState: { games: [], maxPage: 1, page: 0 } },
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

  describe("When it is render but there is a error with the api", () => {
    test("Then it should display 'Problems in counting number of games'", async () => {
      server.use(...handlersError);
      const toastText = "Problems in counting number of games";

      customRender(
        <HomePage />,
        { isMemoryRouter: true, isProvider: true, isToastify: true },
        { initialPath: "/" },
      );

      const toastTextElement = await screen.findByText(toastText);

      expect(toastTextElement).toBeInTheDocument();
    });
  });

  describe("When HomePage it is render with maxPage=4 and page=3", () => {
    test("the user should see the next button in homePage", () => {
      const expetedText = "Next";
      const tag = "link";
      const path = "/home?page=3";

      customRender(
        <HomePage />,
        { isProvider: true, isMemoryRouter: true },
        {
          initialPath: path,
          preloadedState: { gameState: { games: [], maxPage: 4, page: 0 } },
        },
      );

      const nextElement = screen.getByRole(tag, { name: expetedText });

      expect(nextElement).toBeInTheDocument();
    });
  });
});
