import GameForm from "../../components/GameForm/GameForm";
import AddGamePageStyled from "./AddGamePageStyled";
import { useCallback } from "react";
import { GameWithPartialIdStructure } from "../../store/feature/games/types";
import { useAppDispatch } from "../../store/hooks";
import useGameApi from "../../hooks/useGameApi";
import { addGameActionCreator } from "../../store/feature/games/gamesSlice";

const AddGamePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { addGameApi } = useGameApi();

  const onSumbit = useCallback(
    async (game: GameWithPartialIdStructure) => {
      delete game.id;
      const newGame = await addGameApi(game);

      dispatch(addGameActionCreator(newGame));
    },
    [addGameApi, dispatch],
  );
  window.scroll(0, 0);
  return (
    <AddGamePageStyled>
      <h1>Add Game</h1>
      <GameForm title="New" buttonText="Add" actionOnSubmit={onSumbit} />
    </AddGamePageStyled>
  );
};

export default AddGamePage;
