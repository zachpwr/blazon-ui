import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from '../src/alert';

import Demo from './docsComponents/demo';

const propDetails = {
  children: {
    description: 'The content to display within the alert',
    isRequired: true,
    propTypeName: 'ReactNode',
  },
  color: {
    defaultValue: 'main',
    description: 'The key of a color in the Blazon UI theme with which to style the alert',
    isRequired: false,
    propTypeName: 'string',
  },
};

storiesOf('Components|Atoms (Basic)/Alert', module).add('Basic Alert', () => (
  <Demo componentName="Alert" demoTitle="Basic Alert" propDetails={propDetails}>
    <Alert>
      <b>Hello!</b> Welcome to your new account
    </Alert>
    <Alert color="success">
      <b>Success!</b> Your settings have been saved
    </Alert>
    <Alert color="warning">
      <b>Reminder:</b> Your subscription will automatically renew in <b>2 days</b>
    </Alert>
    <Alert color="error">
      <b>Uh oh...</b> Your request failed. Please try again later
    </Alert>
    <Alert color="secondary">
      <b>FYI -</b> This post was archived <b>4 weeks ago</b>
    </Alert>
  </Demo>
));
