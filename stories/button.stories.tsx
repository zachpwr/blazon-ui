import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/button';

storiesOf('Button', module)
  .add('Text', () => (
    <div>
      <Button onClick={action('clicked')}>Hello</Button>
      <Button onClick={action('clicked')} color="secondary">
        Hello
      </Button>
    </div>
  ))
  .add('Emojis', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Disabled', () => (
    <div>
      <Button onClick={action('clicked')} disabled>
        Disabled
      </Button>
      <Button onClick={action('clicked')} color="secondary" disabled>
        Disabled
      </Button>
    </div>
  ));
