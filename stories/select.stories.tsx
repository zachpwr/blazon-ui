import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  choices: {
    description: 'An array of objects representing the choices to be displayed in the select dropdown menu',
    isRequired: true,
    propTypeName: 'Array<{ text: "", value: ""}>',
  },
  color: {
    defaultValue: 'main',
    description: 'The key of a color in the Blazon UI theme with which to style the select activator',
    isRequired: false,
    propTypeName: 'string',
  },
  onSelect: {
    description:
      'A reference to the function responsible for handling a new dropdown selection. Receives the selected value as an argument',
    isRequired: true,
    propTypeName: 'function',
  },
};

storiesOf('Components|Atoms (Basic)/Select', module).add('Basic Select', () => (
  <Demo
    propDetails={propDetails}
    demoTitle="Basic Select"
    componentName="Select"
    codesandboxUrlSlug="blazon-ui-select-demo-8gwl4"
  />
));
