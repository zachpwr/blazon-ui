import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ProgressBar from '../src/progressBar';

import StoryColumn from './storyColumn';

storiesOf('Components|Atoms (Basic)/ProgressBar', module).add('Default State', () => {
  const progress = 33;
  return (
    <StoryColumn>
      <h1>
        <code>{'<ProgressBar />'}</code> Component
      </h1>
      <h2>Default State</h2>
      <h3>
        <code>{'progress={20}'}</code> <code>color="main"</code>
      </h3>
      <ProgressBar progress={20} color="main" />
      <br />
      <h3>
        <code>{'progress={40}'}</code> <code>color="success"</code>
      </h3>
      <ProgressBar progress={40} color="success" />
      <br />
      <h3>
        <code>{'progress={60}'}</code> <code>color="error"</code>
      </h3>
      <ProgressBar progress={60} color="error" />
      <br />
      <h3>
        <code>{'progress={80}'}</code> <code>color="warning"</code>
      </h3>
      <ProgressBar progress={80} color="warning" />
      <br />
      <h3>
        <code>{'progress={100}'}</code> <code>color="secondary"</code>
      </h3>
      <ProgressBar progress={100} color="secondary" />
      <br />
    </StoryColumn>
  );
});
