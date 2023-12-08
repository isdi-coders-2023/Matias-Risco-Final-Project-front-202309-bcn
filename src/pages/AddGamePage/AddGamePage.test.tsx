import { fireEvent, screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import AddGamePage from "./AddGamePage";
import userEvent from "@testing-library/user-event";

describe("Given the component HomePage", () => {
  describe("When HomePage it is render", () => {
    test("the user should see the heading of HomePage is Games", () => {
      const expetedText = "Add Game";
      const tag = "heading";

      customRender(<AddGamePage />, { isProvider: true, isMemoryRouter: true });

      const headingElement = screen.getByRole(tag, { name: expetedText });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When the component it is render and the user click on Add Game but there is no actionOnSubmit", () => {
    test("Then it should do nothing", async () => {
      const errorMessage = "Error in Adding Game";
      const succesMessage = "Succes in Adding Game";

      customRender(<AddGamePage />, {
        isMemoryRouter: true,
        isProvider: true,
        isToastify: true,
      });

      const inputElementName = screen.getByRole("textbox", {
        name: "Name:",
      }) as HTMLInputElement;

      await fireEvent.change(inputElementName, {
        target: {
          value: "Pepe",
        },
      });

      const inputElementImage = screen.getByRole("textbox", {
        name: "Image Url:",
      }) as HTMLInputElement;

      await fireEvent.change(inputElementImage, {
        target: {
          value: "https://i.ibb.co/PwP3KKr/Alien-Swarm.webp",
        },
      });

      const AddGameButton = screen.getByRole("button", {
        name: "Add Game",
      });

      await userEvent.click(AddGameButton);

      const tostifyErrorElement = screen.queryByText(errorMessage);
      const tostifySuccesElement = screen.queryByText(succesMessage);

      expect(tostifyErrorElement).not.toBeInTheDocument();
      expect(tostifySuccesElement).toBeInTheDocument();
    });
  });
});
