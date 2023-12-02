import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import HomePage from "./HomePage";
import gamesMock from "../../data/gamesData";
import { server } from "../../mocks/main";
import { toast } from "react-toastify";
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
    test("then it should call  object toast with the method error ", async () => {
      const logSpy = vitest.spyOn(toast, "error");
      server.use(...handlersError);
      customRender(<HomePage />, { isProvider: true, isMemoryRouter: true });

      const promise = new Promise((resolve) => {
        setTimeout(() => resolve("done"), 50);
      });

      await promise;
      expect(await logSpy).toBeCalledWith("Error in loading page");
      logSpy.mockClear();
    });
  });
});
