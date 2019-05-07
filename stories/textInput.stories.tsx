import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from '../src/textInput';

storiesOf('TextInput', module)
  .add('Default', () => (
    <div>
      <TextInput onSelect={action('select')} value="choice1" />
    </div>
  ))
  .add('Error', () => (
    <div>
      <TextInput onSelect={action('select')} value="choice1" error />
    </div>
  ))
  .add('Disabled', () => (
    <div>
      <TextInput onSelect={action('select')} value="choice1" disabled />
    </div>
  ));
