import React from "react";
import { GameStructure } from "../../store/feature/games/types";
import GameCardStyled from "./GameCardStyled";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

interface GameCardParamsStructure {
  game: GameStructure;
}

const PropetiesToShortDescription = (propeties: string[]): string =>
  propeties.length > 2
    ? `${propeties[0]}, ${propeties[1]}, ${propeties.length - 2} more...`
    : propeties.join(", ");

const GameCard = ({
  game: { name, platforms: plataforms, difficulty, languages, imageUrl, id },
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
      <div className="game-card__button-container">
        <NavLink to={`games/info/${id}`} className="game-card__button">
          <img src="images/icon-info.svg" alt="button" width="48" height="48" />
          Info
        </NavLink>
        <NavLink to={`games/edit/${id}`} className="game-card__button">
          <img src="images/icon-edit.svg" alt="button" width="48" height="48" />
          Edit
        </NavLink>
        <Button className="game-card__button">
          <img
            src="images/icon-trash.svg"
            alt="button"
            width="48"
            height="48"
          />
          Eliminate
        </Button>
      </div>
    </GameCardStyled>
  );
};

export default GameCard;
