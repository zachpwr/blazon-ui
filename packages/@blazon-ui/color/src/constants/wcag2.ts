import {
  WCAG2TextContrastContext,
  WCAG2TextContrastSuccessCriterionVariant,
  WCAG2SuccessCriterionConformanceLevel,
} from '../types/wcag2';

/**
 * The text contrast success criterion variant required for each WCAG2
 * conformance level.
 *
 * More info:
 * - https://www.w3.org/TR/WCAG21/#contrast-minimum
 * - https://www.w3.org/TR/WCAG21/#contrast-enhanced
 */
export const WCAG2ConformanceLevelToTextContrastSuccessCriterionVariant = {
  [WCAG2SuccessCriterionConformanceLevel.A]: WCAG2TextContrastSuccessCriterionVariant.minimum,
  [WCAG2SuccessCriterionConformanceLevel.AA]: WCAG2TextContrastSuccessCriterionVariant.minimum,
  [WCAG2SuccessCriterionConformanceLevel.AAA]: WCAG2TextContrastSuccessCriterionVariant.enhanced,
};

/**
 * The minimum text contrast ratios for each success criterion variant and
 * text contrast context.
 *
 * More info:
 * - https://www.w3.org/TR/WCAG21/#contrast-minimum
 * - https://www.w3.org/TR/WCAG21/#contrast-enhanced
 */
export const WCAG2MinimumTextContrastRatios = {
  [WCAG2TextContrastSuccessCriterionVariant.minimum]: {
    [WCAG2TextContrastContext.normalText]: 4.5,
    [WCAG2TextContrastContext.largeText]: 3,
  },
  [WCAG2TextContrastSuccessCriterionVariant.enhanced]: {
    [WCAG2TextContrastContext.normalText]: 7,
    [WCAG2TextContrastContext.largeText]: 4.5,
  },
};

/**
 * The minimum non-text contrast ratio of user interface components and
 * graphical objects.
 *
 * More info: https://www.w3.org/TR/WCAG21/#non-text-contrast
 */
export const WCAG2MinimumNonTextContrastRatio = 3;
