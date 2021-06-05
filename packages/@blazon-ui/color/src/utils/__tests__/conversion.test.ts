import { rgbToHsl, hslToRgb } from '../conversion';
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
});
