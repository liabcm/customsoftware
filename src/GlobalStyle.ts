import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset & base styling */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.textColor};
    line-height: 1.6;
  }
  
  a {
    color: ${({ theme }) => theme.primaryColor};
    transition: color 0.3s ease;
    text-decoration: none;
  }
  
  a:hover {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;

export default GlobalStyle;
