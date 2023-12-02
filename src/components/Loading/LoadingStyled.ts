import { styled } from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
  top: 0;
  height: 100vh;
  background-color: #2227;
  gap: 35px;

  .loading {
    &__image {
      animation: rotate-animation 10s infinite linear;

      @media (prefers-reduced-motion) {
        animation: none;
      }
    }
  }
  @keyframes rotate-animation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingStyled;
