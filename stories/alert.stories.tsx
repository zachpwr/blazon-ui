import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from '../src/alert';

import StoryColumn from './storyColumn';

storiesOf('Components|Atoms (Basic)/Alert', module).add('Default State', () => (
  <StoryColumn>
    <h1>
      <code>{'<Alert />'}</code> Component
    </h1>
    <h2>Default State</h2>
    <h3>
      <code>color="main"</code> (default)
    </h3>
    <Alert>
      <b>Fáilte!</b> Go raibh maith agat as clárú.
    </Alert>
    <br />
    <h3>
      <code>color="success"</code>
    </h3>
    <Alert color="success">
      <b>Samþykkt!</b> Umsóknin þín var staðfest og samþykkt.
    </Alert>
    <br />
    <h3>
      <code>color="warning"</code>
    </h3>
    <Alert color="warning">
      <b>Rabhadh!</b> An do chuir thu eadar-theangachadh an teacsa seo?
    </Alert>
    <br />
    <h3>
      <code>color="error"</code>
    </h3>
    <Alert color="error">
      <b>Misslyckad!</b> Programmet kunde inte kompilera på grund av syntaxfel.
    </Alert>
    <br />
    <h3>
      <code>color="secondary"</code>
    </h3>
    <Alert color="secondary">
      <b>Интересный факт:</b> C++ компилируемый, статически типизированный язык программирования общего назначения.
    </Alert>
  </StoryColumn>
));
