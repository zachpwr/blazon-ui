import * as React from 'react';

import { storiesOf } from '@storybook/react';

import FormSection, { FormSectionLabelPosition } from '../src/formSection';
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
      <h3>
        <code>{'title="Name"'}</code> <code>{'children={(inputProps) => <MyInput {...inputProps} />}'}</code>
      </h3>
      <FormSection title="Name">
        {inputProps => (
          <DemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} {...inputProps} />}
          />
        )}
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
        <code>{'title="Name"'}</code> <code>{'required={true}'}</code>{' '}
        <code>{'children={(inputProps) => <MyInput {...inputProps} />}'}</code>
      </h3>
      <FormSection title="Name" required>
        {inputProps => (
          <DemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} {...inputProps} />}
          />
        )}
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
        <code>{'title="Name"'}</code> <code>error="Please enter your name"</code> <code>{'required={true}'}</code>{' '}
        <code>{'children={(inputProps) => <MyInput {...inputProps} />}'}</code>
      </h3>
      <FormSection title="Name" required error="Please enter your name">
        {inputProps => (
          <DemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} error {...inputProps} />}
          />
        )}
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
        <code>{'title="API-Schlüssel"'}</code>{' '}
        <code>info="Nur alphanumerische Zeichen, Unterstriche und Bindestriche"</code> <code>{'required={true}'}</code>{' '}
        <code>{'children={(inputProps) => <MyInput {...inputProps} />}'}</code>
      </h3>
      <FormSection title="API-Schlüssel" required info="Nur alphanumerische Zeichen, Unterstriche und Bindestriche">
        {inputProps => (
          <DemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} {...inputProps} />}
          />
        )}
      </FormSection>
    </StoryColumn>
  ))
  .add('Inline Mode', () => (
    <StoryColumn>
      <h1>
        <code>{'<FormSection />'}</code> Component
      </h1>
      <h2>Inline Mode</h2>
      <h3>
        <code>{'title="Brugernavn"'}</code> <code>labelPosition="side"</code>{' '}
        <code>{'children={(inputProps) => <MyInput {...inputProps} />}'}</code>
      </h3>
      <FormSection
        labelPosition={FormSectionLabelPosition.side}
        title="Brugernavn"
        required
        info="Alfanumeriske tegn, bindestreger og understregning kun"
      >
        {inputProps => (
          <DemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} {...inputProps} />}
          />
        )}
      </FormSection>
      <FormSection
        labelPosition={FormSectionLabelPosition.side}
        title="Visningsnavn"
        required
        info="Dette vil være det navn, der vises på din profil"
      >
        {inputProps => (
          <DemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} {...inputProps} />}
          />
        )}
      </FormSection>
    </StoryColumn>
  ));
