import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';

import ThemeProvider from '../src/themeProvider';
import GlobalStyle from '../src/globalStyle';

import storybookTheme from './theme';

// Load home page separately
import '../stories/home.stories.tsx';

const req = require.context('../stories', true, /\.stories\.tsx$/);

addParameters({
  options: {
    theme: storybookTheme,
    showPanel: false,
    sidebarAnimations: true,
    isToolshown: false,
  },
});

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
