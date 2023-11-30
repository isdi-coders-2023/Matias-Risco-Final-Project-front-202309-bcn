import NavigationBarStyled from "./NavigationBarStyled";

const NavigationBar = (): React.ReactElement => (
  <NavigationBarStyled>
    <button className="button-icon">
      <img
        src=".\images\icon-home.webp"
        alt="icon of a home"
        width="48"
        height="48"
      />
      <h3>Home</h3>
    </button>
    <button className="button-icon">
      <img
        src=".\images\icon-user.webp"
        alt="icon of a user"
        width="48"
        height="48"
      />
      <h3>Login</h3>
    </button>
    <button className="button-icon">
      <img
        src=".\images\icon-plus.webp"
        alt="icon of a plus"
        width="48"
        height="48"
      />
      <h3>Add</h3>
    </button>
  </NavigationBarStyled>
);

export default NavigationBar;
