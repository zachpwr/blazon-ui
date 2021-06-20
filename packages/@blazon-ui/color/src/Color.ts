import { Angle, Hex, HSL, Percentage, RGB } from './types/units';
import { hslToRgb, rgbToHsl, rgbToHex, hslToHex, hexToRgb, hexToHsl } from './utils/conversion';

const clampInt = (min: number, int: number, max: number) => Math.min(max, Math.max(min, int));

/**
 * Immutable color type. Represents a particular color and contains helper
 * methods for creating modified versions of that color.
 */
export class Color {
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

  constructor(
    /** The RGB/HSL/Hex representation of the new `Color` */
    from?: RGB | HSL | Hex,
  ) {
    if (typeof from === 'string') {
      // From Hex
      this.hex = from;
      this.rgb = hexToRgb(from);
      this.hsl = hexToHsl(from);
    } else if ('red' in from) {
      // From RGB
      this.rgb = from;
      this.hsl = rgbToHsl(from);
      this.hex = rgbToHex(from);
    } else if ('hue' in from) {
      // From HSL
      this.hsl = from;
      this.rgb = hslToRgb(from);
      this.hex = hslToHex(from);
    }
  }

  /**
   * Returns a copy of the current `Color` with the provided `hue`
   */
  withHue = (hue: Angle) =>
    new Color({
      ...this.hsl,
      hue,
    });

  /**
   * Returns a copy of the current `Color` with the `hue` shifted by `amount`
   */
  shiftHue = (amount: Angle) => this.withHue(this.hsl.hue + (amount % 360));

  /**
   * Returns a copy of the current `Color` with the provided `saturation`
   */
  withSaturation = (saturation: Percentage) =>
    new Color({
      ...this.hsl,
      saturation,
    });

  /**
   * Returns a copy of the current `Color` with the `saturation` scaled by `amount`
   */
  saturate = (amount: Percentage) => this.withSaturation(clampInt(0, this.hsl.saturation * (amount / 100), 100));

  /**
   * Returns a copy of the current `Color` with the provided `lightness`
   */
  withLightness = (lightness: Percentage) =>
    new Color({
      ...this.hsl,
      lightness,
    });

  /**
   * Returns a copy of the current `Color` with the `lightness` scaled by `amount`
   */
  lighten = (amount: Percentage) => this.withLightness(clampInt(0, this.hsl.lightness * (amount / 100), 100));
}
