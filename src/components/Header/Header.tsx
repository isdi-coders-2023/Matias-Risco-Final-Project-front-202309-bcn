import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => (
  <HeaderStyled title="valve Pipe">
    <img
      src="images\valveLogo.svg"
      alt="logo of valve"
      width="320"
      height="89"
      className="title-logo"
    />
  </HeaderStyled>
);

export default Header;
