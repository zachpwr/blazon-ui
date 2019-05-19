import { transparentize } from 'polished';
import styled from 'styled-components';

export interface IPanelProps {
  theme: DefaultTheme;
}

const Panel = styled.div<IPanelProps>`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  padding: 20px;
  box-shadow: 0 5px 20px ${props => transparentize(0.9, props.theme.colors.darkGray)};
  margin-bottom: 20px;
`;

Panel.displayName = 'Panel';

export default Panel;
