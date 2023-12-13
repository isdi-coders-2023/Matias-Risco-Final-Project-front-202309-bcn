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
  const { page: pageGames } = useAppSelector(({ gameState }) => gameState);
  const { maxPage } = useAppSelector(({ gameState }) => gameState);
  const page = Math.min(
    Math.floor(Math.max(0, Number(urlParams.get("page")))) || 1,
    maxPage,
  );

  useEffect(() => {
    window.scroll(0, 0);
    if (page === pageGames) {
      return;
    }

    dispatch(setGamePageActionCreator(page));
  }, [dispatch, maxPage, page, pageGames]);

  useEffect(() => {
    (async () => {
      if (page === pageGames) {
        return;
      }

      try {
        const gamesData = await getGamesApi(page - 1);
        dispatch(loadGamesActionCreator(gamesData));
      } catch (error) {
        await toast.error("Error in loading page");
      }
    })();
  }, [dispatch, getGamesApi, page, pageGames]);

  return (
    <HomePageStyled>
      <h1>Games</h1>
      <GamesList />
      <div className="game-page">
        {page > 1 && (
          <NavLink
            to={`/home?page=${page - 1}`}
            className="game-page__previous"
          >
            Previous
          </NavLink>
        )}
        {page < maxPage && (
          <NavLink
            to={`/home?page=${page < 2 ? 2 : page + 1}`}
            className="game-page__next"
          >
            Next
          </NavLink>
        )}
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
