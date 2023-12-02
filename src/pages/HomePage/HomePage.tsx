import { useEffect } from "react";
import { useAppDispatch } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadGamesActionCreator } from "../../store/feature/games/GamesSlice";
import GamesList from "../../components/GamesList/GamesList";
import useGameApi from "../../hooks/useGameApi";
import { ToastContainer, toast } from "react-toastify";
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
        toast.error("Error in loading page");
      }
    })();
  }, [dispatch, getGamesApi]);

  return (
    <HomePageStyled>
      <h1>Games</h1>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />
      <GamesList />
    </HomePageStyled>
  );
};

export default HomePage;
