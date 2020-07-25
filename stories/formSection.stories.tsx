import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'A render function that spreads the argument "inputProps" on the input component that it returns',
    isRequired: true,
    propTypeName: '(inputProps) => <SomeInputComponent {...inputProps} />',
  },
  error: {
    defaultValue: '',
    description: 'The error text to display adjacent to the input',
    isRequired: false,
    propTypeName: 'string',
  },
  info: {
    defaultValue: '',
    description: 'The secondary text to display with the title label that describes the input further',
    isRequired: false,
    propTypeName: 'string',
  },
  labelPosition: {
    defaultValue: 'top',
    description: 'Where to position the labels relative to the input. Options: "top", "leftSide", "rightSide"',
    isRequired: false,
    propTypeName: 'string',
  },
  required: {
    defaultValue: 'false',
    description: 'Whether the input is required in order to submit the form',
    isRequired: false,
    propTypeName: 'boolean',
  },
  title: {
    description: 'The text to display in the primary label associated with the input',
    isRequired: true,
    propTypeName: 'string',
  },
};

storiesOf('Components|Molecules (Composite)/FormSection', module).add('Basic Form Section', () => (
  <Demo
    propDetails={propDetails}
    componentName="FormSection"
    demoTitle="Basic Form Section"
    codesandboxUrlSlug="blazon-ui-formsection-demo-ylyss"
  />
));
