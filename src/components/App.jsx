import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyle';
import { Box } from './utils/Box';

export class App extends Component  {

  render() {
    return (
      <Box m="0 auto">
        <GlobalStyle />
      </Box>
    )
  }
}
