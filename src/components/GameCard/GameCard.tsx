import React from "react";
import { GameStructure } from "../../store/feature/games/types";
import GameCardStyled from "./GameCardStyled";

interface GameCardParamsStructure {
  game: GameStructure;
}

const PropetiesToShortDescription = (propeties: string[]): string =>
  propeties.length > 2
    ? `${propeties[0]}, ${propeties[1]}, ${propeties.length - 2} more...`
    : propeties.join(", ");

const GameCard = ({
  game: { name, platforms: plataforms, difficulty, languages, imageUrl },
}: GameCardParamsStructure): React.ReactElement => {
  return (
    <GameCardStyled className="game-card">
      <h2 className="game-card__name">{name}</h2>
      <img
        className="game-card__image"
        src={imageUrl}
        alt={`game ${name}`}
        width="280"
        height="131"
      />
      <div className="game-card__description-container">
        <div className="game-card__description">
          <span>Plataforms: </span>
          <span>{PropetiesToShortDescription(plataforms)}</span>
        </div>
        <div className="game-card__description">
          <span>Difficulty: </span>
          <span>{difficulty}</span>
        </div>
        <div className="game-card__description">
          <span>Languages: &nbsp;</span>
          <span>{PropetiesToShortDescription(languages)}</span>
        </div>
      </div>
    </GameCardStyled>
  );
};

export default GameCard;
