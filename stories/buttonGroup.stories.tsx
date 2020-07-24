import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../src/button';
import ButtonGroup from '../src/buttonGroup';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'The buttons to be grouped together visually',
    isRequired: true,
    propTypeName: 'ReactNode',
  },
};

storiesOf('Components|Molecules (Composite)/ButtonGroup', module).add('Basic Button Group', () => (
  <Demo
    demoTitle="Basic Button Group"
    componentName="ButtonGroup"
    propDetails={propDetails}
    codesandboxUrlSlug="blazon-ui-buttongroup-demo-n1c7z"
  />
));
