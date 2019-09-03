import { createGlobalStyle } from 'styled-components';

import { ITheme } from '../theme';

export interface IGlobalStyleProps {
  theme: ITheme;
}

function getFontImport(props: IGlobalStyleProps) {
  if (!props.theme.fontImportUrl) {
    return '';
  }

  if (typeof props.theme.fontImportUrl === 'string') {
    return `@import url('${props.theme.fontImportUrl}');`;
  }

  if (Array.isArray(props.theme.fontImportUrl)) {
    return (props.theme.fontImportUrl as string[]).map(url => `@import url('${url}');`).join('');
  }
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  ${getFontImport}

  * {
    font-family: ${props => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 14px;
  }

  @media only screen and (max-device-width : 1024px) {
    html {
      font-size: 16px;
    }
  }
`;

GlobalStyle.displayName = 'GlobalStyle';

export default GlobalStyle;
