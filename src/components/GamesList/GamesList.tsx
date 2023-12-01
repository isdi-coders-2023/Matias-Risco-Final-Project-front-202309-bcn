import React from "react";
import { useAppSelector } from "../../store/hooks";

const GamesList = (): React.ReactElement => {
  const { games } = useAppSelector(({ gameState }) => gameState);
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}></li>
      ))}
    </ul>
  );
};

export default GamesList;
