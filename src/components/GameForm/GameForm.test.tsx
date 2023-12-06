import { fireEvent, screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import GameForm from "./GameForm";
import userEvent from "@testing-library/user-event";

describe("Given the component Form", () => {
  describe("When the component it is render", () => {
    test("Then there should be in screen a heading with 'New Game'", () => {
      const expectedText = "New Game";
      const expectedTag = "heading";

      customRender(<GameForm title="New Game" />, {
        isMemoryRouter: true,
        isProvider: true,
      });

      const imgElement = screen.getByRole(expectedTag, {
        name: expectedText,
      });

      expect(imgElement).toBeInTheDocument();
    });
  });

  describe("When the component it is render and the user click on Spanish", () => {
    test("Then checkbox with the accessibility name 'Spanish' should be true", async () => {
      const expectedText = "Spanish";
      const expectedTag = "checkbox";
      const expectedValue = true;

      customRender(<GameForm title="New Game" />);

      const checkElementSpanish = screen.getByRole(expectedTag, {
        name: expectedText,
      }) as HTMLInputElement;

      await userEvent.click(checkElementSpanish);

      expect(checkElementSpanish.checked).toBe(expectedValue);
    });
  });

  describe("When the component it is render and the user writes 'Pepe' on name", () => {
    test("Then input with the accessibility textbox 'Name:'", async () => {
      const expectedText = "Name:";
      const expectedTag = "textbox";
      const expectedValue = "Pepe";

      customRender(<GameForm title="New Game" />);

      const checkElementSpanish = screen.getByRole(expectedTag, {
        name: expectedText,
      }) as HTMLInputElement;

      await fireEvent.change(checkElementSpanish, {
        target: {
          value: "Pepe",
        },
      });

      expect(checkElementSpanish.value).toBe(expectedValue);
    });
  });

  describe("When the component it is render and the user click on Spanish which should be checked", () => {
    test("Then checkbox with the accessibility name 'Spanish' should be true", async () => {
      const expectedText = "Spanish";
      const expectedTag = "checkbox";
      const expectedValue = false;

      customRender(<GameForm title="New Game" />);

      const checkElementSpanish = screen.getByRole(expectedTag, {
        name: expectedText,
      }) as HTMLInputElement;

      await userEvent.click(checkElementSpanish);

      expect(checkElementSpanish.checked).toBe(!expectedValue);

      await userEvent.click(checkElementSpanish);

      expect(checkElementSpanish.checked).toBe(expectedValue);
    });
  });
});
