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

  html, body {
    font-family: ${props => props.theme.fontFamily};
  }
`;

GlobalStyle.displayName = 'GlobalStyle';

export default GlobalStyle;
