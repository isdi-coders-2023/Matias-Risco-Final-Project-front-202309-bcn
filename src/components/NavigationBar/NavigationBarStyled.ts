import { styled } from "styled-components";

const NavigationBarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background-color: ${({ theme }) => theme.color.backgroundNavigation};

  .button-icon {
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
  }
`;

export default NavigationBarStyled;
