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
      <h3>
        <code>color="main"</code> (default)
      </h3>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
      >
        Hello
      </Button>
      <br />
      <h3>
        <code>color="success"</code>
      </h3>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
        color="success"
      >
        Hello
      </Button>
      <br />
      <h3>
        <code>color="error"</code>
      </h3>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
        color="error"
      >
        Hello
      </Button>
      <br />
      <h3>
        <code>color="warning"</code>
      </h3>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
        color="warning"
      >
        Hello
      </Button>
      <br />
      <h3>
        <code>color="secondary"</code>
      </h3>
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
