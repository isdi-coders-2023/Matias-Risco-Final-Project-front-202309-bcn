import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import {
  loadGamesActionCreator,
  setGamePageActionCreator,
} from "../../store/feature/games/gamesSlice";
import GamesList from "../../components/GamesList/GamesList";
import useGameApi from "../../hooks/useGameApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useSearchParams } from "react-router-dom";

const HomePage = (): React.ReactElement => {
  const [urlParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { getGamesApi } = useGameApi();
  const { games, page: pageGames } = useAppSelector(
    ({ gameState }) => gameState,
  );
  const page = Math.floor(Math.abs(Number(urlParams.get("page")))) || 0;

  useEffect(() => {
    (async () => {
      window.scroll(0, 0);
      console.log(`page ${page}`);
      console.log(`pageGames ${pageGames}`);
      if (games.length > 0 && page === pageGames) {
        return;
      }
      dispatch(setGamePageActionCreator(page));

      try {
        const gamesData = await getGamesApi(page);
        dispatch(loadGamesActionCreator(gamesData));
      } catch (error) {
        await toast.error("Error in loading page");
      }
    })();
  }, [pageGames, dispatch, games.length, getGamesApi, page]);

  return (
    <HomePageStyled>
      <h1>Games</h1>
      <GamesList />
      <div className="game-page">
        {page > 0 && (
          <NavLink
            to={`/home?page=${page - 1}`}
            className="game-page__previous"
          >
            Previous
          </NavLink>
        )}
        <NavLink
          to={`/home?page=${page < 1 ? 1 : page + 1}`}
          className="game-page__next"
        >
          Next
        </NavLink>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
