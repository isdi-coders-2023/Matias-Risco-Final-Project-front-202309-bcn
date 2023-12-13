import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import App from "./App";
import gamesMock from "../../mocks/gamesMockData";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";
import { handlers } from "../../mocks/handlers";
import { HttpHandler } from "msw";

describe("Given the component App", () => {
  describe("When it is render", () => {
    test("Then it should display by screnn h1 'Games'", () => {
      const headingTag = "heading";
      const homeHeadingText = "Games";

      customRender(
        <App />,
        { isMemoryRouter: true, isProvider: true },
        { initialPath: "" },
      );

      const headingElement = screen.getByRole(headingTag, {
        name: homeHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When the user are in /game/info/:id and press link Home with the store aredy loaded", () => {
    test("Then it should not see 'Error in loading page'", async () => {
      server.use(...handlersError);

      const ultrakill = gamesMock[0];
      const path = `/game/info/${ultrakill.id}`;
      const referenceTag = "link";
      const referenceName = "link Home";

      customRender(
        <App />,
        { isProvider: true, isMemoryRouter: true },
        {
          initialPath: path,
          preloadedState: {
            gameState: {
              games: gamesMock,
              page: 1,
              maxPage: Math.floor(gamesMock.length / 10) + 1,
            },
          },
        },
      );

      const referenceElement = screen.getByRole(referenceTag, {
        name: referenceName,
      });

      await userEvent.click(referenceElement);

      const toastText = await screen.queryByText("Error in loading page");

      expect(toastText).not.toBeInTheDocument();
    });
  });

  describe("When App it is render but there is a error in loading", () => {
    test("then it should call  object toast with the method error ", async () => {
      const expectedText = "Error in loading page";
      let handlersInUse: HttpHandler[];
      [handlers[0], ...handlersInUse] = handlers;
      handlersInUse.push(handlersError[0]);

      server.use(...handlersInUse);

      customRender(
        <App />,
        {
          isProvider: true,
          isMemoryRouter: true,
        },
        { initialPath: "/home?page=0" },
      );

      const tostifyElement = await screen.findByText(expectedText);

      expect(tostifyElement).toBeInTheDocument();
    });
  });
});
