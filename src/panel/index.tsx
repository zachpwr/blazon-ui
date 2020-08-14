import { transparentize } from 'polished';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IPanelProps {
  theme: ITheme;
}

const Panel = styled.div<IPanelProps>`
  background-color: '#fff';
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  box-shadow: 0 2px 8px ${props => transparentize(0.8, props.theme.colors[props.theme.neutralColor].dark)};
  margin-bottom: 20px;
`;

Panel.displayName = 'Panel';

export default Panel;
