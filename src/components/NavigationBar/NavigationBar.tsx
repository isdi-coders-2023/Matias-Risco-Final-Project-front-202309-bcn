import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): React.ReactElement => (
  <NavigationBarStyled>
    <button className="button-icon">
      <img src="images/icon-home.webp" alt="button" width="48" height="48" />
      Home
    </button>
    <button className="button-icon">
      <img src="images/icon-user.webp" alt="button" width="48" height="48" />
      Login
    </button>
    <button className="button-icon">
      <img src="images/icon-plus.webp" alt="button" width="48" height="48" />
      Add
    </button>
  </NavigationBarStyled>
);

export default NavigationBar;
