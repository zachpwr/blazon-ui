import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import ProgressBar from '../src/progressBar';

storiesOf('Components|Atoms (Basic)/ProgressBar', module)
  .addDecorator(withKnobs)
  .add('Default State', () => {
    const progress = number('Progress', 100, {
      range: true,
      min: 0,
      max: 100,
      step: 1,
    });
    return (
      <div>
        <ProgressBar progress={0} />
        <br />
        <ProgressBar progress={progress / 3} />
        <br />
        <ProgressBar progress={(2 * progress) / 3} />
        <br />
        <ProgressBar progress={progress} />
        <br />
        <ProgressBar progress={0} color="secondary" />
        <br />
        <ProgressBar progress={progress / 3} color="secondary" />
        <br />
        <ProgressBar progress={(2 * progress) / 3} color="secondary" />
        <br />
        <ProgressBar progress={progress} color="secondary" />
        <br />
      </div>
    );
  });
