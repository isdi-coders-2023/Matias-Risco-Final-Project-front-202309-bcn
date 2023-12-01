import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadGamesActionCreator } from "../../store/feature/games/GamesSlice";
import GamesList from "../../components/GamesList/GamesList";
import gamesData from "../../data/gamesData";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadGamesActionCreator(gamesData));
  }, [dispatch]);

  return (
    <HomePageStyled>
      <h1>Games</h1>
      <GamesList />
    </HomePageStyled>
  );
};

export default HomePage;
