import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormSection from '../src/formSection';
import TextInput from '../src/textInput';

storiesOf('FormSection', module)
  .add('Default', () => (
    <FormSection title="Email Address">
      <TextInput onSelect={action('select')} value="" />
    </FormSection>
  ))
  .add('Required', () => (
    <FormSection title="Email Address" required>
      <TextInput onSelect={action('select')} value="" />
    </FormSection>
  ))
  .add('Error', () => (
    <FormSection title="Email Address" required error="Please enter your email address">
      <TextInput onSelect={action('select')} value="" error />
    </FormSection>
  ));
