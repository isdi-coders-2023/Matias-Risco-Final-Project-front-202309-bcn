import { useCallback, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { type GameStructure } from "../../store/feature/games/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import GameForm from "../../components/GameForm/GameForm";
import usePageHooks from "../../hooks/usePageHooks";
import EditGamePageStyled from "./EditGamePageStyled";
import { initialGame } from "../../store/feature/games/utils";
import { editGameActionCreator } from "../../store/feature/games/gamesSlice";
import useGameApi from "../../hooks/useGameApi";

const EditGamePage = (): React.ReactElement => {
  const { idGame } = useParams<{ idGame: string }>();
  const { games } = useAppSelector(({ gameState }) => gameState);
  const [game, setGame] = useState(initialGame);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const { loadingGameByIdParams } = usePageHooks();
  const { editGame } = useGameApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadingGameByIdParams(idGame!, { games, setGame, setIsErrorLoading });
  }, [games, idGame, loadingGameByIdParams]);

  const onSumbit = useCallback(
    async (game: GameStructure) => {
      const gameEdited = await editGame(game);
      dispatch(editGameActionCreator(gameEdited));
    },
    [dispatch, editGame],
  );

  const isGame: boolean = game.id?.length !== 0;

  return (
    <EditGamePageStyled>
      <h1>Edit Game</h1>
      {isGame && (
        <GameForm
          title="Edit"
          buttonText="Modify"
          actionOnSubmit={onSumbit}
          initialGame={game}
        />
      )}
      {isErrorLoading && <Navigate to="/game/info-error" />}
    </EditGamePageStyled>
  );
};

export default EditGamePage;
