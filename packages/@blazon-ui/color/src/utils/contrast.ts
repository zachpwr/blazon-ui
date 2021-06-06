import { RelativeLuminance, ContrastRatio, ColorInterface } from '../types/units';

/**
 * Calculates the relative luminance of a color.
 *
 * More info: https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
const getRelativeLuminanceForColor = ({ rgb }: ColorInterface): RelativeLuminance => {
  const [sRed, sGreen, sBlue] = [rgb.red / 255, rgb.green / 255, rgb.blue / 255];
  const R = sRed <= 0.03928 ? sRed / 12.92 : Math.pow((sRed + 0.055) / 1.055, 2.4);
  const G = sGreen <= 0.03928 ? sGreen / 12.92 : Math.pow((sGreen + 0.055) / 1.055, 2.4);
  const B = sBlue <= 0.03928 ? sBlue / 12.92 : Math.pow((sBlue + 0.055) / 1.055, 2.4);
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

/**
 * Calculates the ratio of relative luminances of text and the background pixels
 * immediately next to the text.
 *
 * More info: https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
const getContrastRatioForRelativeLuminances = (colorA: RelativeLuminance, colorB: RelativeLuminance): ContrastRatio =>
  colorA > colorB ? (colorA + 0.05) / (colorB + 0.05) : (colorB + 0.05) / (colorA + 0.05);

/**
 * Calculates the contrast ratio of two colors.
 *
 * More info: https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
export const getContrastRatioForColors = (colorA: ColorInterface, colorB: ColorInterface): ContrastRatio =>
  getContrastRatioForRelativeLuminances(getRelativeLuminanceForColor(colorA), getRelativeLuminanceForColor(colorB));
