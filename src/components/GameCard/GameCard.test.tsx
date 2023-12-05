import { screen } from "@testing-library/react";
import gamesMock from "../../mocks/gamesMockData";
import customRender from "../../utils/customRender";
import GameCard from "./GameCard";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";

describe("Given the component GameCard", () => {
  describe("When UserCard it is render with the information of ultrakill", () => {
    test("the user should see the heading of Ultrakill", () => {
      const ultrakill = gamesMock[0];
      const tag = "heading";
      const expectedText = ultrakill.name;

      customRender(<GameCard game={ultrakill} />, {
        isMemoryRouter: true,
        isProvider: true,
      });

      const headingElement = screen.getByRole(tag, {
        name: expectedText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When UserCard it is render with the information of ultrakill and user clicks in button delete", () => {
    test("the user shouldn't see the heading of Ultrakill", async () => {
      const ultrakill = gamesMock[0];
      const expectedText = "Succes in delete game";

      customRender(<GameCard game={ultrakill} />, {
        isMemoryRouter: true,
        isProvider: true,
        isToastify: true,
      });

      const deleteButton = screen.getByRole("button", {
        name: "button Eliminate",
      });

      await userEvent.click(deleteButton);

      const tostifyElement = screen.getByText(expectedText);

      expect(tostifyElement).toBeInTheDocument();
    });
  });

  describe("When UserCard it is render with the information of ultrakill and user clicks in button delete but there is a error", () => {
    test("then it should call  object toast with the method error", async () => {
      server.use(...handlersError);
      const ultrakill = gamesMock[0];

      customRender(<GameCard game={ultrakill} />, {
        isMemoryRouter: true,
        isProvider: true,
        isToastify: true,
      });

      const deleteButton = screen.getByRole("button", {
        name: "button Eliminate",
      });

      await userEvent.click(deleteButton);

      const tostifyElement = screen.getByText("Error in delete game");

      expect(tostifyElement).toBeInTheDocument();
    });
  });
});
