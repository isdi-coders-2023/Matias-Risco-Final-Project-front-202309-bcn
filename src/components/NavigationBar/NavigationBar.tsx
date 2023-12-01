import { NavLink } from "react-router-dom";
import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): React.ReactElement => (
  <NavigationBarStyled>
    <ul>
      <li>
        <NavLink className="button-icon" to="/home">
          <img
            src="public/images/icon-home.svg"
            alt="link"
            width="48"
            height="48"
          />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="button-icon" to="/login">
          <img
            src="public/images/icon-user.svg"
            alt="link"
            width="48"
            height="48"
          />
          Login
        </NavLink>
      </li>
      <li>
        <NavLink className="button-icon" to="/add">
          <img
            src="public/images/icon-plus.svg"
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

export default NavigationBar;
