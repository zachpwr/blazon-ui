import * as React from 'react';

import { storiesOf } from '@storybook/react';

import TextInput from '../src/textInput';

import Demo from './docsComponents/demo';

interface IDemoStateWrapperProps {
  render: (text: string, changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void) => any;
  initialValue?: string;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [text, setText] = React.useState(initialValue || '');
  return render(text, ({ target }) => {
    setText(target.value);
  });
};

const propDetails = {
  onChange: {
    description:
      'A reference to the function responsible for handling an input change. Receives the next input value as an argument',
    isRequired: true,
    propTypeName: 'function',
  },
  value: {
    description: 'The text value to be displayed in the text input',
    isRequired: true,
    propTypeName: 'string',
  },
};

storiesOf('Components|Atoms (Basic)/TextInput', module).add('Basic Text Input', () => (
  <Demo propDetails={propDetails} componentName="TextInput" demoTitle="Basic Text Input">
    <h3>Mailing address city:</h3>
    <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} placeholder="City" />} />

    <h3>ZIP Code:</h3>
    <DemoStateWrapper
      render={(text, onChange) => <TextInput onChange={onChange} value={text} placeholder="Postal Code" error />}
    />

    <h3>State:</h3>
    <TextInput value="California" disabled />
  </Demo>
));
