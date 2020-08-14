import { getLuminance, mix, transparentize } from 'polished';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface ICheckboxProps {
  theme: ITheme;
  checked?: boolean;
  color?: string;
}

function getBaseColor(props: ICheckboxProps) {
  return props.theme.colors[props.color || props.theme.neutralColor];
}

function getBackgroundColor(props: ICheckboxProps) {
  return props.checked ? getBaseColor(props).medium : '#fff';
}

function getCheckColor(props: ICheckboxProps) {
  return props.checked
    ? getLuminance(getBaseColor(props).medium) > 0.5
      ? '#000'
      : '#fff'
    : getBaseColor(props).medium;
}

const Checkbox = styled.button.attrs<ICheckboxProps>(props => ({
  'aria-checked': !!props.checked,
  role: 'checkbox',
}))<ICheckboxProps>`
  border-radius: 1em;
  background-color: ${getBackgroundColor};
  border: 2px solid ${props => getBaseColor(props).medium};
  height: 2em;
  width: 2em;
  padding: 0;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  transition: 0.25s border-color ease-in-out, 0.25s background-color ease-in-out;
  position: relative;
  vertical-align: middle;
  font-size: 1em;
  -webkit-tap-highlight-color: ${props => transparentize(0.5, getBaseColor(props).medium)};

  &:hover {
    border-color: ${props => (props.checked ? getBaseColor(props).dark : getBaseColor(props).medium)};

    &::before {
      opacity: 1;
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => mix(0.15, getBaseColor(props).medium, getBaseColor(props).light)};
  }

  &:active {
    transition: 0.05s background-color ease-in-out;
    background-color: ${props => mix(0.85, getBackgroundColor(props), getBaseColor(props).light)};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    border-color: ${props => getBaseColor(props).medium};

    &::before {
      opacity: ${props => (props.checked ? 1 : 0)};
    }
  }

  &::before {
    content: '';
    width: 25%;
    height: 50%;
    border-width: 0 2px 2px 0;
    border-color: ${getCheckColor};
    border-style: solid;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    margin-top: -0.125em;
    opacity: ${props => (props.checked ? 1 : 0)};
    transition: 0.25s opacity ease-in-out, 0.25s border-color ease-in-out;
  }
`;

Checkbox.displayName = 'Checkbox';

export default Checkbox;
