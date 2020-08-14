import { mix } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface ISwitchProps {
  theme: ITheme;
  on?: boolean;
  onText?: string;
  offText?: string;
  disabled?: boolean;
  color?: string;
}

function getSwitchColor(props: ISwitchProps) {
  return props.on
    ? props.theme.colors[props.color || props.theme.neutralColor]
    : props.theme.colors[props.theme.neutralColor];
}

const SwitchLever = styled(({ on, ...props }) => (
  <div {...props}>
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" />
  </div>
))`
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: ${props => (props.on ? 100 : 0)}%;
  transform: translateX(${props => (props.on ? -100 : 0)}%);
  border-radius: 100px;
  transition: 0.25s left ease-in-out, 0.25s transform ease-in-out;

  img {
    height: 100%;
  }

  &::before {
    content: "${props =>
      props.on
        ? (props.onText && props.onText.substr(0, 3)) || 'On'
        : (props.offText && props.offText.substr(0, 3)) || 'Off'}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 0.75em;
    display: block;
    font-size: 0.75em;
    text-transform: uppercase;
    font-weight: 500;
    color: ${props => getSwitchColor(props).medium};
    font-family: 'Roboto Mono', monospace;
  }
`;

const Switch = styled(props => (
  <button role="switch" aria-checked={props.on} {...props}>
    <SwitchLever on={props.on} onText={props.onText} offText={props.offText} color={props.color} />
  </button>
))`
  height: 0.5em;
  width: 2.5em;
  background-color: ${props => getSwitchColor(props).medium};
  border: 2px solid ${props => getSwitchColor(props).medium};
  outline: 0;
  border-radius: 100px;
  padding: 0.75em 1em;
  font-size: 1em;
  line-height: 1em;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out, 0.25s border-color ease-in-out;
  display: inline-block;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 2px ${props => mix(0.15, getSwitchColor(props).medium, getSwitchColor(props).light)};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background-color: ${props => getSwitchColor(props).medium};
  }
`;

Switch.displayName = 'Switch';

export default Switch;
