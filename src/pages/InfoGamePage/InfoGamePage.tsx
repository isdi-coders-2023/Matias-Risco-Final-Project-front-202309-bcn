import { useParams } from "react-router-dom";
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
      }
    })();
  }, [games, idGame, infoGameApi]);

  return (
    <InfoGamePageStyled>
      <h1>Info Game</h1>
      {game?.id?.length && <GameInfo game={game} />}
    </InfoGamePageStyled>
  );
};

export default InfoGamePage;
