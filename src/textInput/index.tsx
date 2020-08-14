import { mix, transparentize } from 'polished';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface ITextInputProps {
  theme: ITheme;
  color?: string;
  error?: boolean;
}

function getBorderColor(props: ITextInputProps) {
  if (props.error) {
    return props.theme.colors[props.theme.errorColor];
  }

  return props.theme.colors[props.theme.neutralColor];
}

function getFocusedBorderColor(props: ITextInputProps) {
  if (props.error) {
    return props.theme.colors[props.theme.errorColor];
  }

  return props.theme.colors[props.color || props.theme.neutralColor];
}

const TextInput = styled.input<ITextInputProps>`
  background-color: #fff;
  border: 2px solid ${props => getBorderColor(props).medium};
  border-radius: ${props => props.theme.borderRadius};
  transition: 0.25s border-color ease-in-out, 0.75s box-shadow ease-in-out;
  cursor: text;
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1em;
  padding: 0.75em 1em;
  outline: 0;
  appearance: none;
  height: 2.5em;

  &::placeholder {
    color: ${props => props.theme.colors[props.theme.neutralColor].medium};
  }

  &:hover {
    border-color: ${props => getFocusedBorderColor(props).medium};
  }

  &:focus {
    border-color: ${props => getFocusedBorderColor(props).medium};
    box-shadow: 0 0 0 2px ${props => mix(0.15, getFocusedBorderColor(props).medium, getFocusedBorderColor(props).light)};
    transition: 0.25s border-color ease-in-out, 0.25s box-shadow ease-in-out;
  }

  &:disabled {
    border-color: ${props => props.theme.colors[props.theme.neutralColor].medium};
    background-color: ${props => props.theme.colors[props.theme.neutralColor].light};
    cursor: default;
  }
`;

TextInput.displayName = 'TextInput';

export default TextInput;
