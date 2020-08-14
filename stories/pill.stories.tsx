import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'The content to display within the pill',
    isRequired: true,
    propTypeName: 'ReactNode',
  },
  color: {
    defaultValue: 'theme.neutralColor',
    description:
      'The key of a color in the Blazon UI theme with which to style the pill. Defaults to the value of the "neutralColor" property on the theme object.',
    isRequired: false,
    propTypeName: 'ThemeColorKey',
  },
};

storiesOf('Components|Atoms (Basic)/Pill', module).add('Basic Pill', () => (
  <Demo
    propDetails={propDetails}
    componentName="Pill"
    demoTitle="Basic Pill"
    codesandboxUrlSlug="blazon-ui-pill-demo-88jwc"
  />
));
