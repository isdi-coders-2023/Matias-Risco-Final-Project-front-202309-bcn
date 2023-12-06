import { styled } from "styled-components";

const GameFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  align-items: start;
  background-color: ${({ theme }) => theme.color.containerBackground};
  border-radius: 45px;
  min-width: 305px;
  width: 85vw;
  max-width: 600px;
  justify-content: start;

  h2 {
    text-align: center;
    width: 100%;
    font-size: ${({ theme }) => theme.typography.titleSize};
  }

  .button {
    margin: auto;
  }
  .game-form {
    &__input {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
  .inputs-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: flex-start;
  }

  .input {
    &-text {
      width: 100%;
      padding: 9px 5px;
      border-radius: 15px;
      color: ${({ theme }) => theme.color.navigationFont};
    }
    &-select {
      width: 100%;
      padding: 9px 5px;
      border-radius: 15px;
      color: ${({ theme }) => theme.color.navigationFont};
    }

    &-checked {
      label {
        display: block;
        padding: 10px;
        background-color: ${({ theme }) => theme.color.background};
        border-radius: 45px;
        border: 4px solid ${({ theme }) => theme.color.background};

        &:has(> :checked) {
          border: 4px solid ${({ theme }) => theme.color.borderConteinerAprove};
        }
      }
      input {
        all: unset;
      }
    }
  }
`;

export default GameFormStyled;
