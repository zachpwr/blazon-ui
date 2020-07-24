import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../src/button';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'The content to display within the button',
    isRequired: true,
    propTypeName: 'ReactNode',
  },
  color: {
    defaultValue: 'main',
    description: 'The key of a color in the Blazon UI theme with which to style the button',
    isRequired: false,
    propTypeName: 'string',
  },
  disabled: {
    defaultValue: 'false',
    description: 'Whether or not the button is disabled',
    isRequired: false,
    propTypeName: 'boolean',
  },
  onClick: {
    description: 'A reference to the function responsible for handling button clicks',
    isRequired: true,
    propTypeName: 'function',
  },
};

storiesOf('Components|Atoms (Basic)/Button', module).add('Basic Button', () => (
  <Demo
    propDetails={propDetails}
    componentName="Button"
    demoTitle="Basic Button"
    codesandboxUrlSlug="blazon-ui-button-demo-zeugx"
  />
));
