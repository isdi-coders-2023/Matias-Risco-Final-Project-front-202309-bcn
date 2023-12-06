import React from "react";
import {
  audience,
  difficulty,
  gameTime,
  graphics,
  grind,
  languages,
  platforms,
  tag,
} from "../../store/feature/games/types";
import GameFormStyled from "./GameFormStyled";
import Button from "../Button/Button";

const gameCheckedButtonOptions = (
  titleOfInputs: string,
  inputs: readonly string[],
): React.ReactElement => (
  <div className="game-form__input">
    <span>{titleOfInputs}: </span>
    <div className="inputs-container">
      {inputs.map((input) => (
        <div className="input-checked">
          <label htmlFor={input}>{input}</label>
          <input type="checkbox" name={input} id={input} />
        </div>
      ))}
    </div>
  </div>
);

const gameInputSelect = (
  titleOfInput: string,
  possibleInput: readonly string[],
): React.ReactElement => {
  const titleLowerCase = titleOfInput.toLowerCase();
  return (
    <div className="game-form__input">
      <label htmlFor={titleLowerCase}>{titleOfInput}: </label>
      <select
        name={titleLowerCase}
        id={titleLowerCase}
        className="input-select"
      >
        {possibleInput.map((input) => (
          <option value={input}>{input}</option>
        ))}
      </select>
    </div>
  );
};

interface GameFormParametersStructure {
  title: string;
}

const GameForm = ({
  title,
}: GameFormParametersStructure): React.ReactElement => (
  <GameFormStyled className="game-form">
    <h2>{title}</h2>
    <div className="game-form__input">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" className="input-text" />
    </div>
    {gameCheckedButtonOptions("Platforms", platforms)}
    {gameInputSelect("Difficulty", difficulty)}
    <div className="game-form__input">
      <label htmlFor="image-url">image url:</label>
      <input type="text" id="image-url" className="input-text" />
    </div>
    {gameCheckedButtonOptions("Languages", languages)}
    {gameInputSelect("Graphics", graphics)}
    {gameCheckedButtonOptions("Audience", audience)}
    {gameInputSelect("Grind", grind)}
    {gameInputSelect("Game Time", gameTime)}
    {gameCheckedButtonOptions("Tags", tag)}
    <Button className="button--text">Add Game</Button>
  </GameFormStyled>
);

export default GameForm;
