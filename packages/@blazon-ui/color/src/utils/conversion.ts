import { Hex, HSL, RGB } from '../types/units';

/**
 * Converts an RGB color into the HSL color space
 *
 * https://en.wikipedia.org/wiki/HSL_and_HSV
 */
export const rgbToHsl = ({ red, green, blue }: RGB): HSL => {
  const [sRed, sGreen, sBlue] = [red / 255, green / 255, blue / 255];
  const sMaxComponent = Math.max(sRed, sGreen, sBlue);
  const sMinComponent = Math.min(sRed, sGreen, sBlue);
  const sMaxMinComponentDelta = sMaxComponent - sMinComponent;

  let sHue;
  if (sMaxMinComponentDelta === 0) {
    sHue = 0;
  } else if (sMaxComponent === sRed) {
    sHue = 60 * (((sGreen - sBlue) / sMaxMinComponentDelta) % 6);
  } else if (sMaxComponent === sGreen) {
    sHue = 60 * ((sBlue - sRed) / sMaxMinComponentDelta + 2);
  } else {
    sHue = 60 * ((sRed - sGreen) / sMaxMinComponentDelta + 4);
  }

  const sLightness = (sMaxComponent + sMinComponent) / 2;

  const sSaturation = sMaxMinComponentDelta === 0 ? 0 : sMaxMinComponentDelta / (1 - Math.abs(2 * sLightness - 1));

  return {
    hue: Math.round((360 + sHue) % 360),
    saturation: Math.round(sSaturation * 100),
    lightness: Math.round(sLightness * 100),
  };
};

/**
 * Converts an HSL color into the RGB color space
 *
 * https://en.wikipedia.org/wiki/HSL_and_HSV
 */
export const hslToRgb = ({ hue, saturation, lightness }: HSL): RGB => {
  const [sHue, sSaturation, sLightness] = [hue % 360, saturation / 100, lightness / 100];
  const chroma = (1 - Math.abs(2 * sLightness - 1)) * sSaturation;
  const sHueChroma = chroma * (1 - Math.abs(((sHue / 60) % 2) - 1));

  let sRed = 0,
    sGreen = 0,
    sBlue = 0;

  if (sHue >= 0 && sHue < 60) {
    sRed = chroma;
    sGreen = sHueChroma;
    sBlue = 0;
  } else if (sHue >= 60 && sHue < 120) {
    sRed = sHueChroma;
    sGreen = chroma;
    sBlue = 0;
  } else if (sHue >= 120 && sHue < 180) {
    sRed = 0;
    sGreen = chroma;
    sBlue = sHueChroma;
  } else if (sHue >= 180 && sHue < 240) {
    sRed = 0;
    sGreen = sHueChroma;
    sBlue = chroma;
  } else if (sHue >= 240 && sHue < 300) {
    sRed = sHueChroma;
    sGreen = 0;
    sBlue = chroma;
  } else {
    sRed = chroma;
    sGreen = 0;
    sBlue = sHueChroma;
  }

  // Extra multiples/divisions by 100 to avoid floating point imprecision
  const sLightnessChromaOffset = (100 * sLightness - (100 * chroma) / 2) / 100;

  return {
    red: Math.abs(Math.round((sRed + sLightnessChromaOffset) * 255)),
    green: Math.abs(Math.round((sGreen + sLightnessChromaOffset) * 255)),
    blue: Math.abs(Math.round((sBlue + sLightnessChromaOffset) * 255)),
  };
};

/**
 * Converts an Hex color into the RGB color space
 */
export const hexToRgb = (hex: Hex): RGB => {
  const sRed = hex.length === 4 ? `${hex[1]}${hex[1]}` : hex.slice(1, 3);
  const sGreen = hex.length === 4 ? `${hex[2]}${hex[2]}` : hex.slice(3, 5);
  const sBlue = hex.length === 4 ? `${hex[3]}${hex[3]}` : hex.slice(5, 7);

  try {
    return {
      red: parseInt(sRed, 16),
      green: parseInt(sGreen, 16),
      blue: parseInt(sBlue, 16),
    };
  } catch (e) {
    throw new Error(`Invalid hex code ${hex}. ${e.message}`);
  }
};

const minifyHex = (hex: Hex): Hex => {
  if (hex.length === 7 && hex[1] === hex[2] && hex[3] === hex[4] && hex[5] === hex[6]) {
    const sHex = `${hex[1]}${hex[3]}${hex[5]}`;
    return `#${sHex}`;
  }

  return hex;
};

/**
 * Converts an RGB color into the hex color space
 */
export const rgbToHex = (rgb: RGB): Hex => {
  const sRed = rgb.red.toString(16).padStart(2, '0');
  const sGreen = rgb.green.toString(16).padStart(2, '0');
  const sBlue = rgb.blue.toString(16).padStart(2, '0');
  const sHex = `${sRed}${sGreen}${sBlue}`;
  return minifyHex(`#${sHex}`);
};

export const hexToHsl = (hex: Hex): HSL => rgbToHsl(hexToRgb(hex));
export const hslToHex = (hsl: HSL): Hex => rgbToHex(hslToRgb(hsl));
