import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from '../src/checkbox';
import FormSection, { FormSectionLabelPosition } from '../src/formSection';
import Switch from '../src/switch';
import TextInput from '../src/textInput';

import StoryColumn from './storyColumn';

interface ITextInputDemoStateWrapperProps {
  render: (text: string, changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void) => any;
  initialValue?: string;
}

const TextInputDemoStateWrapper = ({ render, initialValue }: ITextInputDemoStateWrapperProps) => {
  const [text, setText] = React.useState(initialValue || '');
  return render(text, ({ target }) => {
    setText(target.value);
  });
};

interface IBoolDemoStateWrapperProps {
  render: (text: boolean, changeHandler: (newVal: boolean) => void) => any;
  initialValue?: boolean;
}

const BoolDemoStateWrapper = ({ render, initialValue }: IBoolDemoStateWrapperProps) => {
  const [on, setOn] = React.useState(initialValue || false);
  return render(on, setOn);
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
          <TextInputDemoStateWrapper
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
          <TextInputDemoStateWrapper
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
          <TextInputDemoStateWrapper
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
          <TextInputDemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} {...inputProps} />}
          />
        )}
      </FormSection>
    </StoryColumn>
  ))
  .add('Left Side Inline Mode', () => (
    <StoryColumn>
      <h1>
        <code>{'<FormSection />'}</code> Component
      </h1>
      <h2>Left Side Inline Mode</h2>
      <h3>
        <code>labelPosition="leftSide"</code> <code>{'children={(inputProps) => <MyInput {...inputProps} />}'}</code>
      </h3>
      <FormSection
        labelPosition={FormSectionLabelPosition.leftSide}
        title="Brugernavn"
        required
        info="Alfanumeriske tegn, bindestreger og understregning kun"
      >
        {inputProps => (
          <TextInputDemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} {...inputProps} />}
          />
        )}
      </FormSection>
      <FormSection
        labelPosition={FormSectionLabelPosition.leftSide}
        title="Visningsnavn"
        required
        info="Dette vil være det navn, der vises på din profil"
      >
        {inputProps => (
          <TextInputDemoStateWrapper
            render={(text, onChange) => <TextInput value={text} onChange={onChange} {...inputProps} />}
          />
        )}
      </FormSection>
    </StoryColumn>
  ))
  .add('Right Side Inline Mode', () => (
    <StoryColumn>
      <h1>
        <code>{'<FormSection />'}</code> Component
      </h1>
      <h2>Right Side Inline Mode</h2>
      <h3>
        <code>labelPosition="rigthSide"</code> <code>{'children={(inputProps) => <MyInput {...inputProps} />}'}</code>
      </h3>
      <FormSection
        labelPosition={FormSectionLabelPosition.rightSide}
        title="Compresser des fichiers"
        required
        info="Les fichiers JavaScript plus petits se chargent plus rapidement dans le navigateur"
      >
        {inputProps => (
          <BoolDemoStateWrapper
            render={(on, onChange) => <Checkbox checked={on} onClick={() => onChange(!on)} {...inputProps} />}
          />
        )}
      </FormSection>
      <FormSection
        labelPosition={FormSectionLabelPosition.rightSide}
        title="Déploiement automatique"
        required
        info="Déployer votre application chaque fois que vous fusionnez une demande de tirage"
      >
        {inputProps => (
          <BoolDemoStateWrapper
            initialValue={true}
            render={(on, onChange) => <Checkbox checked={on} onClick={() => onChange(!on)} {...inputProps} />}
          />
        )}
      </FormSection>
      <br />
      <FormSection
        labelPosition={FormSectionLabelPosition.rightSide}
        title="Réseau de distribution de contenu"
        required
        info="Réduisez le temps de chargement des pages de votre application"
      >
        {inputProps => (
          <BoolDemoStateWrapper
            render={(on, onChange) => (
              <Switch on={on} onClick={() => onChange(!on)} onText="sur" offText="de" {...inputProps} />
            )}
          />
        )}
      </FormSection>
      <FormSection
        labelPosition={FormSectionLabelPosition.rightSide}
        title="Notifications"
        required
        info="Recevoir une notification lorsqu'un déploiement d'application réussit"
      >
        {inputProps => (
          <BoolDemoStateWrapper
            initialValue={true}
            render={(on, onChange) => (
              <Switch on={on} onClick={() => onChange(!on)} onText="sur" offText="de" {...inputProps} />
            )}
          />
        )}
      </FormSection>
    </StoryColumn>
  ));
