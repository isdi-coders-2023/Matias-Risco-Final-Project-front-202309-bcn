import { useCallback } from "react";
import GameForm from "../../components/GameForm/GameForm";
import AddGamePageStyled from "./AddGamePageStyled";
import { useAppDispatch } from "../../store/hooks";
import { addGameActionCreator } from "../../store/feature/games/GamesSlice";
import {
  GameStructure,
  GameWithOutIdStructure,
} from "../../store/feature/games/types";

const AddGamePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const onSumbit = useCallback(
    (game: GameWithOutIdStructure) => {
      const newGame: GameStructure = {
        ...game,
        id: Math.floor(Math.random() * 10000).toString(),
      };

      dispatch(addGameActionCreator(newGame));
    },
    [dispatch],
  );

  return (
    <AddGamePageStyled>
      <h1>Add Game</h1>
      <GameForm title="New Game" actionOnSubmit={onSumbit} />
    </AddGamePageStyled>
  );
};

export default AddGamePage;
