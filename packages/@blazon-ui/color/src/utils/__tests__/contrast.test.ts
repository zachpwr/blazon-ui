import { getContrastRatioForRGBColors } from '../contrast';

describe('@blazon-ui/color/utils/contrast.ts', () => {
  it('should calculate the correct contrast ratio given two colors', () => {
    expect(getContrastRatioForRGBColors({ red: 133, green: 133, blue: 255 }, { red: 255, green: 255, blue: 255 })).toBe(
      3.089907205382459,
    );
    expect(getContrastRatioForRGBColors({ red: 0, green: 0, blue: 199 }, { red: 255, green: 255, blue: 255 })).toBe(
      11.50871433377418,
    );
    expect(getContrastRatioForRGBColors({ red: 245, green: 245, blue: 245 }, { red: 255, green: 255, blue: 255 })).toBe(
      1.090230993517392,
    );
  });
});
