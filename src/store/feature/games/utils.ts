import { GameStructure, GameWithPartialBodyStructure } from "./types";

export const copyGame = ({
  platforms,
  audience,
  languages,
  tags,
  ...baseGame
}: GameStructure): GameStructure => ({
  ...baseGame,
  tags: [...tags],
  languages: [...languages],
  audience: [...audience],
  platforms: [...platforms],
});

export const copyGames = (games: GameStructure[]) =>
  games.map((game) => copyGame(game));

export const initialGame: GameStructure = {
  audience: [],
  difficulty: "" as "Easy",
  gameTime: "" as "Long",
  graphics: "" as "Bad",
  grind: "" as "Too much grind",
  imageUrl: "",
  languages: [],
  name: "",
  platforms: [],
  tags: [],
  id: "",
};

export const deleteUnchangePropetiesGame = (
  initialGame: GameStructure,
  editedGame: GameWithPartialBodyStructure,
): GameWithPartialBodyStructure => {
  Object.keys(editedGame)
    .filter(
      (propetie) =>
        JSON.stringify(initialGame[propetie as keyof GameStructure]) ===
        JSON.stringify(editedGame[propetie as keyof GameStructure]),
    )
    .forEach((propetie) => delete editedGame[propetie as keyof GameStructure]);

  if (editedGame["id"] !== undefined) {
    throw new Error("Error you are editing other game");
  }

  return { ...editedGame, id: initialGame.id };
};
