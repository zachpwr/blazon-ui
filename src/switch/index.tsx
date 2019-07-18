import styled from 'styled-components';
import { transparentize } from 'polished';

export interface ISwitchProps {
  theme: DefaultTheme;
  on?: boolean;
  disabled?: boolean;
}

function getSwitchColor(props: ISwitchProps) {
  return props.on ? props.theme.colors.main : props.theme.colors.secondary;
}

const Switch = styled.button<ISwitchProps>`
  height: 1em;
  width: 2.5em;
  background-color: ${getSwitchColor};
  border: 0;
  outline: 0;
  height: 1em;
  border-radius: 100px;
  padding: 0.75em 1em;
  font-size: 1em;
  line-height: 1em;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s background-color ease-in-out;
  display: inline-block;
  vertical-align: middle;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    box-shadow: 0 0 0 2px ${props => transparentize(0.75, getSwitchColor(props))};
  }

  &::before {
    width: 1em;
    height: 1em;
    padding: 0.5em;
    border-radius: 100px;
    background-color: ${props => props.theme.colors.white};
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    right: ${props => (props.on ? '0.25em' : 'calc(100% - 2.25em)')};
    transition: 0.25s right ease-in-out;
    transform: translateY(-50%);
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background-color: ${getSwitchColor};
  }
`;

Switch.displayName = 'Switch';

export default Switch;
