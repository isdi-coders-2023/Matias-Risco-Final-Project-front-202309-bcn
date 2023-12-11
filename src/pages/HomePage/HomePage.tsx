import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import HomePageStyled from "./HomePageStyled";
import { loadGamesActionCreator } from "../../store/feature/games/gamesSlice";
import GamesList from "../../components/GamesList/GamesList";
import useGameApi from "../../hooks/useGameApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useSearchParams } from "react-router-dom";

const HomePage = (): React.ReactElement => {
  const [urlParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { getGamesApi } = useGameApi();
  const { games } = useAppSelector(({ gameState }) => gameState);
  const page = Number(urlParams.get("page")) || 0;

  useEffect(() => {
    (async () => {
      if (games.length >= 10 && page < 1) {
        return;
      }

      try {
        const gamesData = await getGamesApi(page);
        dispatch(loadGamesActionCreator(gamesData));
      } catch (error) {
        await toast.error("Error in loading page");
      }
    })();
  }, [dispatch, games.length, getGamesApi, page]);

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
