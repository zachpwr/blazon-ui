import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Select from '../src/select';

import StoryColumn from './storyColumn';

const choices = [
  { text: 'Alabama', value: 'Alabama' },
  { text: 'Alaska', value: 'Alaska' },
  { text: 'Arizona', value: 'Arizona' },
  { text: 'Arkansas', value: 'Arkansas' },
  { text: 'California', value: 'California' },
  { text: 'Colorado', value: 'Colorado' },
  { text: 'Connecticut', value: 'Connecticut' },
  { text: 'Delaware', value: 'Delaware' },
  { text: 'Florida', value: 'Florida' },
  { text: 'Georgia', value: 'Georgia' },
  { text: 'Hawaii', value: 'Hawaii' },
  { text: 'Idaho', value: 'Idaho' },
  { text: 'Illinois', value: 'Illinois' },
  { text: 'Indiana', value: 'Indiana' },
  { text: 'Iowa', value: 'Iowa' },
  { text: 'Kansas', value: 'Kansas' },
  { text: 'Kentucky', value: 'Kentucky' },
  { text: 'Louisiana', value: 'Louisiana' },
  { text: 'Maine', value: 'Maine' },
  { text: 'Maryland', value: 'Maryland' },
  { text: 'Massachusetts', value: 'Massachusetts' },
  { text: 'Michigan', value: 'Michigan' },
  { text: 'Minnesota', value: 'Minnesota' },
  { text: 'Mississippi', value: 'Mississippi' },
  { text: 'Missouri', value: 'Missouri' },
  { text: 'Montana', value: 'Montana' },
  { text: 'Nebraska', value: 'Nebraska' },
  { text: 'Nevada', value: 'Nevada' },
  { text: 'New Hampshire', value: 'New Hampshire' },
  { text: 'New Jersey', value: 'New Jersey' },
  { text: 'New Mexico', value: 'New Mexico' },
  { text: 'New York', value: 'New York' },
  { text: 'North Carolina', value: 'North Carolina' },
  { text: 'North Dakota', value: 'North Dakota' },
  { text: 'Ohio', value: 'Ohio' },
  { text: 'Oklahoma', value: 'Oklahoma' },
  { text: 'Oregon', value: 'Oregon' },
  { text: 'Pennsylvania', value: 'Pennsylvania' },
  { text: 'Rhode Island', value: 'Rhode Island' },
  { text: 'South Carolina', value: 'South Carolina' },
  { text: 'South Dakota', value: 'South Dakota' },
  { text: 'Tennessee', value: 'Tennessee' },
  { text: 'Texas', value: 'Texas' },
  { text: 'Utah', value: 'Utah' },
  { text: 'Vermont', value: 'Vermont' },
  { text: 'Virginia', value: 'Virginia' },
  { text: 'Washington', value: 'Washington' },
  { text: 'West Virginia', value: 'West Virginia' },
  { text: 'Wisconsin', value: 'Wisconsin' },
  { text: 'Wyoming', value: 'Wyoming' },
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
      <DemoStateWrapper
        initialValue="California"
        render={(value, onSelect) => <Select onSelect={onSelect} choices={choices} value={value} />}
      />
      <DemoStateWrapper
        initialValue="New York"
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
        value="California"
        disabled
      />
      <Select
        onSelect={() => {
          console.log('select');
        }}
        choices={choices}
        value="New York"
        color="secondary"
        disabled
      />
    </StoryColumn>
  ));
