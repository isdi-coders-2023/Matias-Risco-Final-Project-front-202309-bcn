import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): React.ReactElement => (
  <NavigationBarStyled>
    <ul>
      <li>
        <NavLink className="button-icon" to="/home">
          <img
            src="images/icon-home.webp"
            alt="button"
            width="48"
            height="48"
          />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="button-icon" to="/login">
          <img
            src="images/icon-user.webp"
            alt="button"
            width="48"
            height="48"
          />
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="button-icon" to="/add">
          <img
            src="images/icon-plus.webp"
            alt="button"
            width="48"
            height="48"
          />
          Add
        </NavLink>
      </li>
    </ul>
  </NavigationBarStyled>
);

export default NavigationBar;
