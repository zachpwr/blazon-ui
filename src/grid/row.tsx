import styled from 'styled-components';

import { ITheme } from '../theme';

export enum ERowAlignmentModes {
  start = 'flex-start',
  end = 'flex-end',
  center = 'center',
  baseline = 'baseline',
  stretch = 'stretch',
}

export interface IRowProps {
  theme: ITheme;
  noGutter?: boolean;
  alignmentMode?: ERowAlignmentModes;
}

export const Row = styled.div<IRowProps>`
  display: flex;
  padding: ${props => (props.noGutter ? 0 : '1em')} 0;
  align-items: ${props => props.alignmentMode};
  flex-wrap: nowrap;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }
`;

export default Row;
