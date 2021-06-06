import { Color } from '../../Color';
import { getContrastRatioForColors } from '../contrast';

describe('@blazon-ui/color/utils/contrast.ts', () => {
  it('should calculate the correct contrast ratio given two colors', () => {
    expect(
      getContrastRatioForColors(
        new Color({ red: 133, green: 133, blue: 255 }),
        new Color({ red: 255, green: 255, blue: 255 }),
      ),
    ).toBe(3.089907205382459);
    expect(
      getContrastRatioForColors(
        new Color({ red: 0, green: 0, blue: 199 }),
        new Color({ red: 255, green: 255, blue: 255 }),
      ),
    ).toBe(11.50871433377418);
    expect(
      getContrastRatioForColors(
        new Color({ red: 245, green: 245, blue: 245 }),
        new Color({ red: 255, green: 255, blue: 255 }),
      ),
    ).toBe(1.090230993517392);
  });
});
