import { mix, transparentize } from 'polished';
import styled from 'styled-components';

export interface ICheckboxProps {
  theme: DefaultTheme;
  checked?: boolean;
}

function getBorderColor(props: ICheckboxProps) {
  return props.checked ? props.theme.colors.main : props.theme.colors.secondary;
}

function getHoverBorderColor(props: ICheckboxProps) {
  return mix(props.checked ? 0.9 : 0.1, props.theme.colors.main, props.theme.colors.secondary);
}

const Checkbox = styled.button<ICheckboxProps>`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${getBorderColor};
  height: 1.5em;
  width: 1.5em;
  padding: 0;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  transition: 0.25s border-color ease-in-out;
  position: relative;
  vertical-align: middle;

  &:hover {
    border-color: ${getHoverBorderColor};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${props => transparentize(0.75, getBorderColor(props))};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    border-color: ${getBorderColor};
  }

  &::before {
    content: '';
    width: 33%;
    height: 66%;
    border-width: 0 1px 1px 0;
    border-color: ${props => props.theme.colors.main};
    border-style: solid;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    margin-top: -0.125em;
    opacity: ${props => (props.checked ? 1 : 0)};
    transition: 0.25s opacity ease-in-out;
  }
`;

Checkbox.displayName = 'Checkbox';

export default Checkbox;
