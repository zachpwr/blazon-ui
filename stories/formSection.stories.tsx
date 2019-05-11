import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormSection from '../src/formSection';
import TextInput from '../src/textInput';

storiesOf('FormSection', module)
  .add('Default', () => (
    <div>
      <FormSection title="Name">
        <TextInput onSelect={action('select')} value="" />
      </FormSection>
      <FormSection title="Email Address">
        <TextInput onSelect={action('select')} value="" />
      </FormSection>
    </div>
  ))
  .add('Required', () => (
    <div>
      <FormSection title="Name" required>
        <TextInput onSelect={action('select')} value="" />
      </FormSection>
      <FormSection title="Email Address">
        <TextInput onSelect={action('select')} value="" />
      </FormSection>
    </div>
  ))
  .add('Error', () => (
    <div>
      <FormSection title="Name" required error="Please enter your name">
        <TextInput onSelect={action('select')} value="" error />
      </FormSection>
      <FormSection title="Email Address">
        <TextInput onSelect={action('select')} value="" />
      </FormSection>
    </div>
  ));
