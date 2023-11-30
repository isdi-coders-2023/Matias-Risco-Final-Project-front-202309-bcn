import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundHeader};
  justify-content: center;

  .title-logo {
    width: 100%;
    height: 27.740625vw;
    max-width: 502px;
    max-height: 140px;
    background-color: ${({ theme }) => theme.color.mainFont};
  }
`;

export default HeaderStyled;
