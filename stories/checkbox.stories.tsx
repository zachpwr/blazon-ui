import * as React from 'react';

import { storiesOf } from '@storybook/react';

import Checkbox from '../src/checkbox';

import Demo from './docsComponents/demo';

interface IDemoStateWrapperProps {
  render: (checked: boolean, changeHandler: () => void) => any;
  initialValue?: boolean;
}

const DemoStateWrapper = ({ render, initialValue }: IDemoStateWrapperProps) => {
  const [checked, setChecked] = React.useState(initialValue || false);
  return render(checked, () => {
    setChecked(!checked);
  });
};

const propDetails = {
  checked: {
    defaultValue: 'false',
    description: 'Whether or not the checkbox is checked',
    isRequired: false,
    propTypeName: 'boolean',
  },
  disabled: {
    defaultValue: 'false',
    description: 'Whether or not the checkbox is disabled',
    isRequired: false,
    propTypeName: 'boolean',
  },
  onClick: {
    description: 'A reference to the function responsible for handling checkbox clicks',
    isRequired: true,
    propTypeName: 'function',
  },
};

storiesOf('Components|Atoms (Basic)/Checkbox', module).add('Basic Checkbox', () => (
  <DemoStateWrapper
    render={(checked, onClick) => (
      <Demo propDetails={propDetails} componentName="Checkbox" demoTitle="Basic Checkbox">
        <h3>Enabled Checkbox</h3>
        <Checkbox checked={checked} onClick={onClick} />
        <h3>Disabled Checkboxes</h3>
        <Checkbox disabled checked={false} onClick={onClick} /> <Checkbox disabled checked={true} onClick={onClick} />
      </Demo>
    )}
  />
));
