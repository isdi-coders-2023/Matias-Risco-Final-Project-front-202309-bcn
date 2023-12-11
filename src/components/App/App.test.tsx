import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import App from "./App";
import gamesMock from "../../mocks/gamesMockData";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";

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
          preloadedState: { gameState: { games: gamesMock } },
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
});
