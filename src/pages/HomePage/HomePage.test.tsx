import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import HomePage from "./HomePage";
import gamesMock from "../../mocks/gamesMockData";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";

describe("Given the component HomePage", () => {
  describe("When HomePage it is render", () => {
    test("the user should see the heading of HomePage is Games", () => {
      const expetedText = "Games";
      const tag = "heading";

      customRender(<HomePage />, { isProvider: true, isMemoryRouter: true });

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When HomePage it is render", () => {
    test("the user should see the heading of Ultrakill and Cady Crush", () => {
      const portal = gamesMock[0];
      const counterStrike = gamesMock[1];
      const headingTag = "heading";

      customRender(
        <HomePage />,
        { isProvider: true, isMemoryRouter: true },
        { preloadedState: { gameState: { games: gamesMock } } },
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

  describe("When HomePage it is render but there is a error in loading", () => {
    test.only("then it should call  object toast with the method error ", async () => {
      const expectedText = "Error in loading page";
      server.use(...handlersError);

      customRender(<HomePage />, {
        isProvider: true,
        isMemoryRouter: true,
        isToastify: true,
      });

      const tostifyElement = await screen.findByText(expectedText);

      expect(tostifyElement).toBeInTheDocument();
    });
  });
});
