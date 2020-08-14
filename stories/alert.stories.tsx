import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'The content to display within the alert',
    isRequired: true,
    propTypeName: 'ReactNode',
  },
  color: {
    defaultValue: 'theme.neutralColor',
    description:
      'The key of a color in the Blazon UI theme with which to style the alert. Defaults to the value of the "neutralColor" property on the theme object.',
    isRequired: false,
    propTypeName: 'ThemeColorKey',
  },
};

storiesOf('Components|Atoms (Basic)/Alert', module).add('Basic Alert', () => (
  <Demo
    componentName="Alert"
    demoTitle="Basic Alert"
    propDetails={propDetails}
    codesandboxUrlSlug="blazon-ui-alert-demo-v9tde"
  />
));
