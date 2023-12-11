import { renderHook } from "@testing-library/react";
import { copyGame, copyGames } from "../../store/feature/games/utils";
import gamesMock from "../../mocks/gamesMockData";
import useGameApi from "../useGameApi";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";
import {
  GameStructure,
  GameWithOutIdStructure,
  GameWithPartialBodyStructure,
} from "../../store/feature/games/types";
import { server } from "../../mocks/main";
import { handlersError } from "../../mocks/handlersError";
import { setupStore } from "../../utils/setUpStore";

describe("Given the hook useGameApi", () => {
  describe("When getGamesApi is call", () => {
    test("it should return a array of Games containg with info  of Ultrakill and Cady Crush", async () => {
      const expectedGames = copyGames([gamesMock[0], gamesMock[1]]);

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

      expect(actualGames).toEqual(expect.objectContaining(expectedGames));
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

  describe("When infoGameApi is call with id not in the database in the url", () => {
    test("it should return a Error", async () => {
      server.use(...handlersError);
      const ultrakill = gamesMock[0];
      let testError: string = "";
      const expectedError = "Error game not found";
      const testStore = setupStore({ gameState: { games: [], countGames: 0 } });

      const {
        result: {
          current: { infoGameApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={testStore}>{children}</Provider>
        ),
      });

      try {
        await infoGameApi(ultrakill.id);
      } catch (error) {
        testError = (error as Error).message;
      }

      expect(testError).toBe(expectedError);
    });
  });

  describe("When infoGameApi is call with id of Ultrakill in the url", () => {
    test("it should return a Game containg with info  of Ultrakill", async () => {
      const ultrakill = gamesMock[0];
      const testStore = setupStore({
        gameState: { games: copyGames(gamesMock), countGames: 0 },
      });

      const {
        result: {
          current: { infoGameApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={testStore}>{children}</Provider>
        ),
      });

      const actualGame = await infoGameApi(ultrakill.id);

      expect(actualGame).toStrictEqual(ultrakill);
    });
  });

  describe("When editGameApi is call with id of Ultrakill in the url", () => {
    test("it should return a Game containg with edit  of Ultrakill", async () => {
      const ultrakill = copyGame(gamesMock[0]) as GameWithPartialBodyStructure;

      const testStore = setupStore({
        gameState: { games: copyGames(gamesMock), countGames: 0 },
      });

      delete ultrakill.audience;
      delete ultrakill.difficulty;
      delete ultrakill.imageUrl;

      ultrakill.graphics = "MS-DOS";

      const {
        result: {
          current: { editGameApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={testStore}>{children}</Provider>
        ),
      });

      const actualGame = await editGameApi(ultrakill);

      expect(actualGame).toEqual(expect.objectContaining(ultrakill));
    });
  });

  describe("When editGameApi is call with id of Ultrakill in the url but there is a error", () => {
    test("it should throw a Error", async () => {
      server.use(...handlersError);
      const expectedError = "Error game not found";
      const ultrakill = copyGame(gamesMock[0]) as GameWithPartialBodyStructure;

      const testStore = setupStore({
        gameState: { games: copyGames(gamesMock), countGames: 0 },
      });

      delete ultrakill.audience;
      delete ultrakill.difficulty;
      delete ultrakill.imageUrl;

      ultrakill.graphics = "MS-DOS";

      const {
        result: {
          current: { editGameApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={testStore}>{children}</Provider>
        ),
      });
      let actualError: Error = {} as Error;

      try {
        await editGameApi(ultrakill);
      } catch (error) {
        actualError = error as Error;
      }

      expect(actualError).toEqual(
        expect.objectContaining({ message: expectedError }),
      );
    });
  });

  describe("When countGameApi is call", () => {
    test("then it should return", async () => {
      const expectedNumber = gamesMock.length;

      const {
        result: {
          current: { countGameApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });

      const number = await countGameApi();

      expect(number).toEqual(expectedNumber);
    });
  });

  describe("When countGameApi is call but there is a error", () => {
    test("then it throw a error", async () => {
      server.use(...handlersError);
      const expectedError = "Error can't count number of games";

      const {
        result: {
          current: { countGameApi },
        },
      } = renderHook(useGameApi, {
        wrapper: ({ children }: PropsWithChildren) => (
          <Provider store={store}>{children}</Provider>
        ),
      });
      let actualError: Error = {} as Error;

      try {
        await countGameApi();

        await new Promise((res) => {
          setTimeout(res, 50);
        });
      } catch (error) {
        actualError = error as Error;
      }

      expect(actualError).toEqual(
        expect.objectContaining({ message: expectedError }),
      );
    });
  });
});
