import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Button from '../src/button';

import StoryColumn from './storyColumn';

storiesOf('Components|Atoms (Basic)/Button', module)
  .add('With Plain Text', () => (
    <StoryColumn>
      <h1>
        <code>{'<Button />'}</code> Component
      </h1>
      <h2>With Plain Text</h2>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
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
    </StoryColumn>
  ))
  .add('With Emojis', () => (
    <StoryColumn>
      <h1>
        <code>{'<Button />'}</code> Component
      </h1>
      <h2>With Emojis</h2>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
      >
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </StoryColumn>
  ))
  .add('Disabled State', () => (
    <StoryColumn>
      <h1>
        <code>{'<Button />'}</code> Component
      </h1>
      <h2>Disabled State</h2>
      <h3>
        <code>{'disabled={true}'}</code>
      </h3>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
        disabled
      >
        Disabled
      </Button>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
        color="secondary"
        disabled
      >
        Disabled
      </Button>
    </StoryColumn>
  ));
