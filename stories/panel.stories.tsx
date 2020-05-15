import * as React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import Button from '../src/button';
import Panel from '../src/panel';
import Pill from '../src/pill';
import Switch from '../src/switch';

import StoryColumn from './storyColumn';

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

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;

  ${Switch} {
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

storiesOf('Components|Atoms (Basic)/Panel', module)
  .add('Empty State', () => (
    <StoryColumn>
      <h1>
        <code>{'<Panel />'}</code> Component
      </h1>
      <h2>Empty State</h2>
      <Panel />
    </StoryColumn>
  ))
  .add('With Text', () => (
    <StoryColumn>
      <h1>
        <code>{'<Panel />'}</code> Component
      </h1>
      <h2>With Text</h2>
      <Panel>
        <h1>
          Baile Átha Cliath{' '}
          <Pill style={{ fontSize: '1rem', float: 'right' }} color="secondary">
            99€
          </Pill>
        </h1>
        <p>
          Is é Baile Átha Cliath príomhchathair na hÉireann agus é ar an gcathair is mó sa tír freisin. Tá sé suite in
          oirthear na tíre, cois Life agus ar imeall Mhuir Éireann. Tá breis is 1.6 milliún duine ina gcónaí i
          mórcheantar Bhaile Átha Cliath agus deirtear go dtiocfaidh borradh agus fás ar an daonra sa todhchaí.
        </p>
        <Button>Ticéid a cheannach</Button>
        <Button color="secondary">Tuilleadh eolais</Button>
      </Panel>
      <Panel>
        <h1>
          Reykjavík{' '}
          <Pill style={{ fontSize: '1rem', float: 'right' }} color="secondary">
            13.645kr
          </Pill>
        </h1>
        <p>
          Reykjavík er höfuðborg Íslands, fjölmennasta sveitarfélag landsins og eina borgin. Þannig er Reykjavík
          efnahagsleg, menningarleg og stjórnmálaleg þungamiðja landsins. Rúmlega 126.000 manns búa í Reykjavík, þar af
          eru um 11% innflytjendur. Íbúar höfuðborgarsvæðisins eru yfir 200 þúsund í sjö sveitarfélögum. Opinbert heiti
          sveitarfélagsins Reykjavíkur er Reykjavíkurborg.
        </p>
        <SwitchContainer>
          <DemoStateWrapper
            render={(on, onClick) => <Switch on={on} onText="á" offText="af" onClick={onClick} />}
            initialValue={true}
          />
          <div style={{ marginLeft: 20 }}>Sendu mér tölvupóst þegar þetta er í boði</div>
        </SwitchContainer>
      </Panel>
    </StoryColumn>
  ));
