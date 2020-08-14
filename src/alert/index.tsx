import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IAlertProps {
  theme: ITheme;
  color?: string;
}

function getBaseColor(props: IAlertProps) {
  return props.theme.colors[props.color || props.theme.neutralColor];
}

const Alert = styled.div<IAlertProps>`
  background-color: ${props => getBaseColor(props).light};
  border: 2px solid ${props => getBaseColor(props).medium};
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px;
  margin-bottom: 10px;
  color: ${props => getBaseColor(props).dark};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

Alert.displayName = 'Alert';

export default Alert;
