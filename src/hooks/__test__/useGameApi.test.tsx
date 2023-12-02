import { renderHook } from "@testing-library/react";
import { copyGames } from "../../store/feature/games/utils";
import gamesMock from "../../mocks/gamesMockData";
import useGameApi from "../useGameApi";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../../store";

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
});
