import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  disabled: {
    defaultValue: 'false',
    description: 'Whether or not the checkbox is disabled',
    isRequired: false,
    propTypeName: 'boolean',
  },
  offText: {
    defaultValue: 'Off',
    description: 'The text to display on the switch lever when the switch is in the "off" toggle state',
    isRequired: false,
    propTypeName: 'string',
  },
  on: {
    defaultValue: 'false',
    description: 'Whether or not the switch is in the "on" toggle state',
    isRequired: false,
    propTypeName: 'boolean',
  },
  onClick: {
    description: 'A reference to the function responsible for handling checkbox clicks',
    isRequired: true,
    propTypeName: 'function',
  },
  onText: {
    defaultValue: 'On',
    description: 'The text to display on the switch lever when the switch is in the "on" toggle state',
    isRequired: false,
    propTypeName: 'string',
  },
};

storiesOf('Components|Atoms (Basic)/Switch', module).add('Basic Switch', () => (
  <Demo
    propDetails={propDetails}
    demoTitle="Basic Switch"
    componentName="Switch"
    codesandboxUrlSlug="blazon-ui-switch-demo-2g2ng"
  />
));
