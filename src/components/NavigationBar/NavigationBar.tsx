import { NavLink, useLocation } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
import { useEffect, useState } from "react";
import useGameApi from "../../hooks/useGameApi";
import { toast } from "react-toastify";

const NavigationBar = (): React.ReactElement => {
  const [pageGames, setPageGames] = useState(0);
  const { pathname } = useLocation();
  const { countGameApi } = useGameApi();

  useEffect(() => {
    (async () => {
      try {
        const totalGames = await countGameApi();

        setPageGames(Math.floor(totalGames / 10) + 1);
      } catch {
        toast.error("Problems in counting number of games");
      }
    })();
  }, [countGameApi, setPageGames]);

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
            to={`/game/add?page=${pageGames}`}
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
