import { useCallback, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { type GameStructure } from "../../store/feature/games/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import GameForm from "../../components/GameForm/GameForm";
import usePageHooks from "../../hooks/usePageHooks";
import EditGamePageStyled from "./EditGamePageStyled";
import {
  copyGame,
  deleteUnchangePropetiesGame,
  initialGame,
} from "../../store/feature/games/utils";
import { editGameActionCreator } from "../../store/feature/games/gamesSlice";
import useGameApi from "../../hooks/useGameApi";

const EditGamePage = (): React.ReactElement => {
  const { idGame } = useParams<{ idGame: string }>();
  const { games } = useAppSelector(({ gameState }) => gameState);
  const [game, setGame] = useState(initialGame);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const { loadingGameByIdParams } = usePageHooks();
  const { editGameApi } = useGameApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadingGameByIdParams(idGame!, { games, setGame, setIsErrorLoading });
  }, [games, idGame, loadingGameByIdParams]);

  const onSubmit = useCallback(
    async (formGame: GameStructure) => {
      const gameOnlyChange = deleteUnchangePropetiesGame(
        game,
        copyGame(formGame),
      );
      const gameEdited = await editGameApi(gameOnlyChange);
      dispatch(editGameActionCreator(gameEdited));
    },
    [dispatch, editGameApi, game],
  );

  const isGame: boolean = game.id?.length !== 0;

  return (
    <EditGamePageStyled>
      <h1>Modify</h1>
      {isGame && (
        <GameForm
          title="Edit"
          buttonText="Modify"
          actionOnSubmit={onSubmit}
          initialGame={game}
        />
      )}
      {isErrorLoading && <Navigate to="/game/info-error" />}
    </EditGamePageStyled>
  );
};

export default EditGamePage;
