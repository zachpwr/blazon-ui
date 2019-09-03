import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../src/button';
import ButtonGroup from '../src/buttonGroup';

import StoryColumn from './storyColumn';

storiesOf('Components|Molecules (Composite)/ButtonGroup', module).add('Default State', () => (
  <StoryColumn>
    <h1>
      <code>{'<ButtonGroup />'}</code> Component
    </h1>
    <h2>Default State</h2>
    <ButtonGroup>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
        color="secondary"
      >
        Hello
      </Button>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
        color="secondary"
      >
        Hello
      </Button>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
        color="secondary"
      >
        Hello
      </Button>
    </ButtonGroup>
  </StoryColumn>
));
