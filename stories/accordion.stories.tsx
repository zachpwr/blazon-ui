import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Accordion from '../src/accordion';

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
  <>
    <Demo componentName="Accordion" demoTitle="Basic Accordion" propDetails={propDetails}>
      <h3>Frequently Asked Questions</h3>
      <Accordion title="How do I change my password?" subtitle={`Identity & Login`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
        lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan nec
        justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus, rutrum
        egestas felis efficitur vel.
      </Accordion>
      <Accordion title="Where can I view my contract?" subtitle="Account Services">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
        lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan nec
        justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus, rutrum
        egestas felis efficitur vel.
      </Accordion>
      <Accordion title={`What is an "activation fee"?`} subtitle="Billing">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
        lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan nec
        justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus, rutrum
        egestas felis efficitur vel.
      </Accordion>
    </Demo>
  </>
));
