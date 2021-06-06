import { rgbToHsl, hslToRgb, hexToRgb, rgbToHex, hexToHsl, hslToHex } from '../conversion';
import { HSL, RGB } from '../../types/units';

import { rgbToHexMockData } from '../__mocks__/colorTestData';

const hslToString = ({ hue, saturation, lightness }: HSL) => `hsl(${hue}, ${saturation}%, ${lightness}%)`;
const rgbToString = ({ red, green, blue }: RGB) => `rgb(${red}, ${green}, ${blue})`;

describe('@blazon-ui/color/utils/conversion.ts', () => {
  describe('rgbToHsl', () => {
    rgbToHexMockData.forEach(({ hex, rgb, hsl }) => {
      it(`should convert ${rgbToString(rgb)} (${hex}) to ${hslToString(hsl)}`, () => {
        expect(rgbToHsl(rgb)).toEqual(hsl);
      });
    });
  });

  describe('hslToRgb', () => {
    rgbToHexMockData.forEach(({ hex, rgb, hsl }) => {
      it(`should convert ${hslToString(hsl)} (${hex}) to ${rgbToString(rgb)}`, () => {
        expect(hslToRgb(hsl)).toEqual(rgb);
      });
    });
  });

  describe('hexToRgb', () => {
    rgbToHexMockData.forEach(({ hex, rgb }) => {
      it(`should convert ${hex} to ${rgbToString(rgb)}`, () => {
        expect(hexToRgb(hex)).toEqual(rgb);
      });
    });
  });

  describe('rgbToHex', () => {
    rgbToHexMockData.forEach(({ hex, rgb }) => {
      it(`should convert ${rgbToString(rgb)} to ${hex}`, () => {
        expect(rgbToHex(rgb)).toEqual(hex);
      });
    });
  });

  describe('hexToHsl', () => {
    rgbToHexMockData.forEach(({ hsl, hex }) => {
      it(`should convert ${hex} to ${hslToString(hsl)}`, () => {
        expect(hexToHsl(hex)).toEqual(hsl);
      });
    });
  });

  describe('hslToHex', () => {
    rgbToHexMockData.forEach(({ hsl, hex }) => {
      it(`should convert ${hslToString(hsl)} to ${hex}`, () => {
        expect(hslToHex(hsl)).toEqual(hex);
      });
    });
  });
});
