import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Pill from '../src/pill';

storiesOf('Pill', module).add('Default', () => (
  <div>
    <Pill>Complete</Pill>
    <Pill color="secondary">Pending</Pill>
  </div>
));
