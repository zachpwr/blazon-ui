import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Pill from '../src/pill';

storiesOf('Pill', module).add('Default', () => (
  <div>
    <Pill>Complete</Pill>
    <Pill color="success">Passed</Pill>
    <Pill color="error">Failed</Pill>
    <Pill color="warning">Pending</Pill>
    <Pill color="secondary">To Do</Pill>
  </div>
));
