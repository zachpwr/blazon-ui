import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ProgressBar from '../src/progressBar';

import Demo from './docsComponents/demo';

const propDetails = {
  color: {
    defaultValue: 'main',
    description: 'The key of a color in the Blazon UI theme with which to style the progress bar',
    isRequired: false,
    propTypeName: 'string',
  },
  progress: {
    description: 'From 0-100, the percentage progress to be indicated in the progress bar',
    isRequired: true,
    propTypeName: 'number',
  },
};

storiesOf('Components|Atoms (Basic)/ProgressBar', module).add('Basic Progress Bar', () => {
  return (
    <Demo propDetails={propDetails} demoTitle="Basic Progress Bar" componentName="ProgressBar">
      <ProgressBar progress={20} color="main" />
      <br />
      <ProgressBar progress={40} color="success" />
      <br />
      <ProgressBar progress={60} color="error" />
      <br />
      <ProgressBar progress={80} color="warning" />
      <br />
      <ProgressBar progress={100} color="secondary" />
    </Demo>
  );
});
