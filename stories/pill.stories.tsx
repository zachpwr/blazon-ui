import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Pill from '../src/pill';

storiesOf('Components|Atoms (Basic)/Pill', module).add('Default State', () => (
  <div>
    <Pill>Complete</Pill>
    <Pill color="success">Passed</Pill>
    <Pill color="error">Failed</Pill>
    <Pill color="warning">Pending</Pill>
    <Pill color="secondary">To Do</Pill>
  </div>
));
