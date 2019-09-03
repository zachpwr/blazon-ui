import * as React from 'react';

import { storiesOf } from '@storybook/react';

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

storiesOf('Components|Atoms (Basic)/TextInput', module)
  .add('Default State', () => (
    <DemoStateWrapper
      render={(text, onChange) => (
        <StoryColumn>
          <h1>
            <code>{'<TextInput />'}</code> Component
          </h1>
          <h2>Default State</h2>
          <TextInput value={text} onChange={onChange} />
        </StoryColumn>
      )}
    />
  ))
  .add('With Placeholder', () => (
    <DemoStateWrapper
      render={(text, onChange) => (
        <StoryColumn>
          <h1>
            <code>{'<TextInput />'}</code> Component
          </h1>
          <h2>With Placeholder</h2>
          <h3>
            <code>placeholder="City"</code>
          </h3>
          <TextInput value={text} onChange={onChange} placeholder="City" />
        </StoryColumn>
      )}
    />
  ))
  .add('With Text', () => (
    <DemoStateWrapper
      render={(text, onChange) => (
        <StoryColumn>
          <h1>
            <code>{'<TextInput />'}</code> Component
          </h1>
          <h2>With Text</h2>
          <h3>
            <code>{"value={''}"}</code>
          </h3>
          <TextInput onChange={onChange} value={text} placeholder="City" />
        </StoryColumn>
      )}
      initialValue="San Francisco, CA"
    />
  ))
  .add('Error State', () => (
    <DemoStateWrapper
      render={(text, onChange) => (
        <StoryColumn>
          <h1>
            <code>{'<TextInput />'}</code> Component
          </h1>
          <h2>Error State</h2>
          <h3>
            <code>{'error={true}'}</code>
          </h3>
          <TextInput onChange={onChange} value={text} placeholder="City" error />
        </StoryColumn>
      )}
      initialValue="San Francisco, CA"
    />
  ))
  .add('Disabled State', () => (
    <StoryColumn>
      <h1>
        <code>{'<TextInput />'}</code> Component
      </h1>
      <h2>Disabled State</h2>
      <h3>
        <code>{'disabled={true}'}</code>
      </h3>
      <TextInput value="San Francisco, CA" disabled />
    </StoryColumn>
  ));
