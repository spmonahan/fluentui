import * as CSS from 'csstype';

type MakeStylesCSSProperties = Omit<
  CSS.Properties,
  // We have custom defition for "animationName"
  | 'animationName'

  // We don't support expansion of CSS shorthands
  | 'animation'
  | 'background'
  | 'border'
  | 'borderLeft'
  | 'borderRight'
  | 'borderTop'
  | 'borderBottom'
  | 'margin'
  | 'padding'
>;

type MakeStylesCSSObject = MakeStylesCSSProperties &
  CSSPseudos & { animationName?: MakeStylesAnimation | MakeStylesAnimation[] | CSS.AnimationProperty };

type CSSCustom = { [prop: string]: MakeStylesStyle | string | 0 };
type CSSPseudos = { [K in CSS.Pseudos]?: MakeStylesCSSObject & { content?: string } };

export type MakeStylesAnimation = Record<'from' | 'to' | string, CSSCustom>;
export type MakeStylesStyle = MakeStylesCSSObject | CSSCustom;

export type MakeStylesStyleFunctionRule<Tokens> = (tokens: Tokens) => MakeStylesStyle;
export type MakeStylesStyleRule<Tokens> = MakeStylesStyle | MakeStylesStyleFunctionRule<Tokens>;

export interface MakeStylesOptions {
  dir: 'ltr' | 'rtl';
  renderer: MakeStylesRenderer;
}

export type MakeStaticStyles =
  | ({
      [key: string]: CSS.Properties &
        // TODO Questionable: how else would users target their own children?
        Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
    } & {
      '@font-face'?: {
        fontFamily: string;
        src: string;

        fontFeatureSettings?: string;
        fontStretch?: string;
        fontStyle?: string;
        fontVariant?: string;
        fontVariationSettings?: string;
        fontWeight?: number | string;

        unicodeRange?: string;
      };
    })
  | string;

export interface MakeStaticStylesOptions {
  renderer: MakeStylesRenderer;
}

export interface MakeStylesRenderer {
  id: string;

  /**
   * @private
   */
  insertionCache: Record<string, StyleBucketName>;

  /**
   * @private
   */
  styleElements: Partial<Record<StyleBucketName, HTMLStyleElement>>;

  /**
   * @private
   */
  insertCSSRules(cssRules: CSSRulesByBucket): void;
}

/**
 * Buckets under which we will group our stylesheets.
 */
export type StyleBucketName =
  // default
  | 'd'
  // link
  | 'l'
  // visited
  | 'v'
  // focus-within
  | 'w'
  // focus
  | 'f'
  // focus-visible
  | 'i'
  // hover
  | 'h'
  // active
  | 'a'
  // @keyframes definitions
  | 'k'
  // at-rules (@media, @support)
  | 't';

export type SequenceHash = string;
export type PropertyHash = string;

export type CSSClasses = /* ltrClassName */ string | [/* ltrClassName */ string, /* rtlClassName */ string];

export type CSSClassesMap = Record<PropertyHash, CSSClasses>;
export type CSSClassesMapBySlot<Slots extends string | number> = Record<Slots, CSSClassesMap>;

export type CSSRulesByBucket = Partial<Record<StyleBucketName, string[]>>;

export type StylesBySlots<Slots extends string | number, Tokens> = Record<Slots, MakeStylesStyleRule<Tokens>>;

export type LookupItem = [/* definitions */ CSSClassesMap, /* dir */ 'rtl' | 'ltr'];
