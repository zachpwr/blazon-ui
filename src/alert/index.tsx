import { mix } from 'polished';
import styled from 'styled-components';

export interface IAlertProps {
  theme: DefaultTheme;
  color?: string;
}

function getAlertBorderColor(props: IAlertProps) {
  return props.theme.colors[props.color || 'main'];
}

function getAlertBackground(props: IAlertProps) {
  return mix(0.5, props.theme.colors.white, getAlertBorderColor(props));
}

function getAlertTextColor(props: IAlertProps) {
  return mix(0.75, props.theme.colors.darkGray, getAlertBorderColor(props));
}

const Alert = styled.div<IAlertProps>`
  background-color: ${getAlertBackground};
  border: 1px solid ${getAlertBorderColor};
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
