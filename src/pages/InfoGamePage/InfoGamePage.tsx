import { Navigate, useParams } from "react-router-dom";
import InfoGamePageStyled from "./InfoGamePageStyled";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import GameInfo from "../../components/GameInfo/GameInfo";
import useGameApi from "../../hooks/useGameApi";
import { GameStructure } from "../../store/feature/games/types";
import { toast } from "react-toastify";

const initialGame: GameStructure = {
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
};

const InfoGamePage = (): React.ReactElement => {
  const { idGame } = useParams<{ idGame: string }>();
  const { games } = useAppSelector(({ gameState }) => gameState);
  const { infoGameApi } = useGameApi();
  const [game, setGame] = useState(initialGame);
  const [isErrorLoading, setIsErrorLoading] = useState(false);

  useEffect(() => {
    (async () => {
      let newGame = games.find(({ id }) => id === idGame);
      console.log(idGame);
      if (newGame) {
        setGame(newGame);
        return;
      }

      try {
        newGame = await infoGameApi(idGame!);
        setGame(newGame);
      } catch (error) {
        toast.error("Error game not found");
        setIsErrorLoading(true);
      }
    })();
  }, [games, idGame, infoGameApi]);

  const isGame: boolean = game.id?.length !== 0;

  return (
    <InfoGamePageStyled>
      <h1>Info Game</h1>
      {isGame && <GameInfo game={game} />}
      {isErrorLoading && <Navigate to="/game/info-error" />}
    </InfoGamePageStyled>
  );
};

export default InfoGamePage;
