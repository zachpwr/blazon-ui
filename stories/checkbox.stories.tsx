import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Checkbox from '../src/checkbox';

interface IDemoStateWrapperProps {
  render: (checked: boolean, changeHandler: () => void) => any;
  initialValue?: boolean;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [checked, setChecked] = React.useState(initialValue || false);
  return render(checked, () => {
    setChecked(!checked);
    action('click')(!checked ? 'checked' : 'unchecked');
  });
};

storiesOf('Components|Atoms (Basic)/Checkbox', module)
  .add('Default State', () => (
    <DemoStateWrapper render={(checked, onClick) => <Checkbox checked={checked} onClick={onClick} />} />
  ))
  .add('Disabled State', () => (
    <div>
      <Checkbox disabled onClick={action('clicked')} />
      <br />
      <Checkbox disabled checked onClick={action('clicked')} />
    </div>
  ));
