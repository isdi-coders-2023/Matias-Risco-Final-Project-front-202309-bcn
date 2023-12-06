import { renderHook } from "@testing-library/react";
import { copyGames } from "../../store/feature/games/utils";
import gamesMock from "../../mocks/gamesMockData";
import useGameApi from "../useGameApi";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import {
  GameStructure,
  GameWithOutIdStructure,
} from "../../store/feature/games/types";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";

describe("Given the hook useGameApi", () => {
  describe("When getGamesApi is call", () => {
    test("it should return a array of Games containg with info  of Ultrakill and Cady Crush", async () => {
      const expectedGames = copyGames(gamesMock);

      const {
        result: {
          current: { getGamesApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      const actualGames = await getGamesApi();

      expect(actualGames).toStrictEqual(expectedGames);
    });
  });

  describe("When addGameApi is call with the info of new game with out id", () => {
    test("it should return the info of the new game with id", async () => {
      const newGame: GameWithOutIdStructure = {
        name: "New Game",
        audience: ["Adults"],
        difficulty: "Dark Souls",
        gameTime: "Average",
        graphics: "Bad",
        grind: "Average grind level",
        imageUrl: "",
        languages: ["Danish"],
        platforms: ["VR"],
        tags: ["2D", "Action", "Adventure"],
      };

      const expectedGame: GameStructure = {
        ...newGame,
        id: expect.stringContaining("") as string,
      };

      const {
        result: {
          current: { addGameApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      const actualGames = await addGameApi(newGame);

      expect(actualGames).toStrictEqual(expectedGame);
    });
  });

  describe("When addGameApi is call with the info of new game with out id but there is Error", () => {
    test("it should return the info of the new game with id", async () => {
      server.use(...handlersError);
      const newGame: GameWithOutIdStructure = {
        name: "New Game",
        audience: ["Adults"],
        difficulty: "Dark Souls",
        gameTime: "Average",
        graphics: "Bad",
        grind: "Average grind level",
        imageUrl: "",
        languages: ["Danish"],
        platforms: ["VR"],
        tags: ["2D", "Action", "Adventure"],
      };
      let testError: string;
      const expectedError = "Error in adding the new game";

      const {
        result: {
          current: { addGameApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });
      try {
        await addGameApi(newGame);
        testError = "";
      } catch (error) {
        testError = (error as Error).message;
      }

      expect(testError).toBe(expectedError);
    });
  });
});
