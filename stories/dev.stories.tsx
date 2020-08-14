import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Alert from '../src/alert';
import Button from '../src/button';
import Checkbox from '../src/checkbox';
import FormSection from '../src/formSection';
import Pill from '../src/pill';
import ProgressBar from '../src/progressBar';
import Select from '../src/select';
import Switch from '../src/switch';
import TextInput from '../src/textInput';
import Accordion from '../src/accordion';

import Demo from './docsComponents/demo';

const propDetails = {
  checked: {
    defaultValue: 'false',
    description: 'Whether or not the checkbox is checked',
    isRequired: false,
    propTypeName: 'boolean',
  },
  color: {
    defaultValue: 'theme.neutralColor',
    description:
      'The key of a color in the Blazon UI theme with which to style the button. Defaults to the value of the "neutralColor" property on the theme object.',
    isRequired: false,
    propTypeName: 'ThemeColorKey',
  },
  disabled: {
    defaultValue: 'false',
    description: 'Whether or not the checkbox is disabled',
    isRequired: false,
    propTypeName: 'boolean',
  },
  onClick: {
    description: 'A reference to the function responsible for handling checkbox clicks',
    isRequired: true,
    propTypeName: 'function',
  },
};

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

if (process.env.NODE_ENV === 'development') {
  storiesOf('Components|[DEV ONLY] Gallery', module).add('All Components', () => {
    const [checked, setChecked] = React.useState(false);
    const [selectValue, setSelectValue] = React.useState('California');
    const [on, setOn] = React.useState(false);
    return (
      <>
        <Checkbox checked={checked} onClick={setChecked.bind(false, !checked)} color="blue" />
        <br />
        <br />
        <Checkbox checked={checked} onClick={setChecked.bind(false, !checked)} color="red" />
        <br />
        <br />
        <Checkbox checked={checked} onClick={setChecked.bind(false, !checked)} color="yellow" />
        <br />
        <br />
        <Checkbox checked={checked} onClick={setChecked.bind(false, !checked)} color="green" />
        <br />
        <br />
        <Checkbox checked={checked} onClick={setChecked.bind(false, !checked)} color="gray" />
        <br />
        <br />
        <Alert color="blue">
          <b>Hello</b> Goodbye
        </Alert>
        <Alert color="red">
          <b>Hello</b> Goodbye
        </Alert>
        <Alert color="yellow">
          <b>Hello</b> Goodbye
        </Alert>
        <Alert color="green">
          <b>Hello</b> Goodbye
        </Alert>
        <Alert color="gray">
          <b>Hello</b> Goodbye
        </Alert>
        <Button color="blue">
          <b>Hello</b> Goodbye
        </Button>
        <Button color="red">
          <b>Hello</b> Goodbye
        </Button>
        <Button color="yellow">
          <b>Hello</b> Goodbye
        </Button>
        <Button color="green">
          <b>Hello</b> Goodbye
        </Button>
        <Button color="gray">
          <b>Hello</b> Goodbye
        </Button>
        <br />
        <br />
        <FormSection title="Title" info="Info" error="Error" required>
          {() => 'Hello'}
        </FormSection>
        <Pill color="blue">Goodbye</Pill>
        <Pill color="red">Goodbye</Pill>
        <Pill color="yellow">Goodbye</Pill>
        <Pill color="green">Goodbye</Pill>
        <Pill color="gray">Goodbye</Pill>
        <ProgressBar color="blue" progress={50}>
          Goodbye
        </ProgressBar>
        <br />
        <br />
        <ProgressBar color="red" progress={50}>
          Goodbye
        </ProgressBar>
        <br />
        <br />
        <ProgressBar color="yellow" progress={50}>
          Goodbye
        </ProgressBar>
        <br />
        <br />
        <ProgressBar color="green" progress={50}>
          Goodbye
        </ProgressBar>
        <br />
        <br />
        <ProgressBar color="gray" progress={50}>
          Goodbye
        </ProgressBar>
        <br />
        <br />
        <Select onSelect={setSelectValue} choices={choices} value={selectValue} color="blue" />
        <Select onSelect={setSelectValue} choices={choices} value={selectValue} color="red" />
        <Select onSelect={setSelectValue} choices={choices} value={selectValue} color="yellow" />
        <Select onSelect={setSelectValue} choices={choices} value={selectValue} color="green" />
        <Select onSelect={setSelectValue} choices={choices} value={selectValue} color="gray" />
        <Switch on={on} onClick={setOn.bind(null, !on)} color="blue" />
        <Switch on={on} onClick={setOn.bind(null, !on)} color="red" />
        <Switch on={on} onClick={setOn.bind(null, !on)} color="yellow" />
        <Switch on={on} onClick={setOn.bind(null, !on)} color="green" />
        <Switch on={on} onClick={setOn.bind(null, !on)} color="gray" />
        <TextInput value="asdf" color="blue" placeholder="Placeholder" />
        <TextInput value="asdf" color="red" placeholder="Placeholder" />
        <TextInput value="asdf" color="yellow" placeholder="Placeholder" />
        <TextInput value="asdf" color="green" placeholder="Placeholder" />
        <TextInput value="asdf" color="gray" placeholder="Placeholder" />
        <Accordion color="blue" title="How do I change my password?" subtitle={`Identity & Login`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
          lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan
          nec justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus,
          rutrum egestas felis efficitur vel.
        </Accordion>
        <Accordion color="red" title="How do I change my password?" subtitle={`Identity & Login`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
          lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan
          nec justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus,
          rutrum egestas felis efficitur vel.
        </Accordion>
        <Accordion color="yellow" title="How do I change my password?" subtitle={`Identity & Login`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
          lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan
          nec justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus,
          rutrum egestas felis efficitur vel.
        </Accordion>
        <Accordion color="green" title="How do I change my password?" subtitle={`Identity & Login`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
          lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan
          nec justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus,
          rutrum egestas felis efficitur vel.
        </Accordion>
        <Accordion color="gray" title="How do I change my password?" subtitle={`Identity & Login`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non dapibus tellus. Quisque vehicula massa quis
          lorem ullamcorper luctus. Nunc lorem erat, vestibulum ac tempor ac, laoreet a turpis. Ut ante arcu, accumsan
          nec justo vel, dictum hendrerit ligula. Morbi finibus odio ac auctor dictum. In vehicula bibendum lectus,
          rutrum egestas felis efficitur vel.
        </Accordion>
      </>
    );
  });
}
