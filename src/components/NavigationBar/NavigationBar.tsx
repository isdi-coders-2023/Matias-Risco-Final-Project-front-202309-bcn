import { NavLink, useLocation } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";
import { useAppSelector } from "../../store/hooks";

const NavigationBar = (): React.ReactElement => {
  const { pathname } = useLocation();
  const { maxPage } = useAppSelector(({ gameState }) => gameState);

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
