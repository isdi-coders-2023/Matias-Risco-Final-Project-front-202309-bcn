import React, { useCallback, useEffect, useState } from "react";
import {
  type GameStructure,
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
import { Navigate, useSearchParams } from "react-router-dom";

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
  propertyName: keyof GameStructure,
  initialGame: GameStructure,
): React.ReactElement => (
  <div className="game-form__input">
    <label htmlFor={propertyName}>{titleOfInput}: </label>
    <select
      name={propertyName}
      id={propertyName}
      className="input-select"
      onChange={onChange}
      defaultValue={initialGame[propertyName]}
      required
    >
      <option key="DEFAULT" value="" disabled>
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
  title: "New" | "Edit";
  buttonText: "Add" | "Modify";
  actionOnSubmit?: (game: GameStructure) => void | Promise<void>;
  initialGame?: GameStructure;
}

const GameForm = ({
  title,
  buttonText,
  actionOnSubmit,
  initialGame = {
    audience: [],
    difficulty: "" as "Easy",
    gameTime: "" as "Long",
    graphics: "" as "Bad",
    grind: "" as "Too much grind",
    imageUrl: "",
    languages: [],
    name: "",
    platforms: [],
    tags: [],
    id: "",
  },
}: GameFormParametersStructure): React.ReactElement => {
  const [newGame, setNewGame] = useState(initialGame);
  const [disable, setDisable] = useState(true);
  const [isRedirec, setIsRedirec] = useState(false);
  const [urlParams] = useSearchParams();
  const page = Number(urlParams.get("page")) || 0;

  useEffect(() => {
    const { name, imageUrl, difficulty, gameTime, graphics, grind } = newGame;
    setDisable(
      !(
        name &&
        imageUrl &&
        (difficulty as string) !== "" &&
        (gameTime as string) !== "" &&
        (graphics as string) !== "" &&
        (grind as string) !== ""
      ),
    );
  }, [newGame]);

  const onChangeInputsCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const property = event.target.value as
      | "platforms"
      | "languages"
      | "audience"
      | "tags";

    const details = newGame[property];
    const propertyType = event.target.name as never;

    const index = details.indexOf(propertyType);
    let newDetails: string[];

    if (index === -1) {
      newDetails = [...details, propertyType];
    } else {
      [details[index], ...newDetails] = details;
    }

    setNewGame((newGame) => ({
      ...newGame,
      [property]: newDetails,
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

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (actionOnSubmit === undefined) {
        return;
      }

      try {
        await actionOnSubmit(newGame);
        toast.success(`Succes in ${buttonText} Game`);
        setIsRedirec(true);
      } catch {
        toast.error(`Error in ${buttonText} Game`);
      }
    },
    [actionOnSubmit, buttonText, newGame],
  );

  return (
    <GameFormStyled
      className="game-form"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <h2>{title} Game</h2>
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
      {gameInputSelect(
        "Difficulty",
        difficulty,
        onChange,
        "difficulty",
        initialGame,
      )}
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
      {gameInputSelect("Graphics", graphics, onChange, "graphics", initialGame)}
      {gameCheckedButtonOptions(
        "Audience",
        audience,
        onChangeInputsCheckBox,
        newGame.audience,
      )}
      {gameInputSelect("Grind", grind, onChange, "grind", initialGame)}
      {gameInputSelect(
        "Game Time",
        gameTime,
        onChange,
        "gameTime",
        initialGame,
      )}
      {gameCheckedButtonOptions(
        "Tags",
        tag,
        onChangeInputsCheckBox,
        newGame.tags,
      )}
      <Button className="button--text" disable={disable}>
        {buttonText} Game
      </Button>
      {isRedirec && <Navigate to={`/home?page=${page}`} />}
    </GameFormStyled>
  );
};

export default GameForm;
