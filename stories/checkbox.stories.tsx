import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from '../src/checkbox';

storiesOf('Checkbox', module)
  .add('Unchecked', () => <Checkbox onClick={action('clicked')} />)
  .add('Checked', () => <Checkbox checked onClick={action('clicked')} />)
  .add('Disabled', () => (
    <div>
      <Checkbox disabled onClick={action('clicked')} />
      <br />
      <Checkbox disabled checked onClick={action('clicked')} />
    </div>
  ));
