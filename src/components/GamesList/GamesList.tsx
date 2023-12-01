import React from "react";
import { useAppSelector } from "../../store/hooks";
import GamesListStyled from "./GamesListStyled";
import GameCard from "../GameCard/GameCard";

const GamesList = (): React.ReactElement => {
  const { games } = useAppSelector(({ gameState }) => gameState);
  return (
    <GamesListStyled>
      {games.map((game) => (
        <li key={game.id}>
          <GameCard game={game} />
        </li>
      ))}
    </GamesListStyled>
  );
};

export default GamesList;
