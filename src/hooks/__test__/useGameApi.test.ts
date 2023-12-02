import { renderHook } from "@testing-library/react";
import { copyGames } from "../../store/feature/games/utils";
import gamesMock from "../../mocks/gamesMockData";
import useGameApi from "../useGameApi";

describe("Given the hook useGameApi", () => {
  describe("When getGamesApi is call", () => {
    test("it should return a array of Games containg with info  of Ultrakill and Cady Crush", async () => {
      const expectedGames = copyGames(gamesMock);

      const {
        result: {
          current: { getGamesApi },
        },
      } = renderHook(useGameApi);

      const actualGames = await getGamesApi();

      expect(actualGames).toStrictEqual(expectedGames);
    });
  });
});
