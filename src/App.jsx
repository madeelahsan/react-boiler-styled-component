import React, { Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.min.css';
import '@reach/dialog/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';

import { LoadingContextProvider } from './context/loadingContext';
import GlobalStyles from './styles/GlobalStyles.styles';
import { StyledToastContainer } from './styles/App.styles';
import { theme } from './config/theme';
import Router from './Router';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LoadingContextProvider>
          <GlobalStyles />
          <BrowserRouter>
            <Suspense fallback="loading...">
              <Router />
            </Suspense>
          </BrowserRouter>
          <StyledToastContainer />
        </LoadingContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
