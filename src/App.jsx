import React from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import GlobalStyles from './styles/GlobalStyles.styles';
import { StyledToastContainer, Wrapper } from './styles/App.styles';
import { theme } from './config/theme';
import Router from './Router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Wrapper>
      </ThemeProvider>
      <StyledToastContainer />
    </>
  );
}

export default App;
