import { createGlobalStyle } from 'styled-components';

export interface IGlobalStyleProps {
  theme: DefaultTheme;
}

function getFontImport(props: IGlobalStyleProps) {
  if (!props.theme.fontImportUrl) {
    return '';
  }

  return `@import url('${props.theme.fontImportUrl}');`;
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  ${getFontImport}

  * {
    font-family: ${props => props.theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 16px;
  }
`;

GlobalStyle.displayName = 'GlobalStyle';

export default GlobalStyle;
