import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  checked: {
    defaultValue: 'false',
    description: 'Whether or not the checkbox is checked',
    isRequired: false,
    propTypeName: 'boolean',
  },
  disabled: {
    defaultValue: 'false',
    description: 'Whether or not the checkbox is disabled',
    isRequired: false,
    propTypeName: 'boolean',
  },
  onClick: {
    description: 'A reference to the function responsible for handling checkbox clicks',
    isRequired: true,
    propTypeName: 'function',
  },
};

storiesOf('Components|Atoms (Basic)/Checkbox', module).add('Basic Checkbox', () => (
  <Demo
    propDetails={propDetails}
    componentName="Checkbox"
    demoTitle="Basic Checkbox"
    codesandboxUrlSlug="blazon-ui-checkbox-demo-805bk"
  />
));
