import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ProgressBar from '../src/progressBar';

storiesOf('ProgressBar', module).add('Default', () => (
  <div>
    <ProgressBar progress={0} />
    <br />
    <ProgressBar progress={33} />
    <br />
    <ProgressBar progress={66} />
    <br />
    <ProgressBar progress={100} />
    <br />
    <ProgressBar progress={0} color="secondary" />
    <br />
    <ProgressBar progress={33} color="secondary" />
    <br />
    <ProgressBar progress={66} color="secondary" />
    <br />
    <ProgressBar progress={100} color="secondary" />
    <br />
  </div>
));
