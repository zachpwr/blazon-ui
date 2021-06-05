export type RGB = {
  red: number;
  green: number;
  blue: number;
};

export type Angle = number;
export type Percentage = number;
export type HSL = {
  hue: Angle;
  saturation: Percentage;
  lightness: Percentage;
};

export type Hex = `#${string}`;

export interface ColorInterface {
  readonly rgb: RGB;
  readonly hsl: HSL;
  readonly hex: Hex;

  setRGB(rgb: RGB): ColorInterface;
  setHSL: (hsl: HSL) => ColorInterface;

  setHue: (hue: Angle) => ColorInterface;
  shiftHue: (amount: Angle) => ColorInterface;

  setSaturation: (saturation: Percentage) => ColorInterface;
  saturate: (amount: Percentage) => ColorInterface;

  setLightness: (lightness: Percentage) => ColorInterface;
  lighten: (amount: Percentage) => ColorInterface;
}

export type RelativeLuminance = number;

export type ContrastRatio = number;
