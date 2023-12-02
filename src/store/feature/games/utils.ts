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
