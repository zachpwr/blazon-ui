import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import ThemeProvider from '../src/themeProvider';
import GlobalStyle from '../src/globalStyle';

const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);

  addDecorator(story => (
    <ThemeProvider>
      <React.Fragment>
        <GlobalStyle />
        {story()}
      </React.Fragment>
    </ThemeProvider>
  ));
}

configure(loadStories, module);
