import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IProgressBarProps {
  theme: ITheme;
  progress: number;
  color?: string;
}

function getProgressBarColor(props: IProgressBarProps) {
  return props.theme.colors[props.color || props.theme.neutralColor].medium;
}

const ProgressBar = styled.div.attrs<IProgressBarProps>(props => ({
  'aria-valuemax': 100,
  'aria-valuemin': 0,
  'aria-valuenow': props.progress,
  role: 'progressbar',
}))<IProgressBarProps>`
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
