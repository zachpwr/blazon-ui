import * as React from 'react';

import { storiesOf } from '@storybook/react';

import TextInput from '../src/textInput';
import TextInputGroup from '../src/textInputGroup';

import StoryColumn from './storyColumn';

interface IDemoState {
  county: string;
  barony: string;
  parish: string;
  townland: string;
}

interface IDemoStateWrapperProps {
  render: (state: IDemoState, changeHandler: (update: {}) => void) => any;
  initialValue: IDemoState;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [state, setState] = React.useState(initialValue);
  return render(state, update => {
    setState({ ...state, ...update });
  });
};

storiesOf('Components|Molecules (Composite)/TextInputGroup', module)
  .add('Default State', () => (
    <DemoStateWrapper
      render={(state, setState) => (
        <StoryColumn>
          <h1>
            <code>{'<TextInputGroup />'}</code> Component
          </h1>
          <h2>Default State</h2>
          <TextInputGroup>
            <TextInput value={state.county} onChange={({ target }) => setState({ county: target.value })} />
            <TextInput value={state.barony} onChange={({ target }) => setState({ barony: target.value })} />
          </TextInputGroup>
        </StoryColumn>
      )}
      initialValue={{
        barony: '',
        county: '',
        parish: '',
        townland: '',
      }}
    />
  ))
  .add('With Placeholder', () => (
    <DemoStateWrapper
      render={(state, setState) => (
        <StoryColumn>
          <h1>
            <code>{'<TextInputGroup />'}</code> Component
          </h1>
          <h2>With Placeholder</h2>
          <TextInputGroup>
            <TextInput
              value={state.county}
              onChange={({ target }) => setState({ county: target.value })}
              placeholder="Contae"
            />
            <TextInput
              value={state.barony}
              onChange={({ target }) => setState({ barony: target.value })}
              placeholder="Buí"
            />
            <TextInput
              value={state.parish}
              onChange={({ target }) => setState({ parish: target.value })}
              placeholder="Paróiste"
            />
            <TextInput
              value={state.townland}
              onChange={({ target }) => setState({ townland: target.value })}
              placeholder="Baile Fearainn"
            />
          </TextInputGroup>
        </StoryColumn>
      )}
      initialValue={{
        barony: '',
        county: '',
        parish: '',
        townland: '',
      }}
    />
  ))
  .add('With Text', () => (
    <DemoStateWrapper
      render={(state, setState) => (
        <StoryColumn>
          <h1>
            <code>{'<TextInputGroup />'}</code> Component
          </h1>
          <h2>With Text</h2>
          <TextInputGroup>
            <TextInput
              value={state.county}
              onChange={({ target }) => setState({ county: target.value })}
              placeholder="Contae"
            />
            <TextInput
              value={state.barony}
              onChange={({ target }) => setState({ barony: target.value })}
              placeholder="Buí"
            />
            <TextInput
              value={state.parish}
              onChange={({ target }) => setState({ parish: target.value })}
              placeholder="Paróiste"
            />
            <TextInput
              value={state.townland}
              onChange={({ target }) => setState({ townland: target.value })}
              placeholder="Baile Fearainn"
            />
          </TextInputGroup>
        </StoryColumn>
      )}
      initialValue={{
        barony: 'Cionn tSáile',
        county: 'Corcaigh',
        parish: 'Cionn tSáile',
        townland: 'Cnoc na Cathrach',
      }}
    />
  ))
  .add('Error State', () => (
    <DemoStateWrapper
      render={(state, setState) => (
        <StoryColumn>
          <h1>
            <code>{'<TextInputGroup />'}</code> Component
          </h1>
          <h2>Error State</h2>
          <TextInputGroup>
            <TextInput
              value={state.county}
              onChange={({ target }) => setState({ county: target.value })}
              placeholder="Contae"
            />
            <TextInput
              value={state.barony}
              onChange={({ target }) => setState({ barony: target.value })}
              placeholder="Buí"
            />
            <TextInput
              value={state.parish}
              onChange={({ target }) => setState({ parish: target.value })}
              placeholder="Paróiste"
              error
            />
            <TextInput
              value={state.townland}
              onChange={({ target }) => setState({ townland: target.value })}
              placeholder="Baile Fearainn"
              error
            />
          </TextInputGroup>
        </StoryColumn>
      )}
      initialValue={{
        barony: 'Beanntraí',
        county: 'Loch Garman',
        parish: '',
        townland: '',
      }}
    />
  ))
  .add('Disabled State', () => (
    <StoryColumn>
      <h1>
        <code>{'<TextInputGroup />'}</code> Component
      </h1>
      <h2>Disabled State</h2>
      <TextInputGroup>
        <TextInput value="Port Láirge" disabled />
        <TextInput value="Decies-within-Drum" disabled />
        <TextInput value="An tArd Mór" disabled />
        <TextInput value="Abainn" disabled />
      </TextInputGroup>
    </StoryColumn>
  ));
