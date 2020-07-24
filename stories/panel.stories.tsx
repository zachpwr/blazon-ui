import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'Components to be displayed within the panel',
    isRequired: true,
    propTypeName: 'ReactNode',
  },
};

storiesOf('Components|Atoms (Basic)/Panel', module).add('Basic Panel', () => (
  <Demo
    propDetails={propDetails}
    componentName="Panel"
    demoTitle="Basic Panel"
    codesandboxUrlSlug="blazon-ui-panel-demo-u19pe"
  />
));
