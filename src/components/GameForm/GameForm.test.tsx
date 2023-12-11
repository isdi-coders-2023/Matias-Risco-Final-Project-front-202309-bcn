import { fireEvent, screen } from "@testing-library/react";
import customRender from "../../utils/customRender";
import GameForm from "./GameForm";
import userEvent from "@testing-library/user-event";
import { GameStructure } from "../../store/feature/games/types";
import { Route, Routes } from "react-router-dom";

const initialGame: GameStructure = {
  audience: [],
  difficulty: "Dark Souls",
  gameTime: "Average",
  graphics: "Bad",
  grind: "Average grind level",
  imageUrl: "https://i.ibb.co/PwP3KKr/Alien-Swarm.webp",
  languages: [],
  name: "Pepe",
  platforms: [],
  tags: [],
  id: "",
};

describe("Given the component Form", () => {
  describe("When the component it is render", () => {
    test("Then there should be in screen a heading with 'New Game'", () => {
      const expectedText = "New Game";
      const expectedTag = "heading";

      customRender(
        <Routes>
          <Route path="/" element={<GameForm title="New" buttonText="Add" />} />
        </Routes>,
        {
          isMemoryRouter: true,
          isProvider: true,
        },
      );

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

      customRender(
        <Routes>
          <Route path="/" element={<GameForm title="New" buttonText="Add" />} />
        </Routes>,
        { isMemoryRouter: true },
      );

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

      customRender(
        <Routes>
          <Route path="/" element={<GameForm title="New" buttonText="Add" />} />
        </Routes>,
        { isMemoryRouter: true },
      );

      const checkElementSpanish = screen.getByRole(expectedTag, {
        name: expectedText,
      }) as HTMLInputElement;

      await fireEvent.change(checkElementSpanish, {
        target: {
          value: expectedValue,
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

      customRender(
        <Routes>
          <Route path="/" element={<GameForm title="New" buttonText="Add" />} />
        </Routes>,
        { isMemoryRouter: true },
      );

      const checkElementSpanish = screen.getByRole(expectedTag, {
        name: expectedText,
      }) as HTMLInputElement;

      await userEvent.click(checkElementSpanish);

      expect(checkElementSpanish.checked).toBe(!expectedValue);

      await userEvent.click(checkElementSpanish);

      expect(checkElementSpanish.checked).toBe(expectedValue);
    });
  });

  describe("When the component it is render and the user click on Add Game", () => {
    test("Then it should call  object toast with the method succes", async () => {
      const expectedMessage = "Succes in Add Game";
      const actionOnSubmit = vitest.fn();

      customRender(
        <Routes>
          <Route
            path="/"
            element={
              <GameForm
                title="New"
                buttonText="Add"
                actionOnSubmit={actionOnSubmit}
                initialGame={initialGame}
              />
            }
          />
        </Routes>,
        {
          isMemoryRouter: true,
          isProvider: true,
          isToastify: true,
        },
      );

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

      const tostifyElement = await screen.findByText(expectedMessage);

      expect(tostifyElement).toBeInTheDocument();
    });
  });

  describe("When the component it is render and the user click on Add Game but there is a Error", () => {
    test("Then it should call  object toast with the method Error", async () => {
      const expectedMessage = "Error in Add Game";
      const actionOnSubmit = vitest.fn().mockImplementation(() => {
        throw new Error("error");
      });

      customRender(
        <GameForm
          title="New"
          buttonText="Add"
          actionOnSubmit={actionOnSubmit}
          initialGame={initialGame}
        />,
        {
          isMemoryRouter: true,
          isProvider: true,
          isToastify: true,
        },
      );

      const AddGameButton = screen.getByRole("button", {
        name: "Add Game",
      });

      await userEvent.click(AddGameButton);

      const tostifyElement = await screen.findByText(expectedMessage);

      expect(tostifyElement).toBeInTheDocument();
    });
  });

  describe("When the component it is render and the user click on Add Game but there is no actionOnSubmit", () => {
    test("Then it should do nothing", async () => {
      const errorMessage = "Error in Add Game";
      const succesMessage = "Succes in Add Game";

      customRender(
        <GameForm title="New" buttonText="Add" initialGame={initialGame} />,
        {
          isMemoryRouter: true,
          isProvider: true,
          isToastify: true,
        },
      );

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
      expect(tostifySuccesElement).not.toBeInTheDocument();
    });
  });
});
