import { setLightness } from 'polished';
import styled from 'styled-components';

import { ITheme } from '../theme';

const DEFAULT_COLOR = 'main';

export interface IPillProps {
  theme: ITheme;
  color?: string;
}

function getBaseColor(props: IPillProps) {
  return props.theme.colors[props.color || 'main'];
}

function getPillBorderColor(props: IPillProps) {
  return setLightness(0.8, getBaseColor(props));
}

function getPillBackground(props: IPillProps) {
  return setLightness(0.9, getBaseColor(props));
}

function getPillTextColor(props: IPillProps) {
  return setLightness(0.2, getBaseColor(props));
}

const Pill = styled.div<IPillProps>`
  background-color: ${getPillBackground};
  color: ${getPillTextColor};
  margin-right: 5px;
  font-size: 1em;
  padding: 0.25em 0.75em;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.0625em;
  vertical-align: middle;
  cursor: default;
  display: inline-block;
  transition: 0.25s color ease-in-out, 0.25s background-color ease-in-out;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  border: 2px solid ${getPillBorderColor};

  &:last-of-type {
    margin-right: 0;
  }
`;

Pill.displayName = 'Pill';

export default Pill;
