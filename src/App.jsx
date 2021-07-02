import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { Normalize } from 'styled-normalize';
import { GlobalStyles } from './styles/GlobalStyles.styles';
import { theme } from './config/theme';
import Router from './Router';
import { Wrapper } from './styles/App.styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyles />
      <Wrapper>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
