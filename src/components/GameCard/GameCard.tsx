import React, { useCallback } from "react";
import { GameStructure } from "../../store/feature/games/types";
import GameCardStyled from "./GameCardStyled";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteGameActionCreator } from "../../store/feature/games/gamesSlice";
import useGameApi from "../../hooks/useGameApi";
import { toast } from "react-toastify";

interface GameCardParamsStructure {
  game: GameStructure;
}

const propertiesToShortDescription = (properties: string[]): string => {
  const [firstTag, secondTag, ...restTags] = properties;

  return properties.length > 2
    ? `${firstTag}, ${secondTag}, ${restTags.length} more...`
    : properties.join(", ");
};

const GameCard = ({
  game: { name, platforms: plataforms, difficulty, languages, imageUrl, id },
}: GameCardParamsStructure): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { deleteGameApi } = useGameApi();
  const { page } = useAppSelector(({ gameState }) => gameState);

  const deleteAction = useCallback(async () => {
    try {
      await deleteGameApi(id);
      dispatch(deleteGameActionCreator(id));
      await toast.success("Succes in delete game");
    } catch {
      await toast.error("Error in delete game");
    }
  }, [deleteGameApi, dispatch, id]);

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
          <span>{propertiesToShortDescription(plataforms)}</span>
        </div>
        <div className="game-card__description">
          <span>Difficulty: </span>
          <span>{difficulty}</span>
        </div>
        <div className="game-card__description">
          <span>Languages: &nbsp;</span>
          <span>{propertiesToShortDescription(languages)}</span>
        </div>
      </div>
      <div className="game-card__button-container">
        <NavLink to={`/game/info/${id}`} className="game-card__button">
          <img
            src="/images/icon-info.svg"
            alt="button"
            width="48"
            height="48"
          />
          Info
        </NavLink>
        <NavLink
          to={`/game/edit/${id}?page=${page}`}
          className="game-card__button"
        >
          <img
            src="/images/icon-edit.svg"
            alt="button"
            width="48"
            height="48"
          />
          Edit
        </NavLink>
        <Button className="button--icon" onClick={deleteAction}>
          <img
            src="/images/icon-trash.svg"
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
