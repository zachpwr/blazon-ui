import styled from 'styled-components';

export interface IProgressBarProps {
  theme: DefaultTheme;
  progress: Number;
  color?: string;
}

function getProgressBarColor(props: IProgressBarProps) {
  if (props.color) {
    return props.theme.colors[props.color];
  }

  return props.theme.colors.main;
}

const ProgressBar = styled.div<IProgressBarProps>`
  position: relative;
  border-radius: ${props => props.theme.borderRadius};
  height: 0.5em;
  overflow: hidden;
  transition: 0.25s width ease-in-out;
  box-shadow: inset 0 0 0 1px ${props => props.theme.colors.secondary};

  &::before {
    width: ${props => String(props.progress)}%;
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
