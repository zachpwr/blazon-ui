import { DefaultTheme } from 'styled-components';

export interface ITheme {
  borderRadius: string;
  fontImportUrl?: string | string[];
  fontFamily: string;

  colors: { [index: string]: string };
}

const theme: DefaultTheme & ITheme = {
  borderRadius: '5px',
  fontFamily: "'Roboto', sans-serif",
  fontImportUrl: [
    'https://fonts.googleapis.com/css?family=Roboto:400,600,700',
    'https://fonts.googleapis.com/css?family=Roboto+Mono:500',
  ],

  colors: {
    darkGray: '#424242',
    error: '#ef5350',
    main: '#304ffe',
    secondary: '#e0e0e0',
    success: '#4caf50',
    warning: '#ffb300',
    white: '#fff',
  },
};

export default theme;
