import { GameStructure } from "./types";

export const copyGame = ({
  plataforms,
  audience,
  languages,
  tags,
  ...baseGame
}: GameStructure): GameStructure => ({
  ...baseGame,
  tags: [...tags],
  languages: [...languages],
  audience: [...audience],
  plataforms: [...plataforms],
});

export const copyGames = (games: GameStructure[]) =>
  games.map((game) => copyGame(game));
