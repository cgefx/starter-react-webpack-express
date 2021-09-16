import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyle } from './style';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}
