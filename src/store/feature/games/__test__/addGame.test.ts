import { GameStructure } from "../types";
import gamesReducer, {
  addGameActionCreator,
  initialGamesState,
  loadGamesActionCreator,
} from "../GamesSlice";
import gamesMock from "../../../../mocks/gamesMockData";

describe("Given the reducer of games", () => {
  describe("When the reducer recive the actualState and the action deleteGame with id of Ultrakill", () => {
    test("then it should return a newState with games updated", () => {
      const newGame: GameStructure = {
        name: "new Game",
        audience: [],
        difficulty: "Dark Souls",
        gameTime: "Average",
        graphics: "Bad",
        grind: "Average grind level",
        id: "1241asfay4w23",
        imageUrl: "",
        languages: [],
        platforms: [],
        tags: [],
      };
      const actualState = gamesReducer(
        initialGamesState,
        loadGamesActionCreator(gamesMock),
      );

      const actionAdd = addGameActionCreator(newGame);

      const newState = gamesReducer(actualState, actionAdd);

      expect(newState.games).toEqual(
        expect.arrayContaining([expect.objectContaining(newGame)]),
      );
    });
  });
});
