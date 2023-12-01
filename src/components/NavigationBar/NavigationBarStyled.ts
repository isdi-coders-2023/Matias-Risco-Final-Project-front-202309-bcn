import { styled } from "styled-components";

const NavigationBarStyled = styled.nav`
  padding: 15px;
  background-color: ${({ theme }) => theme.color.backgroundNavigation};
  position: fixed;
  bottom: 0;
  width: 100vw;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .button-icon {
    width: 48px;
    height: 73.34px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.navigationFont};
  }
`;

export default NavigationBarStyled;
