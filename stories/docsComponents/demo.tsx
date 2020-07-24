import * as React from 'react';
import styled from 'styled-components';

import Grid from '../../src/grid';
import { ERowAlignmentModes } from '../../src/grid/row';
import Panel, { IPanelProps } from '../../src/panel';

import PropsTable, { IPropDetails } from './propsTable';

export interface IDemoProps {
  children?: React.ReactNode;
  propDetails: IPropDetails;
  demoTitle: string;
  componentName: string;
  codesandboxUrlSlug?: string;
}

const DemoPanel = styled(Panel)`
  padding: 0;
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
      <Grid.Row>
        <Grid.Column>
          <DemoColumnTitle>Prop Type Details</DemoColumnTitle>
          <PropsTable propDetails={props.propDetails} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <DemoColumnTitle>Demo</DemoColumnTitle>
          <DemoPanel>
            {(props.codesandboxUrlSlug && (
              <iframe
                src={`https://codesandbox.io/embed/${props.codesandboxUrlSlug}?fontsize=14&hidenavigation=1&theme=light`}
                style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
                title="blazon-ui-accordion-demo"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              ></iframe>
            )) ||
              props.children}
          </DemoPanel>
        </Grid.Column>
      </Grid.Row>
    </Grid.Container>
  );
};

Demo.displayName = 'Demo';

export default Demo;
