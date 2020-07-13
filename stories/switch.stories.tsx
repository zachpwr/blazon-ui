import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Switch from '../src/switch';

import Demo from './docsComponents/demo';

const propDetails = {
  disabled: {
    defaultValue: 'false',
    description: 'Whether or not the checkbox is disabled',
    isRequired: false,
    propTypeName: 'boolean',
  },
  offText: {
    defaultValue: 'Off',
    description: 'The text to display on the switch lever when the switch is in the "off" toggle state',
    isRequired: false,
    propTypeName: 'string',
  },
  on: {
    defaultValue: 'false',
    description: 'Whether or not the switch is in the "on" toggle state',
    isRequired: false,
    propTypeName: 'boolean',
  },
  onClick: {
    description: 'A reference to the function responsible for handling checkbox clicks',
    isRequired: true,
    propTypeName: 'function',
  },
  onText: {
    defaultValue: 'On',
    description: 'The text to display on the switch lever when the switch is in the "on" toggle state',
    isRequired: false,
    propTypeName: 'string',
  },
};

interface IDemoStateWrapperProps {
  render: (on: boolean, changeHandler: () => void) => any;
  initialValue?: boolean;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [on, setOn] = React.useState(initialValue || false);
  return render(on, () => {
    setOn(!on);
  });
};

storiesOf('Components|Atoms (Basic)/Switch', module).add('Basic Switch', () => (
  <Demo propDetails={propDetails} demoTitle="Basic Switch" componentName="Switch">
    <h3>Email Spam Filter</h3>
    <DemoStateWrapper render={(on, onClick) => <Switch on={on} onClick={onClick} />} />
    <br />
    <h3>Out Of Office Auto-Reply</h3>
    <DemoStateWrapper render={(on, onClick) => <Switch on={on} onClick={onClick} />} />
    <br />
    <h3>AI-Powered Email Sorting</h3>
    <DemoStateWrapper render={(on, onClick) => <Switch on={on} onClick={onClick} disabled />} />
  </Demo>
));
