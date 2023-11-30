import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadGamesActionCreator } from "../../store/feature/games/GamesSlice";
import gamesMock from "../../mocks/gamesMockData";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadGamesActionCreator(gamesMock));
  }, [dispatch]);

  return (
    <HomePageStyled>
      <h1>Games</h1>
    </HomePageStyled>
  );
};

export default HomePage;
