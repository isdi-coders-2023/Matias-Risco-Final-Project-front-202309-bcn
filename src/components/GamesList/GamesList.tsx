import React from "react";
import { useAppSelector } from "../../store/hooks";
import GamesListStyled from "./GamesListStyled";

const GamesList = (): React.ReactElement => {
  const { games } = useAppSelector(({ gameState }) => gameState);
  return (
    <GamesListStyled>
      {games.map((game) => (
        <li key={game.id}></li>
      ))}
    </GamesListStyled>
  );
};

export default GamesList;
