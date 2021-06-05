import { Angle, ColorInterface, HSL, Percentage, RGB } from './types/units';
import { rgbToHsl } from './utils/conversion';

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

  constructor(rgbOrHsl?: RGB | HSL) {
    if ('red' in rgbOrHsl) {
      this.rgb = rgbOrHsl;
      this.hsl = rgbToHsl(rgbOrHsl);
    } else if ('hue' in rgbOrHsl) {
      this.rgb = hslToRgb(rgbOrHsl);
      this.hsl = rgbOrHsl;
    }
  }

  setRGB = (rgb: RGB) => new Color(rgb);
  setHSL = (hsl: HSL) => new Color(hsl);

  setHue = (hue: Angle) =>
    this.setHSL({
      ...this.hsl,
      hue,
    });
  shiftHue = (amount: Angle) => this.setHue(this.hsl.hue + (amount % 360));

  setSaturation = (saturation: Percentage) =>
    this.setHSL({
      ...this.hsl,
      saturation,
    });
  saturate = (amount: Percentage) => this.setSaturation(clampInt(0, this.hsl.saturation * (amount / 100), 100));

  setLightness = (lightness: Percentage) =>
    this.setHSL({
      ...this.hsl,
      lightness,
    });
  lighten = (amount: Percentage) => this.setLightness(clampInt(0, this.hsl.lightness * (amount / 100), 100));
}
