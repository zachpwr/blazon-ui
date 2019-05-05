import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme';

const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);

  addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
}

configure(loadStories, module);
