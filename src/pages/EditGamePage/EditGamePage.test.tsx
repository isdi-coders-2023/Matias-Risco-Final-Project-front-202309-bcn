import { screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import EditGamePage from "./EditGamePage";
import { Route, Routes } from "react-router-dom";
import gamesMock from "../../mocks/gamesMockData";
import userEvent from "@testing-library/user-event";

describe("Given the component EditGamePage", () => {
  describe("When EditGamePage it is render", () => {
    test("the user should see the heading of EditGamePage is Modify", () => {
      const expetedText = "Modify";
      const tag = "heading";

      customRender(<EditGamePage />, {
        isProvider: true,
        isMemoryRouter: true,
      });

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When EditGamePage it is render with the id of 'Ultrakill'and it is load in store", () => {
    test("the user should see the input in 'Name:' of InfoGame is 'Ultrakill'", async () => {
      const expectedNameTag = "Name:";
      const tag = "textbox";
      const expectedInput = "Ultrakill";

      customRender(
        <Routes>
          <Route path="/game/edit/:idGame" element={<EditGamePage />} />
        </Routes>,
        { isMemoryRouter: true, isProvider: true },
        {
          preloadedState: { gameState: { games: gamesMock, countGames: 0 } },
          initialPath: `/game/edit/${gamesMock[0].id}`,
        },
      );

      const inputElement = (await screen.findByRole(tag, {
        name: expectedNameTag,
      })) as HTMLInputElement;

      expect(inputElement.value).toBe(expectedInput);
    });
  });

  describe("When EditGamePage it is render with the id of 'Ultrakill'and it is load in store and the user press 'Modify Game'", () => {
    test("then the user should see the message of succefull edit", async () => {
      const expectedNameTag = "Modify Game";
      const tag = "button";
      const errorMessage = "Error in Modify Game";
      const succesMessage = "Succes in Modify Game";

      customRender(
        <Routes>
          <Route path="/game/edit/:idGame" element={<EditGamePage />} />
        </Routes>,
        { isMemoryRouter: true, isProvider: true, isToastify: true },
        {
          preloadedState: { gameState: { games: gamesMock, countGames: 0 } },
          initialPath: `/game/edit/${gamesMock[0].id}`,
        },
      );

      const inputElement = (await screen.findByRole(tag, {
        name: expectedNameTag,
      })) as HTMLInputElement;

      await userEvent.click(inputElement);

      const tostifyErrorElement = await screen.queryByText(errorMessage);
      const tostifySuccesElement = await screen.findByText(succesMessage);

      expect(tostifyErrorElement).not.toBeInTheDocument();
      expect(tostifySuccesElement).toBeInTheDocument();
    });
  });
});
