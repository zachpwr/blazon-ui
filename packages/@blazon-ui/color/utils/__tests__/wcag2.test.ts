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
            ['rgb', 204, 204, 255],
            ['rgb', 255, 255, 255],
          ),
        ).toEqual(false);
      });

      it('should return `true` if contrast is >=4.5 for AA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AA,
            context,
            ['rgb', 97, 97, 255],
            ['rgb', 255, 255, 255],
          ),
        ).toEqual(true);
      });

      it('should return `false` if contrast is <7 for AAA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AAA,
            context,
            ['rgb', 97, 97, 255],
            ['rgb', 255, 255, 255],
          ),
        ).toEqual(false);
      });

      it('should return `true` if contrast is >=7 for AAA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AAA,
            context,
            ['rgb', 46, 46, 255],
            ['rgb', 255, 255, 255],
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
            ['rgb', 204, 204, 255],
            ['rgb', 255, 255, 255],
          ),
        ).toEqual(false);
      });

      it('should return `true` if contrast is >=3 for AA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AA,
            context,
            ['rgb', 133, 133, 255],
            ['rgb', 255, 255, 255],
          ),
        ).toEqual(true);
      });

      it('should return `false` if contrast is <4.5 for AAA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AAA,
            context,
            ['rgb', 133, 133, 255],
            ['rgb', 255, 255, 255],
          ),
        ).toEqual(false);
      });

      it('should return `true` if contrast is >=4.5 for AAA conformance level', () => {
        expect(
          doesTextContrastConformToWCAG2(
            WCAG2SuccessCriterionConformanceLevel.AAA,
            context,
            ['rgb', 97, 97, 255],
            ['rgb', 255, 255, 255],
          ),
        ).toEqual(true);
      });
    });
  });
});
