import styled from 'styled-components';

import TextInput from '../textInput';

export interface ITextInputGroupProps {
  theme: DefaultTheme;
}

const TextInputGroup = styled.div<ITextInputGroupProps>`
  ${TextInput} {
    border-radius: 0;
    z-index: 0;
    position: relative;
    margin-top: -1px;

    &:first-of-type {
      border-top-left-radius: ${props => props.theme.borderRadius};
      border-top-right-radius: ${props => props.theme.borderRadius};
      margin-top: 0;
    }

    &:last-of-type {
      border-bottom-left-radius: ${props => props.theme.borderRadius};
      border-bottom-right-radius: ${props => props.theme.borderRadius};
    }

    &:hover {
      z-index: 1;
    }

    &:focus {
      z-index: 2;
    }
  }
`;

TextInputGroup.displayName = 'TextInputGroup';

export default TextInputGroup;
