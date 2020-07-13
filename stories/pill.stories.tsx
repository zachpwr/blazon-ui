import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Pill from '../src/pill';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'The content to display within the pill',
    isRequired: true,
    propTypeName: 'ReactNode',
  },
  color: {
    defaultValue: 'main',
    description: 'The key of a color in the Blazon UI theme with which to style the pill',
    isRequired: false,
    propTypeName: 'string',
  },
};

storiesOf('Components|Atoms (Basic)/Pill', module).add('Basic Pill', () => (
  <Demo propDetails={propDetails} componentName="Pill" demoTitle="Basic Pill">
    <Pill>Complete</Pill>
    <Pill color="success">Passed</Pill>
    <Pill color="error">Failed</Pill>
    <Pill color="warning">Pending</Pill>
    <Pill color="secondary">To Do</Pill>
  </Demo>
));
