import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Select from '../src/select';

import StoryColumn from './storyColumn';

const choices = [
  { value: 'choice1', text: 'Choice 1' },
  { value: 'choice2', text: 'Choice 2' },
  { value: 'choice3', text: 'Choice 3' },
];

interface IDemoStateWrapperProps {
  render: (text: string, changeHandler: (value: string) => void) => any;
  initialValue?: string;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [value, setValue] = React.useState(initialValue || choices[0].value);
  return render(value, newValue => {
    setValue(newValue);
  });
};

storiesOf('Components|Atoms (Basic)/Select', module)
  .add('Default State', () => (
    <StoryColumn>
      <h1>
        <code>{'<Select />'}</code> Component
      </h1>
      <h2>Default State</h2>
      <h3>
        <code>{'onSelect={(value) => {}}'}</code> <code>{`choices={[ { value: '', text: '' } ]}`}</code>{' '}
        <code>{"value={''}"}</code>
      </h3>
      <DemoStateWrapper render={(value, onSelect) => <Select onSelect={onSelect} choices={choices} value={value} />} />
      <DemoStateWrapper
        render={(value, onSelect) => <Select onSelect={onSelect} choices={choices} value={value} color="secondary" />}
      />
    </StoryColumn>
  ))
  .add('Disabled State', () => (
    <StoryColumn>
      <h1>
        <code>{'<Select />'}</code> Component
      </h1>
      <h2>Disabled State</h2>
      <h3>
        <code>{'disabled={true}'}</code>
      </h3>
      <Select
        onSelect={() => {
          console.log('select');
        }}
        choices={choices}
        value="choice1"
        disabled
      />
      <Select
        onSelect={() => {
          console.log('select');
        }}
        choices={choices}
        value="choice1"
        color="secondary"
        disabled
      />
    </StoryColumn>
  ));
