import { GameStructure } from "./types";

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
