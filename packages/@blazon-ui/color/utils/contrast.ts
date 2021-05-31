import { RGB, SRGB, RelativeLuminance, ContrastRatio } from '../types/units';

/**
 * Converts an RGB color to an sRGB color for contrast calculations.
 *
 * `sRGB = [R / 255, G / 255, B / 255]`
 *
 * More info: https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
const rgbToSRGB = (rgbColor: RGB): SRGB => ['srgb', rgbColor[1] / 255, rgbColor[2] / 255, rgbColor[3] / 255];

/**
 * Calculates the relative luminance of an SRGB color.
 *
 * More info: https://www.w3.org/TR/WCAG20-TECHS/G17.html
 */
const getRelativeLuminanceForSRGBColor = ([, red, green, blue]: SRGB): RelativeLuminance => {
  const R = red <= 0.03928 ? red / 12.92 : Math.pow((red + 0.055) / 1.055, 2.4);
  const G = green <= 0.03928 ? green / 12.92 : Math.pow((green + 0.055) / 1.055, 2.4);
  const B = blue <= 0.03928 ? blue / 12.92 : Math.pow((blue + 0.055) / 1.055, 2.4);
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
export const getContrastRatioForRGBColors = (colorA: RGB, colorB: RGB): ContrastRatio =>
  getContrastRatioForRelativeLuminances(
    getRelativeLuminanceForSRGBColor(rgbToSRGB(colorA)),
    getRelativeLuminanceForSRGBColor(rgbToSRGB(colorB)),
  );
