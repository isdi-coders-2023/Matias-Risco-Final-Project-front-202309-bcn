import { initialGamesState, setGameMaxPageActionCreator } from "../gamesSlice";
import gamesReducer from "../gamesSlice";

describe("Given the reducer of games", () => {
  describe("When the reducer recive the actualState and the action setGameMaxPage with 5", () => {
    test("then it should return a newState with maxPage updated", () => {
      const expectedNumber = 5;
      const actualState = initialGamesState;
      const actionLoad = setGameMaxPageActionCreator(expectedNumber);

      const newState = gamesReducer(actualState, actionLoad);

      expect(newState.maxPage).toStrictEqual(expectedNumber);
    });
  });
});
