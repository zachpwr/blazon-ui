import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextInput from '../src/textInput';

interface IDemoStateWrapperProps {
  render: (text: string, changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void) => any;
  initialValue?: string;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [text, setText] = React.useState(initialValue || '');
  return render(text, ({ target }) => {
    setText(target.value);
    action('change')(target.value);
  });
};

storiesOf('TextInput', module)
  .add('Default', () => (
    <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
  ))
  .add('Placeholder', () => (
    <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} placeholder="City" />} />
  ))
  .add('Text', () => (
    <DemoStateWrapper
      render={(text, onChange) => <TextInput onChange={onChange} value={text} placeholder="City" />}
      initialValue="San Francisco, CA"
    />
  ))
  .add('Error', () => (
    <DemoStateWrapper
      render={(text, onChange) => <TextInput onChange={onChange} value={text} placeholder="City" error />}
      initialValue="San Francisco, CA"
    />
  ))
  .add('Disabled', () => <TextInput value="San Francisco, CA" disabled />);
