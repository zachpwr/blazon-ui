import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from '../src/select';

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
    action('select')(newValue);
  });
};

storiesOf('Components|Atoms (Basic)/Select', module)
  .add('Default State', () => (
    <div>
      <DemoStateWrapper render={(value, onSelect) => <Select onSelect={onSelect} choices={choices} value={value} />} />
      <DemoStateWrapper
        render={(value, onSelect) => <Select onSelect={onSelect} choices={choices} value={value} color="secondary" />}
      />
    </div>
  ))
  .add('Disabled State', () => (
    <div>
      <Select onSelect={action('select')} choices={choices} value="choice1" disabled />
      <Select onSelect={action('select')} choices={choices} value="choice1" color="secondary" disabled />
    </div>
  ));
