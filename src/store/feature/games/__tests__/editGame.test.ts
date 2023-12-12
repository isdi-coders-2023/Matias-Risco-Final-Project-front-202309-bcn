import { GameWithPartialBodyStructure } from "../types";
import gamesReducer, {
  editGameActionCreator,
  initialGamesState,
  loadGamesActionCreator,
} from "../gamesSlice";
import gamesMock from "../../../../mocks/gamesMockData";

describe("Given the reducer of games", () => {
  describe("When the reducer recive the actualState and the action editGame with the info Ultrakill", () => {
    test("then it should return a newState with games updated", () => {
      const newGame: GameWithPartialBodyStructure = {
        name: "new Game",
        difficulty: "Dark Souls",
        gameTime: "Average",
        graphics: "Bad",
        grind: "Average grind level",
        id: gamesMock[1].id,
        imageUrl: "asdaf",
        languages: ["German", "Danish", "Dutch", "Finnish"],
        platforms: ["Linux"],
        tags: ["Action", "2D", "Early Access"],
      };

      const actualState = gamesReducer(
        initialGamesState,
        loadGamesActionCreator(gamesMock),
      );

      const actionAdd = editGameActionCreator(newGame);

      const newState = gamesReducer(actualState, actionAdd);

      expect(newState.games).toEqual(
        expect.arrayContaining([expect.objectContaining(newGame)]),
      );
    });
  });
});
