module.exports = {
  /**
   * COLOR
   * - All color values get flipped, but take care to override some things as necessary
   */
  color: {
    // NEUTRAL
    "neutral-0"                     : { value: "{color.grey-100.value}" },
    "neutral-5"                     : { value: "{color.grey-90.value}" },
    "neutral-10"                    : { value: "{color.grey-80.value}" },
    "neutral-20"                    : { value: "{color.grey-70.value}" },
    "neutral-30"                    : { value: "{color.grey-60.value}" },
    "neutral-40"                    : { value: "{color.grey-50.value}" },
    "neutral-50"                    : { value: "{color.grey-40.value}" },
    "neutral-60"                    : { value: "{color.grey-30.value}" },
    "neutral-70"                    : { value: "{color.grey-20.value}" },
    "neutral-80"                    : { value: "{color.grey-10.value}" },
    "neutral-90"                    : { value: "{color.grey-5.value}" },
    "neutral-100"                   : { value: "{color.grey-0.value}" },

    // INTERACTIVE
    // "interactive"                   : { value: "{color.violet-60.value}" },
    // "interactive-hover"             : { value: "{color.violet-70.value}"},
    // "interactive-pressed"           : { value: "{color.violet-80.value}"},
    // "interactive-inverse"           : { value: "{color.lightest.value}" },
  
    "interactive-secondary"         : { value: "{color.violet-100.value}" },
    "interactive-secondary-hover"   : { value: "{color.violet-90.value}"},
    "interactive-secondary-pressed" : { value: "{color.violet-100.value}"},
    "interactive-secondary-inverse" : { value: "{color.violet-40.value}" },

  
    // POSITIVE
    // "positive"                      : { value: "{color.green-60.value}" },
    // "positive-hover"                : { value: "{color.green-70.value}"},
    // "positive-pressed"              : { value: "{color.green-80.value}"},
    // "positive-inverse"              : { value: "{color.lightest.value}"},

    "positive-secondary"            : { value: "{color.green-100.value}" },
    "positive-secondary-hover"      : { value: "{color.green-90.value}"},
    "positive-secondary-pressed"    : { value: "{color.green-100.value}"},
    "positive-secondary-inverse"    : { value: "{color.green-50.value}"},


    // WARNING
    // "warning"                       : { value: "{color.yellow-60.value}" },
    // "warning-hover"                 : { value: "{color.yellow-70.value}"},
    // "warning-pressed"               : { value: "{color.yellow-80.value}"},
    // "warning-inverse"               : { value: "{color.lightest.value}"},

    "warning-secondary"             : { value: "{color.yellow-100.value}" },
    "warning-secondary-hover"       : { value: "{color.yellow-90.value}"},
    "warning-secondary-pressed"     : { value: "{color.yellow-100.value}"},
    "warning-secondary-inverse"     : { value: "{color.yellow-50.value}"},

  
    // NEGATIVE
    // "negative"                      : { value: "{color.red-60.value}" },
    // "negative-hover"                : { value: "{color.red-70.value}"},
    // "negative-pressed"              : { value: "{color.red-80.value}"},
    // "negative-inverse"              : { value: "{color.lightest.value}"},

    "negative-secondary"            : { value: "{color.red-100.value}" },
    "negative-secondary-hover"      : { value: "{color.red-90.value}"},
    "negative-secondary-pressed"    : { value: "{color.red-100.value}"},
    "negative-secondary-inverse"    : { value: "{color.red-40.value}"},
  },
  
  
  /**
   * ELEMENTS
   * - All color values get flipped, but take care to override some things as necessary
   */
  base: {
    "color" : { value: "{color.neutral-10.value}", attributes: { category: 'color' } },
  },
  text: {
    "color"      : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
    "color-weak" : { value: "{color.neutral-60.value}", attributes: { category: 'color' } },
    "color-x-weak" : { value: "{color.neutral-50.value}", attributes: { category: "color" } },
  },
  border: {
    "color"          : { value: "{color.neutral-20.value}", attributes: { category: 'color' } },
    "color-strong"   : { value: "{color.neutral-30.value}", attributes: { category: 'color' } },
    "color-x-strong" : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
  },
  input: {
    "border-color"      : { value: "{border.color.value}", attributes: { category: "color" } },
    "value-color"       : { value: "{text.color.value}", attributes: { category: "color" } },
    "placeholder-color" : { value: "{text.color-x-weak.value}", attributes: { category: "color" } },
    "label-color"       : { value: "{text.color.value}", attributes: { category: "color" } },
  },
  /**
   * SHADOW
   * - All values need to be provided for the sake of Figma,
   *   but they should not be exported to other platforms, just the color overrides
   */
  shadow: {
    // DEFAULTS
    "matrix"          : { value: "{shadow.offset-y.value} {shadow.offset-x.value} {shadow.blur.value} {shadow.spread.value} {shadow.color.value}", attributes: { type: "matrix" } },
    "offset-x"        : { value: 0, attributes: { category: "size", type: "shadowOffset", item: "x" } },
    "offset-y"        : { value: 0.1875, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "spread"          : { value: 0, attributes: { category: "size", type: "shadowSpread" } },
    "blur"            : { value: 0.625, attributes: { category: "size", type: "shadowBlur" } },
    "color"           : { value: "{color.darkest.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.5 }] },
    // Top shadow
    "top-matrix"      : { value: "{shadow.top-offset-y.value} {shadow.top-offset-x.value} {shadow.blur.value} {shadow.top-spread.value} {shadow.color.value}", attributes: { type: "matrix" } },
    "top-offset-x"    : { value: "{shadow.offset-y.value}", attributes: { category: "size", type: "shadowOffset", item: "x", } },
    "top-offset-y"    : { value: -0.625, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "top-spread"      : { value: -0.3125, attributes: { category: "size", type: "shadowSpread" } },
    // Bottom- shadow
    "bottom-matrix"   : { value: "{shadow.bottom-offset-y.value} {shadow.bottom-offset-x.value} {shadow.blur.value} {shadow.bottom-spread.value} {shadow.color.value}", attributes: { type: "matrix" } },
    "bottom-offset-y" : { value: "{shadow.offset-y.value}", attributes: { category: "size", type: "shadowOffset", item: "x" } },
    "bottom-offset-x" : { value: 0.625, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "bottom-spread"   : { value: -0.3125, attributes: { category: "size", type: "shadowSpread" } },
    // Large size
    "large-matrix"    : { value: "{shadow.large-offset-y.value} {shadow.large-offset-x.value} {shadow.large-blur.value} {shadow.large-spread.value} {shadow.large-color.value}", attributes: { type: "matrix" } },
    "large-offset-y"  : { value: 1.5625, attributes: { category: "size", type: "shadowOffset", item: "x" } },
    "large-offset-x"  : { value: 0, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "large-spread"    : { value: 0, attributes: { category: "size", type: "shadowSpread" } },
    "large-blur"      : { value: 5, attributes: { category: "size", type: "shadowBlur" } },
    "large-color"     : { value: "{color.darkest.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.8 }] },
  },
};
