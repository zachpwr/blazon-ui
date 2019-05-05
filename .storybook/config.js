import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import ThemeProvider from '../src/themeProvider';

const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);

  addDecorator(story => <ThemeProvider>{story()}</ThemeProvider>);
}

configure(loadStories, module);
