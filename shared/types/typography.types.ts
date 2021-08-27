/**
 * Handles font families, weights, and line heights.
 * Sizes are handled separately due to HF Design System structure.
 */
 export interface Typography {
  body: {
    main: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    };
    large: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    };
    small: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    };
    caption: { // this is called microtext in associated docs
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    };
  };
  headings: {
    h1: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    },
    h2: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    },
    h3: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    },
    h4: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    },
    h5: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    },
    h6: {
      family: string;
      lineHeight: string;
      weight: number;
      familyUrls: string[];
    },
  };
}
