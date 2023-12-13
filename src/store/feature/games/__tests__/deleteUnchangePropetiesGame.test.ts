import gamesMock from "../../../../mocks/gamesMockData";
import { GameWithPartialBodyStructure } from "../types";
import { copyGame, deleteUnchangePropetiesGame } from "../utils";

describe("Given the function deleteUnchangePropetiesGame", () => {
  describe("When it is call with a game ultrakill and the same game but edited", () => {
    test("Then it should return game with the id of ultrakill and info tags", () => {
      const ultrakill = gamesMock[0];
      const ultrakillEdited: GameWithPartialBodyStructure = copyGame(ultrakill);

      delete ultrakillEdited.languages;
      ultrakillEdited.tags = ["Anime", "3D", "Action"];

      const expectedUltrakill: GameWithPartialBodyStructure = {
        id: ultrakillEdited.id,
        tags: ultrakillEdited.tags,
      };

      const actualUltrakill = deleteUnchangePropetiesGame(
        ultrakill,
        ultrakillEdited,
      );

      expect(actualUltrakill).toStrictEqual(expectedUltrakill);
    });
  });

  describe("When it is call with a game ultrakill and the game CadyCrash", () => {
    test("Then it should throw a Error with message 'Error you are editing other game'", () => {
      const ultrakill = gamesMock[0];
      const candyCrush = gamesMock[1];
      const expectedError = "Error you are editing other game";

      let errorMessage: string = "";

      try {
        deleteUnchangePropetiesGame(ultrakill, candyCrush);
      } catch (error) {
        errorMessage = (error as Error).message;
      }

      expect(errorMessage).toBe(expectedError);
    });
  });
});
