import { initialGamesState, setGamePageActionCreator } from "../gamesSlice";
import gamesReducer from "../gamesSlice";

describe("Given the reducer of games", () => {
  describe("When the reducer recive the actualState and the action setGamePage with 5", () => {
    test("then it should return a newState with countGames updated", () => {
      const expectedNumber = 5;
      const actualState = initialGamesState;
      const actionLoad = setGamePageActionCreator(expectedNumber);

      const newState = gamesReducer(actualState, actionLoad);

      expect(newState.page).toStrictEqual(expectedNumber);
    });
  });
});
