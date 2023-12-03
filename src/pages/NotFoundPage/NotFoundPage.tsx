import React from "react";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => (
  <NotFoundPageStyled>
    <h1>Error</h1>
    <div className="error-container">
      <h3>Page not Found</h3>

      <p>Please go to homepage</p>

      <Button className="button--text">Homepage</Button>
    </div>
  </NotFoundPageStyled>
);

export default NotFoundPage;
