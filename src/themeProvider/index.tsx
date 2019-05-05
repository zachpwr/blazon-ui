import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import defaultTheme from '../theme';

export interface IThemeProviderProps {
  theme?: DefaultTheme;
  children: React.ReactChild;
}

const ThemeProvider = (props: IThemeProviderProps) => (
  <StyledThemeProvider theme={props.theme || defaultTheme}>{props.children}</StyledThemeProvider>
);

ThemeProvider.displayName = 'ThemeProvider';

export default ThemeProvider;
