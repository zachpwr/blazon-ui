import { getContrastRatioForRGBColors } from '../contrast';

describe('@blazon-ui/color/utils/contrast.ts', () => {
  it('should calculate the correct contrast ratio given two colors', () => {
    expect(getContrastRatioForRGBColors(['rgb', 133, 133, 255], ['rgb', 255, 255, 255])).toBe(3.089907205382459);
    expect(getContrastRatioForRGBColors(['rgb', 0, 0, 199], ['rgb', 255, 255, 255])).toBe(11.50871433377418);
    expect(getContrastRatioForRGBColors(['rgb', 245, 245, 245], ['rgb', 255, 255, 255])).toBe(1.090230993517392);
  });
});
