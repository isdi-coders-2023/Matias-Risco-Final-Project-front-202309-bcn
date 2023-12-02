import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadGamesActionCreator } from "../../store/feature/games/GamesSlice";
import GamesList from "../../components/GamesList/GamesList";
import useGameApi from "../../hooks/useGameApi";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getGamesApi } = useGameApi();

  useEffect(() => {
    (async () => {
      const gamesData = await getGamesApi();
      dispatch(loadGamesActionCreator(gamesData));
    })();
  }, [dispatch, getGamesApi]);

  return (
    <HomePageStyled>
      <h1>Games</h1>
      <GamesList />
    </HomePageStyled>
  );
};

export default HomePage;
