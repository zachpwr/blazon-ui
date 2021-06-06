import { Angle, ColorInterface, Hex, HSL, Percentage, RGB } from './types/units';
import { hslToRgb, rgbToHsl, rgbToHex, hslToHex, hexToRgb, hexToHsl } from './utils/conversion';

const clampInt = (min: number, int: number, max: number) => Math.min(max, Math.max(min, int));

export class Color implements ColorInterface {
  readonly rgb: RGB = {
    red: 0,
    green: 0,
    blue: 0,
  };
  readonly hsl: HSL = {
    hue: 0,
    saturation: 0,
    lightness: 0,
  };
  readonly hex: Hex = '#000';

  constructor(from?: RGB | HSL | Hex) {
    if (typeof from === 'string') {
      this.hex = from;
      this.rgb = hexToRgb(from);
      this.hsl = hexToHsl(from);
    } else if ('red' in from) {
      this.rgb = from;
      this.hsl = rgbToHsl(from);
      this.hex = rgbToHex(from);
    } else if ('hue' in from) {
      this.hsl = from;
      this.rgb = hslToRgb(from);
      this.hex = hslToHex(from);
    }
  }

  withRGB = (rgb: RGB) => new Color(rgb);
  withHSL = (hsl: HSL) => new Color(hsl);
  withHex = (hex: Hex) => new Color(hex);

  withHue = (hue: Angle) =>
    this.withHSL({
      ...this.hsl,
      hue,
    });
  shiftHue = (amount: Angle) => this.withHue(this.hsl.hue + (amount % 360));

  withSaturation = (saturation: Percentage) =>
    this.withHSL({
      ...this.hsl,
      saturation,
    });
  saturate = (amount: Percentage) => this.withSaturation(clampInt(0, this.hsl.saturation * (amount / 100), 100));

  withLightness = (lightness: Percentage) =>
    this.withHSL({
      ...this.hsl,
      lightness,
    });
  lighten = (amount: Percentage) => this.withLightness(clampInt(0, this.hsl.lightness * (amount / 100), 100));
}
