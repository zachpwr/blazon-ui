import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from '../src/textInput';

storiesOf('TextInput', module)
  .add('Default', () => <TextInput onSelect={action('select')} value="choice1" />)
  .add('Error', () => <TextInput onSelect={action('select')} value="choice1" error />)
  .add('Disabled', () => <TextInput onSelect={action('select')} value="choice1" disabled />);
