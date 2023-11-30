import { createGlobalStyle } from "styled-components";

const GlobalsStyled = createGlobalStyle`
*,
::after,
::before{
  box-sizing: border-box;
}

h1,
h2,
h3,
p,
body{
  padding:0;
  margin: 0;
}

button{
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  box-shadow: none;
  font-size: inherit;
  font-family: inherit;
}

ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

input{
  font-family: inherit;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
}

body{
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  color: ${({ theme }) => theme.color.mainFont};
  background-color: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.typography.propetySize};
  font-weight: 600;
}
`;

export default GlobalsStyled;
