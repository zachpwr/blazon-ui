import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Switch from '../src/switch';

interface IDemoStateWrapperProps {
  render: (on: boolean, changeHandler: () => void) => any;
  initialValue?: boolean;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [on, setOn] = React.useState(initialValue || false);
  return render(on, () => {
    setOn(!on);
    action('click')(!on ? 'on' : 'off');
  });
};

storiesOf('Switch', module)
  .add('Default', () => <DemoStateWrapper render={(on, onClick) => <Switch on={on} onClick={onClick} />} />)
  .add('Disabled', () => (
    <div>
      <Switch disabled onClick={action('clicked')} />
      <br />
      <Switch disabled on onClick={action('clicked')} />
    </div>
  ));
