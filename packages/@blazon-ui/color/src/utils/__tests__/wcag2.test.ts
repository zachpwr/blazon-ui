import { Color } from '../../Color';
import { WCAG2SuccessCriterionConformanceLevel, WCAG2TextContrastContext } from '../../types/wcag2';
import { doesTextContrastConformToWCAG2 } from '../wcag2';

describe('@blazon-ui/color/utils/wcag2.ts', () => {
  describe('doesTextContrastConformToWCAG2', () => {
    describe('for normal text', () => {
      const context = WCAG2TextContrastContext.normalText;

      it('should return `false` if contrast is <4.5 for AA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AA,
            context,
            new Color({ red: 204, green: 204, blue: 255 }),
            new Color({ red: 255, green: 255, blue: 255 }),
          ),
        ).toEqual(false);
      });

      it('should return `true` if contrast is >=4.5 for AA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AA,
            context,
            new Color({ red: 97, green: 97, blue: 255 }),
            new Color({ red: 255, green: 255, blue: 255 }),
          ),
        ).toEqual(true);
      });

      it('should return `false` if contrast is <7 for AAA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AAA,
            context,
            new Color({ red: 97, green: 97, blue: 255 }),
            new Color({ red: 255, green: 255, blue: 255 }),
          ),
        ).toEqual(false);
      });

      it('should return `true` if contrast is >=7 for AAA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AAA,
            context,
            new Color({ red: 46, green: 46, blue: 255 }),
            new Color({ red: 255, green: 255, blue: 255 }),
          ),
        ).toEqual(true);
      });
    });

    describe('for large text', () => {
      const context = WCAG2TextContrastContext.largeText;

      it('should return `false` if contrast is <3 for AA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AA,
            context,
            new Color({ red: 204, green: 204, blue: 255 }),
            new Color({ red: 255, green: 255, blue: 255 }),
          ),
        ).toEqual(false);
      });

      it('should return `true` if contrast is >=3 for AA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AA,
            context,
            new Color({ red: 133, green: 133, blue: 255 }),
            new Color({ red: 255, green: 255, blue: 255 }),
          ),
        ).toEqual(true);
      });

      it('should return `false` if contrast is <4.5 for AAA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AAA,
            context,
            new Color({ red: 133, green: 133, blue: 255 }),
            new Color({ red: 255, green: 255, blue: 255 }),
          ),
        ).toEqual(false);
      });

      it('should return `true` if contrast is >=4.5 for AAA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AAA,
            context,
            new Color({ red: 97, green: 97, blue: 255 }),
            new Color({ red: 255, green: 255, blue: 255 }),
          ),
        ).toEqual(true);
      });
    });
  });
});
