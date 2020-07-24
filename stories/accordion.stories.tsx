import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'Content whose visibility should be toggled by the accordion activator',
    isRequired: true,
    propTypeName: 'ReactNode',
  },
  subtitle: {
    description: 'Secondary line of text to be displayed below the title on the accordion activator',
    isRequired: false,
    propTypeName: 'string',
  },
  title: {
    description: 'Main line of text to be displayed on the accordion activator',
    isRequired: true,
    propTypeName: 'string',
  },
};

storiesOf('Components|Molecules (Composite)/Accordion', module).add('Basic Accordion', () => (
  <Demo
    componentName="Accordion"
    demoTitle="Basic Accordion"
    propDetails={propDetails}
    codesandboxUrlSlug="blazon-ui-accordion-demo-y9pgv"
  />
));
