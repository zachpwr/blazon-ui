import { DefaultTheme } from 'styled-components';

export interface IThemeColorDefinition {
  dark: string;
  medium: string;
  light: string;
}

export interface ITheme {
  borderRadius: string;
  fontImportUrl?: string | string[];
  fontFamily: string;

  colors: { [index: string]: IThemeColorDefinition };
  errorColor: string;
  neutralColor: string;
}

const theme: DefaultTheme & ITheme = {
  borderRadius: '5px',
  fontFamily: "'Roboto', sans-serif",
  fontImportUrl: [
    'https://fonts.googleapis.com/css?family=Roboto:400,600,700',
    'https://fonts.googleapis.com/css?family=Roboto+Mono:500',
  ],

  colors: {
    blue: {
      dark: '#001066',
      light: '#ccd4ff',
      medium: '#304ffe',
    },
    gray: {
      dark: '#333',
      light: '#e6e6e6',
      medium: '#808080',
    },
    green: {
      dark: '#1f4721',
      light: '#dbf0dc',
      medium: '#49A74C',
    },
    red: {
      dark: '#5d0a09',
      light: '#fbd1d0',
      medium: '#E91916',
    },
    yellow: {
      dark: '#664800',
      light: '#fff0cc',
      medium: '#C28800',
    },
  },

  errorColor: 'red',
  neutralColor: 'gray',
};

export default theme;
