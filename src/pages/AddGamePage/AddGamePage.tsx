import { useCallback } from "react";
import GameForm from "../../components/GameForm/GameForm";
import AddGamePageStyled from "./AddGamePageStyled";
import { useAppDispatch } from "../../store/hooks";
import { addGameActionCreator } from "../../store/feature/games/gamesSlice";
import { GameWithOutIdStructure } from "../../store/feature/games/types";
import useGameApi from "../../hooks/useGameApi";

const AddGamePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addGameApi } = useGameApi();

  const onSumbit = useCallback(
    async (game: GameWithOutIdStructure) => {
      const newGame = await addGameApi(game);

      dispatch(addGameActionCreator(newGame));
    },
    [addGameApi, dispatch],
  );

  return (
    <AddGamePageStyled>
      <h1>Add Game</h1>
      <GameForm title="New Game" actionOnSubmit={onSumbit} />
    </AddGamePageStyled>
  );
};

export default AddGamePage;
