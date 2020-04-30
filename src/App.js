import React from 'react';
import Home from 'pages/Home';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import Theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
