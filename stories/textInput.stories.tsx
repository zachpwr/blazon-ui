import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from '../src/textInput';

storiesOf('TextInput', module)
  .add('Default', () => <TextInput onSelect={action('select')} value="" />)
  .add('Placeholder', () => <TextInput onSelect={action('select')} value="" placeholder="San Francisco, CA" />)
  .add('Text', () => <TextInput onSelect={action('select')} value="San Francisco, CA" />)
  .add('Error', () => <TextInput onSelect={action('select')} value="San Francisco, CA" error />)
  .add('Disabled', () => <TextInput onSelect={action('select')} value="San Francisco, CA" disabled />);
