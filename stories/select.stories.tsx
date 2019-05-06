import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../src/select';

const choices = [
  { value: 'choice1', text: 'Choice 1' },
  { value: 'choice2', text: 'Choice 2' },
  { value: 'choice3', text: 'Choice 3' },
];

storiesOf('Select', module)
  .add('Default', () => (
    <div>
      <Select onSelect={action('select')} choices={choices} value="choice1" />
      <Select onSelect={action('select')} choices={choices} value="choice1" color="secondary" />
    </div>
  ))
  .add('Disabled', () => (
    <div>
      <Select onSelect={action('select')} choices={choices} value="choice1" disabled />
      <Select onSelect={action('select')} choices={choices} value="choice1" color="secondary" disabled />
    </div>
  ));
