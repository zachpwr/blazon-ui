import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../src/button';
import ButtonGroup from '../src/buttonGroup';

storiesOf('Components|Molecules (Composite)/ButtonGroup', module).add('Default State', () => (
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
