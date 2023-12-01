import { GameStructure } from "./types";

export const copyGame = ({
  platforms: plataforms,
  audience,
  languages,
  tags,
  ...baseGame
}: GameStructure): GameStructure => ({
  ...baseGame,
  tags: [...tags],
  languages: [...languages],
  audience: [...audience],
  platforms: [...plataforms],
});

export const copyGames = (games: GameStructure[]) =>
  games.map((game) => copyGame(game));
