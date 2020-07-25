import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  error: {
    defaultValue: 'false',
    description: 'Whether the input should be displayed with a red border or not',
    isRequired: false,
    propTypeName: 'boolean',
  },
  onChange: {
    description:
      'A reference to the function responsible for handling an input change. Receives the next input value as an argument',
    isRequired: true,
    propTypeName: 'function',
  },
  value: {
    description: 'The text value to be displayed in the text input',
    isRequired: true,
    propTypeName: 'string',
  },
};

storiesOf('Components|Atoms (Basic)/TextInput', module).add('Basic Text Input', () => (
  <Demo
    propDetails={propDetails}
    componentName="TextInput"
    demoTitle="Basic Text Input"
    codesandboxUrlSlug="blazon-ui-textinput-demo-8vkdw"
  />
));
