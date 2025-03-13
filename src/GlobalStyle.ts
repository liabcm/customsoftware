import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    line-height: 1.6;
    background-color: ${({ theme }) => theme.backgroundColor};
    width: 100vw;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
