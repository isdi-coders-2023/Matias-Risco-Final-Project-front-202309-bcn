import React, { useEffect, useState } from "react";
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
          const id = input.replace(/\s/g, "").toLowerCase();
          return (
            <li key={id} className="input-checked">
              <label htmlFor={id}>
                {input}
                <input
                  type="checkbox"
                  name={input}
                  id={id}
                  value={titleLowerCase}
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
      defaultValue={"DEFAULT"}
      required
    >
      <option key="DEFAULT" value="DEFAULT" disabled>
        -- select an option --
      </option>
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
  initialGame?: GameWithOutIdStructure;
}

const GameForm = ({
  title,
  actionOnSubmit,
  initialGame = {
    audience: [],
    difficulty: "DEFAULT" as "Easy",
    gameTime: "DEFAULT" as "Long",
    graphics: "DEFAULT" as "Bad",
    grind: "DEFAULT" as "Too much grind",
    imageUrl: "",
    languages: [],
    name: "",
    platforms: [],
    tags: [],
  },
}: GameFormParametersStructure): React.ReactElement => {
  const [newGame, setNewGame] = useState(initialGame);
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    const { name, imageUrl, difficulty, gameTime, graphics, grind } = newGame;
    setDisable(
      !(
        name &&
        imageUrl &&
        (difficulty as string) !== "DEFAULT" &&
        (gameTime as string) !== "DEFAULT" &&
        (graphics as string) !== "DEFAULT" &&
        (grind as string) !== "DEFAULT"
      ),
    );
  }, [newGame]);

  const onChangeInputsCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const propety = event.target.value as
      | "platforms"
      | "languages"
      | "audience"
      | "tags";

    const details = newGame[propety];
    const propetyType = event.target.name as never;

    const index = details.indexOf(propetyType);
    let newDetails: string[];

    if (index === -1) {
      newDetails = [...details, propetyType];
    } else {
      [details[index], ...newDetails] = details;
    }

    setNewGame((newGame) => ({
      ...newGame,
      [propety]: newDetails,
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
          value={newGame.name}
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
        <label htmlFor="imageUrl">Image Url:</label>
        <input
          type="url"
          id="imageUrl"
          className="input-text"
          onChange={onChange}
          required
          value={newGame.imageUrl}
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
      <Button className="button--text" disable={disable}>
        Add Game
      </Button>
    </GameFormStyled>
  );
};

export default GameForm;
