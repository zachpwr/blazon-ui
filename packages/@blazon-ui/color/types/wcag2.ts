/**
 * One of the following levels of conformance is met in full: A, AA, AAA
 *
 * More info: https://www.w3.org/TR/WCAG21/#cc1
 */
export enum WCAG2SuccessCriterionConformanceLevel {
  /**
   * For Level A conformance (the minimum level of conformance), the Web page
   * satisfies all the Level A Success Criteria, or a conforming alternate
   * version is provided.
   */
  A = 'A',

  /**
   * For Level AA conformance, the Web page satisfies all the Level A and Level
   * AA Success Criteria, or a Level AA conforming alternate version is provided.
   */
  AA = 'AA',

  /**
   * For Level AAA conformance, the Web page satisfies all the Level A, Level AA
   * and Level AAA Success Criteria, or a Level AAA conforming alternate version
   * is provided.
   */
  AAA = 'AAA',
}

/**
 * Make it easier for users to see content including separating foreground from
 * background.
 *
 * More info: https://www.w3.org/TR/WCAG21/#distinguishable
 */
export enum WCAG2TextContrastSuccessCriterionVariant {
  /**
   * The visual presentation of text and images of text has a contrast ratio of
   * at least 4.5:1, except for large text, incidental text, or logotypes.
   *
   * More info: https://www.w3.org/TR/WCAG21/#contrast-minimum
   */
  minimum = 'minimum',

  /**
   * The visual presentation of text and images of text has a contrast ratio of
   * at least 7:1, except for large text, incidental text, or logotypes.
   *
   * More info: https://www.w3.org/TR/WCAG21/#contrast-enhanced
   */
  enhanced = 'enhanced',
}

/**
 * The types of visual presentation of text and images of text that may have
 * contrast ratio success criterion.
 *
 * More info:
 * - https://www.w3.org/TR/WCAG21/#contrast-minimum
 * - https://www.w3.org/TR/WCAG21/#contrast-enhanced
 */
export enum WCAG2TextContrastContext {
  /**
   * Text and images of text, excluding large text, incidental text, and
   * logotypes.
   */
  normalText = 'normalText',

  /**
   * Large-scale text and images of large-scale text with at least 18 point or
   * 14 point bold or font size that would yield equivalent size for Chinese,
   * Japanese and Korean (CJK) fonts.
   *
   * More info: https://www.w3.org/TR/WCAG21/#dfn-large-scale
   */
  largeText = 'largeText',

  /**
   * Text or images of text that are part of an inactive user interface
   * component, that are pure decoration, that are not visible to anyone, or
   * that are part of a picture that contains significant other visual content.
   */
  incidentalText = 'incidentalText',

  /**
   * Text that is part of a logo or brand name has no contrast requirement.
   */
  logotypeText = 'logotypeText',
}
