import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/button';
import ButtonGroup from '../src/buttonGroup';

storiesOf('ButtonGroup', module).add('Default', () => (
  <ButtonGroup>
    <Button onClick={action('clicked')} color="secondary">
      Hello
    </Button>
    <Button onClick={action('clicked')} color="secondary">
      Hello
    </Button>
    <Button onClick={action('clicked')} color="secondary">
      Hello
    </Button>
  </ButtonGroup>
));
