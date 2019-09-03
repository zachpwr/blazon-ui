import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Switch from '../src/switch';

import StoryColumn from './storyColumn';

interface IDemoStateWrapperProps {
  render: (on: boolean, changeHandler: () => void) => any;
  initialValue?: boolean;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [on, setOn] = React.useState(initialValue || false);
  return render(on, () => {
    setOn(!on);
  });
};

storiesOf('Components|Atoms (Basic)/Switch', module)
  .add('Default State', () => (
    <DemoStateWrapper
      render={(on, onClick) => (
        <StoryColumn>
          <h1>
            <code>{'<Switch />'}</code> Component
          </h1>
          <h2>Default State</h2>
          <h3>
            <code>{`on={${on}}`}</code> <code>{'onClick={() => {}}'}</code>
          </h3>
          <Switch on={on} onClick={onClick} />
        </StoryColumn>
      )}
    />
  ))
  .add('Disabled State', () => (
    <StoryColumn>
      <h1>
        <code>{'<Switch />'}</code> Component
      </h1>
      <h2>Default State</h2>
      <h3>
        <code>{'disabled={true}'}</code> <code>{'on={false}'}</code>
      </h3>
      <Switch
        disabled
        onClick={() => {
          console.log('clicked');
        }}
      />
      <br />
      <h3>
        <code>{'disabled={true}'}</code> <code>{'on={true}'}</code>
      </h3>
      <Switch
        disabled
        on
        onClick={() => {
          console.log('clicked');
        }}
      />
    </StoryColumn>
  ));
