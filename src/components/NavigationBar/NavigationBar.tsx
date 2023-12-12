import { NavLink, useLocation } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
import { useEffect } from "react";
import useGameApi from "../../hooks/useGameApi";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setGameMaxPageActionCreator } from "../../store/feature/games/gamesSlice";

const NavigationBar = (): React.ReactElement => {
  const { pathname } = useLocation();
  const { countGameApi } = useGameApi();
  const dispatch = useAppDispatch();
  const { maxPage } = useAppSelector(({ gameState }) => gameState);

  useEffect(() => {
    (async () => {
      try {
        const totalGames = await countGameApi();
        dispatch(setGameMaxPageActionCreator(Math.floor(totalGames / 10) + 1));
      } catch {
        toast.error("Problems in counting number of games");
      }
    })();
  }, [countGameApi, dispatch]);

  return (
    <NavigationBarStyled>
      <ul>
        <li>
          <NavLink
            className={`button-icon ${
              pathname === "/home" ? "button-icon--active" : ""
            }`}
            to="/home"
          >
            <img
              src="/images/icon-home.svg"
              alt="link"
              width="48"
              height="48"
            />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`button-icon ${
              pathname === "/login" ? "button-icon--active" : ""
            }`}
            to="/login"
          >
            <img
              src="/images/icon-user.svg"
              alt="link"
              width="48"
              height="48"
            />
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`button-icon ${
              pathname === "/game/add" ? "button-icon--active" : ""
            }`}
            to={`/game/add?page=${maxPage}`}
          >
            <img
              src="/images/icon-plus.svg"
              alt="link"
              width="48"
              height="48"
            />
            Add
          </NavLink>
        </li>
      </ul>
    </NavigationBarStyled>
  );
};

export default NavigationBar;
