import { styled } from "styled-components";

const EditGamePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px 0 134px;

  h1 {
    height: 50px;
    width: 180px;
    background-color: ${({ theme }) => theme.color.containerBackground};
    color: ${({ theme }) => theme.color.secondaryFont};
    text-align: center;
    align-self: center;
    padding: 6px 15px;
    font-size: ${({ theme }) => theme.typography.titleSize};
  }
`;

export default EditGamePageStyled;
