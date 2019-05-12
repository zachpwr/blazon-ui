import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import FormSection from '../src/formSection';
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

storiesOf('FormSection', module)
  .add('Default', () => (
    <div>
      <FormSection title="Name">
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
      </FormSection>
      <FormSection title="Email Address">
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
      </FormSection>
    </div>
  ))
  .add('Required', () => (
    <div>
      <FormSection title="Name" required>
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
      </FormSection>
      <FormSection title="Email Address">
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
      </FormSection>
    </div>
  ))
  .add('Error', () => (
    <div>
      <FormSection title="Name" required error="Please enter your name">
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} error />} />
      </FormSection>
      <FormSection title="Email Address">
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
      </FormSection>
    </div>
  ));
