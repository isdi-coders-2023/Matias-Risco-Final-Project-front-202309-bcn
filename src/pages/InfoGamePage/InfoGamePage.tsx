import { useParams } from "react-router-dom";
import InfoGamePageStyled from "./InfoGamePageStyled";
import { useAppSelector } from "../../store/hooks";
import { useMemo } from "react";
import GameInfo from "../../components/GameInfo/GameInfo";

const InfoGamePage = (): React.ReactElement => {
  const { idGame } = useParams<{ idGame: string }>();
  const { games } = useAppSelector(({ gameState }) => gameState);
  const game = useMemo(
    () => games.find(({ id }) => id === idGame),
    [games, idGame],
  );

  console.log(`--infoGamePage: ${idGame}`);

  return (
    <InfoGamePageStyled>
      <h1>Info Game</h1>
      {game && <GameInfo game={game} />}
    </InfoGamePageStyled>
  );
};

export default InfoGamePage;
