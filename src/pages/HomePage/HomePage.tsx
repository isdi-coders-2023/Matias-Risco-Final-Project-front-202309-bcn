import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadGamesActionCreator } from "../../store/feature/games/gamesSlice";
import GamesList from "../../components/GamesList/GamesList";
import useGameApi from "../../hooks/useGameApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getGamesApi } = useGameApi();

  useEffect(() => {
    (async () => {
      try {
        const gamesData = await getGamesApi();
        dispatch(loadGamesActionCreator(gamesData));
      } catch (error) {
        await toast.error("Error in loading page");
      }
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
