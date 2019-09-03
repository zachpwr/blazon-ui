import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from '../src/checkbox';

import StoryColumn from './storyColumn';

interface IDemoStateWrapperProps {
  render: (checked: boolean, changeHandler: () => void) => any;
  initialValue?: boolean;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [checked, setChecked] = React.useState(initialValue || false);
  return render(checked, () => {
    setChecked(!checked);
  });
};

storiesOf('Components|Atoms (Basic)/Checkbox', module)
  .add('Default State', () => (
    <DemoStateWrapper
      render={(checked, onClick) => (
        <StoryColumn>
          <h1>
            <code>{'<Checkbox />'}</code> Component
          </h1>
          <h2>Default State</h2>
          <h3>
            <code>checked={`{${checked}}`}</code>
          </h3>
          <Checkbox checked={checked} onClick={onClick} />
        </StoryColumn>
      )}
    />
  ))
  .add('Disabled State', () => (
    <StoryColumn>
      <h1>
        <code>{'<Checkbox />'}</code> Component
      </h1>
      <h2>Disabled State</h2>
      <h3>
        <code>disabled={'{true}'}</code> <code>checked={'{false}'}</code>
      </h3>
      <Checkbox
        disabled
        onClick={() => {
          console.log('clicked');
        }}
      />
      <br />
      <h3>
        <code>disabled={'{true}'}</code> <code>checked={'{true}'}</code>
      </h3>
      <Checkbox
        disabled
        checked
        onClick={() => {
          console.log('clicked');
        }}
      />
    </StoryColumn>
  ));
