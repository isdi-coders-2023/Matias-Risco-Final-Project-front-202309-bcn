import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => (
  <HeaderStyled>
    <img
      src="./images/valveLogo.svg"
      alt="logo of valve"
      width="320"
      height="88.77"
      className="title-logo"
    />
  </HeaderStyled>
);

export default Header;
