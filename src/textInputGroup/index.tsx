import * as React from 'react';
import styled from 'styled-components';

import { ITheme } from '../theme';

import TextInput from '../textInput';

export interface ITextInputGroupProps {
  theme: ITheme;
  children?: React.ReactChild | React.ReactChild[];
}

export class UnstyledTextInputGroup extends React.PureComponent<ITextInputGroupProps> {
  public static displayName = 'UnstyledTextInputGroup';

  public componentDidMount() {
    // tslint:disable-next-line: no-console
    console.warn('[BLAZON UI] <TextInputGroup /> is deprecated and will be removed in v1.0.0');
  }

  public render() {
    const { children, ...props } = this.props;
    return <div {...props}>{children}</div>;
  }
}

const TextInputGroup = styled(UnstyledTextInputGroup)<ITextInputGroupProps>`
  ${TextInput} {
    border-radius: 0;
    z-index: 0;
    position: relative;
    margin-top: -2px;

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
