import styled from 'styled-components';

import { ITheme } from '../theme';

export enum EColumnSpanMode {
  fitSpace,
  fillSpace,
}

export interface IColumnProps {
  theme: ITheme;
  colSpan?: number | number[];
  noGutter?: boolean;
  spanMode?: EColumnSpanMode;
  noWrap?: boolean;
  minWidth?: string;
}

function getColSpan(props: IColumnProps, breakpointIndex?: number) {
  // If colSpan is a 5-int array, provide responsive colSpan for breakpoint
  if (Array.isArray(props.colSpan)) {
    if (props.colSpan.length !== 5) {
      throw new Error("Prop 'colSpan' must be a integer or a 5-integer array.");
    }

    return props.colSpan[breakpointIndex || 0];
  }

  // If colSpan is not an array, don't provide responsive colSpans
  if (breakpointIndex !== undefined) {
    return null;
  }

  return props.colSpan;
}

export const Column = styled.span<IColumnProps>`
  display: ${props => (getColSpan(props) === 0 ? 'none' : 'inline-block')};
  padding: 0 ${props => (props.noGutter ? 0 : '1em')};
  flex-grow: ${props => (props.spanMode === EColumnSpanMode.fitSpace ? 0 : getColSpan(props) || 1)};
  flex-shrink: ${props => (props.spanMode === EColumnSpanMode.fitSpace ? 1 : 0)};
  flex-basis: 0;
  white-space: ${props => (props.noWrap ? 'nowrap' : null)};
  min-width: ${props => props.minWidth};
  max-width: 100%;

  @media only screen and (max-width: 576px) {
    display: ${props => (getColSpan(props, 0) === 0 ? 'none' : 'inline-block')};
    flex-grow: ${props => (props.spanMode === EColumnSpanMode.fitSpace ? null : getColSpan(props, 0))};
  }

  @media only screen and (min-width: 576px) {
    display: ${props => (getColSpan(props, 1) === 0 ? 'none' : 'inline-block')};
    flex-grow: ${props => (props.spanMode === EColumnSpanMode.fitSpace ? null : getColSpan(props, 1))};
  }

  @media only screen and (min-width: 768px) {
    display: ${props => (getColSpan(props, 2) === 0 ? 'none' : 'inline-block')};
    flex-grow: ${props => (props.spanMode === EColumnSpanMode.fitSpace ? null : getColSpan(props, 2))};
  }

  @media only screen and (min-width: 992px) {
    display: ${props => (getColSpan(props, 3) === 0 ? 'none' : 'inline-block')};
    flex-grow: ${props => (props.spanMode === EColumnSpanMode.fitSpace ? null : getColSpan(props, 3))};
  }

  @media only screen and (min-width: 1200px) {
    display: ${props => (getColSpan(props, 4) === 0 ? 'none' : 'inline-block')};
    flex-grow: ${props => (props.spanMode === EColumnSpanMode.fitSpace ? null : getColSpan(props, 4))};
  }

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }
`;

export default Column;
