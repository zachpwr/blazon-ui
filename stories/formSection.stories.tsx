import * as React from 'react';

import { storiesOf } from '@storybook/react';

import FormSection from '../src/formSection';
import TextInput from '../src/textInput';

import StoryColumn from './storyColumn';

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

storiesOf('Components|Molecules (Composite)/FormSection', module)
  .add('Default State', () => (
    <StoryColumn>
      <h1>
        <code>{'<FormSection />'}</code> Component
      </h1>
      <h2>Default State</h2>
      <FormSection title="Name">
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
      </FormSection>
    </StoryColumn>
  ))
  .add('Required State', () => (
    <StoryColumn>
      <h1>
        <code>{'<FormSection />'}</code> Component
      </h1>
      <h2>Required State</h2>
      <h3>
        <code>{'required={true}'}</code>
      </h3>
      <FormSection title="Name" required>
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
      </FormSection>
    </StoryColumn>
  ))
  .add('Error State', () => (
    <StoryColumn>
      <h1>
        <code>{'<FormSection />'}</code> Component
      </h1>
      <h2>Error State</h2>
      <h3>
        <code>error="Please enter your name"</code> <code>{'required={true}'}</code>
      </h3>
      <FormSection title="Name" required error="Please enter your name">
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} error />} />
      </FormSection>
    </StoryColumn>
  ))
  .add('Info State', () => (
    <StoryColumn>
      <h1>
        <code>{'<FormSection />'}</code> Component
      </h1>
      <h2>Info State</h2>
      <h3>
        <code>info="Nur alphanumerische Zeichen, Unterstriche und Bindestriche"</code> <code>{'required={true}'}</code>
      </h3>
      <FormSection title="API-Schlüssel" required info="Nur alphanumerische Zeichen, Unterstriche und Bindestriche">
        <DemoStateWrapper render={(text, onChange) => <TextInput value={text} onChange={onChange} />} />
      </FormSection>
    </StoryColumn>
  ));
