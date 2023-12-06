import React, { useState } from "react";
import {
  GameWithOutIdStructure,
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
import { toast } from "react-toastify";

const gameCheckedButtonOptions = (
  titleOfInputs: string,
  inputs: readonly string[],
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  values: string[],
): React.ReactElement => {
  const titleLowerCase = titleOfInputs.toLowerCase();
  return (
    <div className="game-form__input">
      <span>{titleOfInputs}: </span>
      <ul className="inputs-container">
        {inputs.map((input) => {
          const isChecked = values.includes(input);
          return (
            <li key={input} className="input-checked">
              <label htmlFor={input}>
                {input}
                <input
                  type="checkbox"
                  name={input}
                  id={input}
                  accept={titleLowerCase}
                  onChange={onChange}
                  checked={isChecked}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const gameInputSelect = (
  titleOfInput: string,
  possibleInput: readonly string[],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  propetyName: string,
): React.ReactElement => (
  <div className="game-form__input">
    <label htmlFor={propetyName}>{titleOfInput}: </label>
    <select
      name={propetyName}
      id={propetyName}
      className="input-select"
      onChange={onChange}
    >
      {possibleInput.map((input) => (
        <option key={input} value={input}>
          {input}
        </option>
      ))}
    </select>
  </div>
);

interface GameFormParametersStructure {
  title: string;
  actionOnSubmit?: (game: GameWithOutIdStructure) => void | Promise<void>;
}

const GameForm = ({
  title,
  actionOnSubmit,
}: GameFormParametersStructure): React.ReactElement => {
  const initialGame: GameWithOutIdStructure = {
    audience: [],
    difficulty: "Dark Souls",
    gameTime: "Average",
    graphics: "Bad",
    grind: "Average grind level",
    imageUrl: "",
    languages: [],
    name: "",
    platforms: [],
    tags: [],
  };

  const [newGame, setNewGame] = useState(initialGame);

  const onChangeInputsCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const details =
      newGame[
        event.target.accept as "platforms" | "languages" | "audience" | "tags"
      ];
    const propetyType = event.target.id as never;

    const index = details.indexOf(propetyType);
    let newDetails: string[];

    if (index === -1) {
      newDetails = [...details, propetyType];
    } else {
      [details[index], ...newDetails] = details;
    }

    setNewGame((newGame) => ({
      ...newGame,
      [event.target.accept]: newDetails,
    }));
  };

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setNewGame((newGame) => ({
      ...newGame,
      [event.target.id]: event.target.value,
    }));
  };

  const onSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!actionOnSubmit) {
      return;
    }

    try {
      await actionOnSubmit(newGame);
      toast.success("Succes in Adding Game");
    } catch {
      toast.error("Error in Adding Game");
    }
  };

  return (
    <GameFormStyled
      className="game-form"
      autoComplete="off"
      onSubmit={onSumbit}
    >
      <h2>{title}</h2>
      <div className="game-form__input">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="input-text"
          onChange={onChange}
          required
        />
      </div>
      {gameCheckedButtonOptions(
        "Platforms",
        platforms,
        onChangeInputsCheckBox,
        newGame.platforms,
      )}
      {gameInputSelect("Difficulty", difficulty, onChange, "difficulty")}
      <div className="game-form__input">
        <label htmlFor="imageUrl">image url:</label>
        <input
          type="text"
          id="imageUrl"
          className="input-text"
          onChange={onChange}
          required
        />
      </div>
      {gameCheckedButtonOptions(
        "Languages",
        languages,
        onChangeInputsCheckBox,
        newGame.languages,
      )}
      {gameInputSelect("Graphics", graphics, onChange, "graphics")}
      {gameCheckedButtonOptions(
        "Audience",
        audience,
        onChangeInputsCheckBox,
        newGame.audience,
      )}
      {gameInputSelect("Grind", grind, onChange, "grind")}
      {gameInputSelect("Game Time", gameTime, onChange, "gameTime")}
      {gameCheckedButtonOptions(
        "Tags",
        tag,
        onChangeInputsCheckBox,
        newGame.tags,
      )}
      <Button className="button--text">Add Game</Button>
    </GameFormStyled>
  );
};

export default GameForm;
