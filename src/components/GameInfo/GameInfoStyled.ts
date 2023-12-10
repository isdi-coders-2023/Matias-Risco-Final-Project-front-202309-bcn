import { styled } from "styled-components";

const GameInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17.5px;
  gap: 15px;
  align-items: center;
  background-color: ${({ theme }) => theme.color.containerBackground};
  border-radius: 25px;
  min-width: 305px;
  width: 85vw;
  max-width: 600px;

  .game-info {
    &__name {
      font-size: ${({ theme }) => theme.typography.titleSize};
    }

    &__image {
      min-width: 280px;
      width: 78vw;
      max-width: 551px;
      min-height: 131px;
      height: 37vw;
      max-height: 258px;
      object-fit: cover;
    }

    &__description-container {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 15px;
    }

    &__description {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 10px;
      align-items: start;
      font-size: ${({ theme }) => theme.typography.propetySize};
    }

    &__button {
      width: 84px;
      height: 77px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
      text-decoration: none;
      color: ${({ theme }) => theme.color.backgroundNavigation};
      font-size: ${({ theme }) => theme.typography.propetySize};
      font-weight: inherit;

      &-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        color: ${({ theme }) => theme.color.backgroundNavigation};
      }
    }
  }
`;

export default GameInfoStyled;
