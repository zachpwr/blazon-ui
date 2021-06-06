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

  withRGB(rgb: RGB): ColorInterface;
  withHSL: (hsl: HSL) => ColorInterface;
  withHex: (hex: Hex) => ColorInterface;

  withHue: (hue: Angle) => ColorInterface;
  shiftHue: (amount: Angle) => ColorInterface;

  withSaturation: (saturation: Percentage) => ColorInterface;
  saturate: (amount: Percentage) => ColorInterface;

  withLightness: (lightness: Percentage) => ColorInterface;
  lighten: (amount: Percentage) => ColorInterface;
}

export type RelativeLuminance = number;

export type ContrastRatio = number;
