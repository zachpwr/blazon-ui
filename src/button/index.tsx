import { getLuminance, mix, transparentize } from 'polished';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IButtonProps {
  theme: ITheme;
  color?: string;
}

function getBaseColor(props: IButtonProps) {
  return props.theme.colors[props.color || props.theme.neutralColor];
}

function getButtonTextColor(props: IButtonProps): string {
  const bgColor = getBaseColor(props).medium;
  return getLuminance(bgColor) > 0.5 ? '#000' : '#fff';
}

const Button = styled.button<IButtonProps>`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => getBaseColor(props).medium};
  color: ${getButtonTextColor};
  border: 0;
  cursor: pointer;
  outline: 0;
  font-size: 1em;
  font-weight: 600;
  line-height: 1em;
  padding: 0.75em 1em;
  transition: 0.25s background-color ease-in-out;
  margin-right: 5px;
  user-select: none;
  white-space: nowrap;
  -webkit-tap-highlight-color: ${props => transparentize(0.5, getBaseColor(props).medium)};
  margin-bottom: 5px;

  &:hover {
    background-color: ${props => mix(0.75, getBaseColor(props).medium, getBaseColor(props).light)};
  }

  &:active {
    transition: 0.05s background-color ease-in-out;
    background-color: ${props => mix(0.85, getBaseColor(props).medium, getBaseColor(props).light)};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => mix(0.15, getBaseColor(props).medium, getBaseColor(props).light)};
  }

  &:disabled {
    cursor: default;
    opacity: 0.75;
    background-color: ${props => getBaseColor(props).medium};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

Button.displayName = 'Button';

export default Button;
