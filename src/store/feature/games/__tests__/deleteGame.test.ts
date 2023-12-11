import gamesMock from "../../../../mocks/gamesMockData";
import {
  deleteGameActionCreator,
  initialGamesState,
  loadGamesActionCreator,
} from "../gamesSlice";
import gamesReducer from "../gamesSlice";

describe("Given the reducer of games", () => {
  describe("When the reducer recive the actualState and the action deleteGame with id of Ultrakill", () => {
    test("then it should return a newState with games updated", () => {
      const ultrakill = gamesMock[0];
      const cadyCrash = gamesMock[1];
      const IdUltrakill = ultrakill.id;
      const actualState = gamesReducer(
        initialGamesState,
        loadGamesActionCreator(gamesMock),
      );

      const actionDelete = deleteGameActionCreator(IdUltrakill);

      const newState = gamesReducer(actualState, actionDelete);

      expect(newState.games).toEqual(
        expect.arrayContaining([
          expect.not.objectContaining(ultrakill),
          expect.objectContaining(cadyCrash),
        ]),
      );
    });
  });
});
