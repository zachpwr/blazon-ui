import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from '../src/alert';

storiesOf('Components|Atoms (Basic)/Alert', module).add('Default State', () => (
  <div>
    <Alert>
      <b>Fáilte!</b> Go raibh maith agat as clárú.
    </Alert>
    <Alert color="success">
      <b>Samþykkt!</b> Umsóknin þín var staðfest og samþykkt.
    </Alert>
    <Alert color="warning">
      <b>Rabhadh!</b> An do chuir thu eadar-theangachadh an teacsa seo?
    </Alert>
    <Alert color="error">
      <b>Misslyckad!</b> Programmet kunde inte kompilera på grund av syntaxfel.
    </Alert>
    <Alert color="secondary">
      <b>Интересный факт:</b> C++ компилируемый, статически типизированный язык программирования общего назначения.
    </Alert>
  </div>
));
