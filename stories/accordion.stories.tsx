import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Accordion from '../src/accordion';

import StoryColumn from './storyColumn';

storiesOf('Components|Molecules (Composite)/Accordion', module).add('Default State', () => (
  <StoryColumn>
    <h1>
      <code>{'<Accordion />'}</code> Component
    </h1>
    <h2>Default State</h2>
    <h3>
      <code>title="..."</code> <code>subtitle="..."</code>
    </h3>
    <Accordion title="Expand this accordion component" subtitle="This is a subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
      lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan nec
      justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus, rutrum
      egestas felis efficitur vel.
    </Accordion>
    <Accordion title="Expand this accordion component" subtitle="This is a subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
      lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan nec
      justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus, rutrum
      egestas felis efficitur vel.
    </Accordion>
    <Accordion title="Expand this accordion component" subtitle="This is a subtitle">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
      lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan nec
      justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus, rutrum
      egestas felis efficitur vel.
    </Accordion>
  </StoryColumn>
));
