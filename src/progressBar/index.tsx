import { setLightness } from 'polished';
import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IProgressBarProps {
  theme: ITheme;
  progress: number;
  color?: string;
}

function getBaseColor(props: IProgressBarProps) {
  if (props.color) {
    return props.theme.colors[props.color];
  }

  return props.theme.colors.main;
}

function getProgressBarColor(props: IProgressBarProps) {
  return setLightness(0.6, getBaseColor(props));
}

const ProgressBar = styled.div<IProgressBarProps>`
  position: relative;
  border-radius: ${props => props.theme.borderRadius};
  height: 0.5em;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px ${getProgressBarColor}, 0 0 0 1px ${getProgressBarColor};

  &::before {
    width: ${props => String(props.progress)}%;
    transition: 0.25s width ease-in-out;
    display: block;
    content: '';
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: ${getProgressBarColor};
  }
`;

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
