import { styled } from "styled-components";

const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px 0 134px;

  h1 {
    height: 51px;
    width: 150px;
    background-color: ${({ theme }) => theme.color.containerBackground};
    color: ${({ theme }) => theme.color.secondaryFont};
    text-align: center;
    align-self: center;
    padding: 6px 0;
    font-size: ${({ theme }) => theme.typography.titleSize};
  }

  .game-page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 36px;

    &__next,
    &__previous {
      text-decoration: none;
      color: ${({ theme }) => theme.color.navigationFont};
      background-color: ${({ theme }) => theme.color.backgroundNavigation};
      padding: 5px 10px;
      border-radius: 45px;
    }

    &__next {
      margin-left: auto;
    }
  }
`;

export default HomePageStyled;
