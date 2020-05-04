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
    <StoryColumn>
      <h1>
        <code>{'<Switch />'}</code> Component
      </h1>
      <h2>Default State</h2>
      <h3>
        <code>{'on={true|false}'}</code> <code>{'onClick={() => {}}'}</code>
      </h3>
      <DemoStateWrapper render={(on, onClick) => <Switch on={on} onClick={onClick} />} />
      <br />
      <h3>
        <code>{'onText="1"'}</code> <code>{'offText="0"'}</code>
      </h3>
      <DemoStateWrapper render={(on, onClick) => <Switch on={on} onClick={onClick} onText="1" offText="0" />} />
      <br />
      <h3>
        <code>{'onText="Aan"'}</code> <code>{'offText="Uit"'}</code>
      </h3>
      <DemoStateWrapper render={(on, onClick) => <Switch on={on} onClick={onClick} onText="Aan" offText="Uit" />} />
    </StoryColumn>
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
