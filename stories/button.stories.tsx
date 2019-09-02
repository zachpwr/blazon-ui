import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../src/button';

storiesOf('Components|Atoms (Basic)/Button', module)
  .add('With Plain Text', () => (
    <div>
      <Button onClick={action('clicked')}>Hello</Button>
      <Button onClick={action('clicked')} color="secondary">
        Hello
      </Button>
    </div>
  ))
  .add('With Emojis', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Disabled State', () => (
    <div>
      <Button onClick={action('clicked')} disabled>
        Disabled
      </Button>
      <Button onClick={action('clicked')} color="secondary" disabled>
        Disabled
      </Button>
    </div>
  ));
