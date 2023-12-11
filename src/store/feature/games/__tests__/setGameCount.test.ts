import gamesMock from "../../../../mocks/gamesMockData";
import { initialGamesState, setGameCountActionCreator } from "../gamesSlice";
import gamesReducer from "../gamesSlice";

describe("Given the reducer of games", () => {
  describe("When the reducer recive the actualState and the action setGameCount with 5", () => {
    test("then it should return a newState with countGames updated", () => {
      const expectedNumber = gamesMock.length;
      const actualState = initialGamesState;
      const actionLoad = setGameCountActionCreator(expectedNumber);

      const newState = gamesReducer(actualState, actionLoad);

      expect(newState.countGames).toStrictEqual(expectedNumber);
    });
  });
});
