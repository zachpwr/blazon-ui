import { create } from '@storybook/theming';

import theme from '../src/theme';

import brandImage from '../assets/storybookLogo.png';

export default create({
  base: 'light',

  brandTitle: 'Blazon UI',
  brandUrl: 'https://www.npmjs.com/package/blazon-ui',
  brandImage: brandImage,
  fontBase: theme.fontFamily,
  colorPrimary: theme.colors.darkGray,
  colorSecondary: theme.colors.main,
});
