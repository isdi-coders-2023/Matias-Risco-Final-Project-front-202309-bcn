import { styled } from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.backgroundHeader};
  justify-content: center;
  width: 100%;

  .title-logo {
    width: 100%;
    height: 27vw;
    max-width: 502px;
    max-height: 140px;
    background-color: ${({ theme }) => theme.color.mainFont};
  }
`;

export default HeaderStyled;
