import { mix, setLightness } from 'polished';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IAlertProps {
  theme: ITheme;
  color?: string;
}

function getBaseColor(props: IAlertProps) {
  return props.theme.colors[props.color || 'main'];
}

function getAlertBorderColor(props: IAlertProps) {
  return setLightness(0.8, getBaseColor(props));
}

function getAlertBackground(props: IAlertProps) {
  return setLightness(0.9, getBaseColor(props));
}

function getAlertTextColor(props: IAlertProps) {
  return setLightness(0.2, getBaseColor(props));
}

const Alert = styled.div<IAlertProps>`
  background-color: ${getAlertBackground};
  border: 2px solid ${getAlertBorderColor};
  border-radius: ${props => props.theme.borderRadius};
  padding: 10px;
  margin-bottom: 10px;
  color: ${getAlertTextColor};

  &:last-of-type {
    margin-bottom: 0;
  }
`;

Alert.displayName = 'Alert';

export default Alert;
