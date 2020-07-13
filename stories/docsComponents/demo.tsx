import * as React from 'react';
import styled from 'styled-components';

import Grid from '../../src/grid';
import { ERowAlignmentModes } from '../../src/grid/row';
import Panel, { IPanelProps } from '../../src/panel';

import PropsTable, { IPropDetails } from './propsTable';

export interface IDemoProps {
  children: React.ReactNode;
  propDetails: IPropDetails;
  demoTitle: string;
  componentName: string;
}

const DemoPanel = styled(Panel)`
  margin-bottom: 0;
`;

const DemoTitle = styled.h2`
  code {
    font-family: 'Roboto Mono', monospace;
    color: ${props => props.theme.colors.main};
  }
`;

const DemoSubtitle = styled.h3``;

const DemoColumnTitle = styled.div`
  font-weight: 700;
  margin-bottom: 1em;
`;

const Demo = (props: IDemoProps) => {
  return (
    <Grid.Container>
      <Grid.Row>
        <Grid.Column>
          <DemoTitle>
            Component: <code>{`<${props.componentName}>`}</code>
          </DemoTitle>
          <DemoSubtitle>Demo: {props.demoTitle}</DemoSubtitle>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row alignmentMode={ERowAlignmentModes.stretch}>
        <Grid.Column>
          <DemoColumnTitle>Prop Type Details</DemoColumnTitle>
          <PropsTable propDetails={props.propDetails} />
        </Grid.Column>
        <Grid.Column>
          <DemoColumnTitle>Demo</DemoColumnTitle>
          <DemoPanel>{props.children}</DemoPanel>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
};

Demo.displayName = 'Demo';

export default Demo;
