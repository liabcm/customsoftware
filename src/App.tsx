import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Templates from './components/Templates';
import GlobalStyle from './GlobalStyle';

// Default theme
const defaultTheme = {
  primaryColor: '#3498db',
  secondaryColor: '#2c3e50',
  backgroundColor: '#f5f5f5',
  cardBackground: '#ecf0f1',
  textColor: '#333',
  fontFamily: "'Roboto', sans-serif",
};

const AppContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.textColor};
  min-height: 100vh;
  width: 100vw;
`;

const App = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const themes = {
    default: defaultTheme,
    dark: {
      primaryColor: '#1abc9c',
      secondaryColor: '#34495e',
      backgroundColor: '#2c3e50',
      cardBackground: '#34495e',
      textColor: '#ecf0f1',
      fontFamily: "'Montserrat', sans-serif",
    },
    vibrant: {
      primaryColor: '#e74c3c',
      secondaryColor: '#8e44ad',
      backgroundColor: '#fff',
      cardBackground: '#f1c40f',
      textColor: '#2c3e50',
      fontFamily: "'Poppins', sans-serif",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Header />
        <Templates setTheme={setTheme} themes={themes} />
        <Intro />
        <ContactForm />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
