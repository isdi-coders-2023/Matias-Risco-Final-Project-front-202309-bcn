import React from "react";
import NotFoundPageStyled from "./NotFoundPageStyled";
import { NavLink } from "react-router-dom";

const NotFoundPage = (): React.ReactElement => (
  <NotFoundPageStyled>
    <h1>Error</h1>
    <div className="error-container">
      <h2>Page not Found</h2>

      <p>Please go to homepage</p>

      <NavLink className="button--text" to="/home">
        Homepage
      </NavLink>
    </div>
  </NotFoundPageStyled>
);

export default NotFoundPage;
