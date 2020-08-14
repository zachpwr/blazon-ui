import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  color: {
    defaultValue: 'theme.neutralColor',
    description:
      'The key of a color in the Blazon UI theme with which to style the progress bar. Defaults to the value of the "neutralColor" property on the theme object.',
    isRequired: false,
    propTypeName: 'ThemeColorKey',
  },
  progress: {
    description: 'From 0-100, the percentage progress to be indicated in the progress bar',
    isRequired: true,
    propTypeName: 'number',
  },
};

storiesOf('Components|Atoms (Basic)/ProgressBar', module).add('Basic Progress Bar', () => {
  return (
    <Demo
      propDetails={propDetails}
      demoTitle="Basic Progress Bar"
      componentName="ProgressBar"
      codesandboxUrlSlug="blazon-ui-progressbar-demo-443ru"
    />
  );
});
