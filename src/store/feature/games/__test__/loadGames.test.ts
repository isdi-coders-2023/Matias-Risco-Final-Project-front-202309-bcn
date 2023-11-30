import gamesMock from "../../../../mocks/gamesMockData";
import { initialGamesState, loadGamesActionCreator } from "../GamesSlice";
import { copyGame } from "../utils";
import gamesReducer from "../GamesSlice";

describe("Given the reducer of games", () => {
  describe("When the reducer recive the actualState and the action loadGames with games", () => {
    test("then it should return a newState with games updated", () => {
      const gamesApi = gamesMock.map((game) => copyGame(game));
      const actualState = initialGamesState;
      const actionLoad = loadGamesActionCreator(gamesApi);

      const newState = gamesReducer(actualState, actionLoad);

      expect(newState.games).toStrictEqual(gamesApi);
    });
  });
});
