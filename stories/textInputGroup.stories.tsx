import * as React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import TextInput from '../src/textInput';
import TextInputGroup from '../src/textInputGroup';

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
    action('change')({ ...state, ...update });
  });
};

storiesOf('TextInputGroup', module)
  .add('Default', () => (
    <DemoStateWrapper
      render={(state, setState) => (
        <TextInputGroup>
          <TextInput value={state.county} onChange={({ target }) => setState({ county: target.value })} />
          <TextInput value={state.barony} onChange={({ target }) => setState({ barony: target.value })} />
        </TextInputGroup>
      )}
      initialValue={{
        barony: '',
        county: '',
        parish: '',
        townland: '',
      }}
    />
  ))
  .add('Placeholder', () => (
    <DemoStateWrapper
      render={(state, setState) => (
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
      )}
      initialValue={{
        barony: '',
        county: '',
        parish: '',
        townland: '',
      }}
    />
  ))
  .add('Text', () => (
    <DemoStateWrapper
      render={(state, setState) => (
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
      )}
      initialValue={{
        barony: 'Cionn tSáile',
        county: 'Corcaigh',
        parish: 'Cionn tSáile',
        townland: 'Cnoc na Cathrach',
      }}
    />
  ))
  .add('Error', () => (
    <DemoStateWrapper
      render={(state, setState) => (
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
      )}
      initialValue={{
        barony: 'Beanntraí',
        county: 'Loch Garman',
        parish: '',
        townland: '',
      }}
    />
  ))
  .add('Disabled', () => (
    <TextInputGroup>
      <TextInput value="Port Láirge" disabled />
      <TextInput value="Decies-within-Drum" disabled />
      <TextInput value="An tArd Mór" disabled />
      <TextInput value="Abainn" disabled />
    </TextInputGroup>
  ));
