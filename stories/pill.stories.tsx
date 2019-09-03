import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Pill from '../src/pill';

import StoryColumn from './storyColumn';

storiesOf('Components|Atoms (Basic)/Pill', module).add('Default State', () => (
  <StoryColumn>
    <h1>
      <code>{'<Pill />'}</code> Component
    </h1>
    <h2>Default State</h2>
    <h3>
      <code>color="main"</code> (default)
    </h3>
    <Pill>Complete</Pill>
    <br />
    <h3>
      <code>color="success"</code>
    </h3>
    <Pill color="success">Passed</Pill>
    <br />
    <h3>
      <code>color="error"</code>
    </h3>
    <Pill color="error">Failed</Pill>
    <br />
    <h3>
      <code>color="warning"</code>
    </h3>
    <Pill color="warning">Pending</Pill>
    <br />
    <h3>
      <code>color="secondary"</code>
    </h3>
    <Pill color="secondary">To Do</Pill>
  </StoryColumn>
));
