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

export type RelativeLuminance = number;

export type ContrastRatio = number;
