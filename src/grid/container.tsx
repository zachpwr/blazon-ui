import styled from 'styled-components';

import { ITheme } from '../theme';

export interface IContainerProps {
  theme: ITheme;
  fluid?: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  position: relative;
  margin: 0 auto;

  @media only screen and (min-width: 576px) {
    width: ${props => (props.fluid ? null : '540px')};
  }

  @media only screen and (min-width: 768px) {
    width: ${props => (props.fluid ? null : '720px')};
  }

  @media only screen and (min-width: 992px) {
    width: ${props => (props.fluid ? null : '960px')};
  }

  @media only screen and (min-width: 1200px) {
    width: ${props => (props.fluid ? null : '1140px')};
  }
`;

export default Container;
