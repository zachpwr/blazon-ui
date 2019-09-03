import { getLuminance } from 'polished';
import styled from 'styled-components';

import { ITheme } from '../theme';

const DEFAULT_COLOR = 'main';

export interface IPillProps {
  theme: ITheme;
  color?: string;
}

function getPillColor(props: IPillProps): string {
  return props.theme.colors[props.color || DEFAULT_COLOR];
}

function getPillTextColor(props: IPillProps): string {
  const bgColor = getPillColor(props);
  return getLuminance(bgColor) > 0.5 ? props.theme.colors.darkGray : props.theme.colors.white;
}

const Pill = styled.div<IPillProps>`
  background-color: ${getPillColor};
  color: ${getPillTextColor};
  margin: 0 5px 10px 0;
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

  &:last-of-type {
    margin-right: 0;
  }
`;

Pill.displayName = 'Pill';

export default Pill;
