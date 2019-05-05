import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pill from '../src/pill';

storiesOf('Pill', module).add('Default', () => (
  <div>
    <Pill onClick={action('clicked')}>Complete</Pill>
    <Pill onClick={action('clicked')} color="secondary">
      Pending
    </Pill>
  </div>
));
