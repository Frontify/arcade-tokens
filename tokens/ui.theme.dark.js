module.exports = {
  color: {
    // NEUTRAL
    "neutral-0"       : { value: "{color.grey-100.value}" },
    "neutral-5"       : { value: "{color.grey-90.value}" },
    "neutral-10"      : { value: "{color.grey-80.value}" },
    "neutral-20"      : { value: "{color.grey-70.value}" },
    "neutral-30"      : { value: "{color.grey-60.value}" },
    "neutral-40"      : { value: "{color.grey-50.value}" },
    "neutral-50"      : { value: "{color.grey-40.value}" },
    "neutral-60"      : { value: "{color.grey-30.value}" },
    "neutral-70"      : { value: "{color.grey-20.value}" },
    "neutral-80"      : { value: "{color.grey-10.value}" },
    "neutral-90"      : { value: "{color.grey-5.value}" },
    "neutral-100"     : { value: "{color.grey-0.value}" },
    // INTERACTIVE
    "interactive-10"  : { value: "{color.violet-100.value}" },
    "interactive-20"  : { value: "{color.violet-90.value}" },
    "interactive-30"  : { value: "{color.violet-80.value}" },
    "interactive-40"  : { value: "{color.violet-70.value}" },
    "interactive-50"  : { value: "{color.violet-60.value}" },
    "interactive-60"  : { value: "{color.violet-50.value}" },
    "interactive-70"  : { value: "{color.violet-40.value}" },
    "interactive-80"  : { value: "{color.violet-30.value}" },
    "interactive-90"  : { value: "{color.violet-20.value}" },
    "interactive-100" : { value: "{color.violet-10.value}" },
    // POSITIVE
    "positive-10"     : { value: "{color.green-100.value}" },
    "positive-20"     : { value: "{color.green-90.value}" },
    "positive-30"     : { value: "{color.green-80.value}" },
    "positive-40"     : { value: "{color.green-70.value}" },
    "positive-50"     : { value: "{color.green-60.value}" },
    "positive-60"     : { value: "{color.green-50.value}" },
    "positive-70"     : { value: "{color.green-40.value}" },
    "positive-80"     : { value: "{color.green-30.value}" },
    "positive-90"     : { value: "{color.green-20.value}" },
    "positive-100"    : { value: "{color.green-10.value}" },
    // WARNING
    "warning-10"      : { value: "{color.yellow-100.value}" },
    "warning-20"      : { value: "{color.yellow-90.value}" },
    "warning-30"      : { value: "{color.yellow-80.value}" },
    "warning-40"      : { value: "{color.yellow-70.value}" },
    "warning-50"      : { value: "{color.yellow-60.value}" },
    "warning-60"      : { value: "{color.yellow-50.value}" },
    "warning-70"      : { value: "{color.yellow-40.value}" },
    "warning-80"      : { value: "{color.yellow-30.value}" },
    "warning-90"      : { value: "{color.yellow-20.value}" },
    "warning-100"     : { value: "{color.yellow-10.value}" },
    // NEGATIVE
    "negative-10"     : { value: "{color.red-100.value}" },
    "negative-20"     : { value: "{color.red-90.value}" },
    "negative-30"     : { value: "{color.red-80.value}" },
    "negative-40"     : { value: "{color.red-70.value}" },
    "negative-50"     : { value: "{color.red-60.value}" },
    "negative-60"     : { value: "{color.red-40.value}" },
    "negative-70"     : { value: "{color.red-30.value}" },
    "negative-80"     : { value: "{color.red-20.value}" },
    "negative-90"     : { value: "{color.red-10.value}" },
    "negative-100"    : { value: "{color.red-10.value}" },
  },

  base: {
    "color" : { value: "{color.neutral-10.value}", attributes: { category: 'color' } },
  },

  text: {
    "color"             : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
    "color-weak"        : { value: "{color.neutral-60.value}", attributes: { category: 'color' } },
    "color-x-weak"      : { value: "{color.neutral-50.value}", attributes: { category: "color" } },
    "color-negative"    : { value: "{color.negative-60.value}", attributes: { category: "color" } },
    "color-positive"    : { value: "{color.positive-70.value}", attributes: { category: "color" } },
    "color-warning"     : { value: "{color.warning-50.value}", attributes: { category: "color" } },
    "color-interactive" : { value: "{color.interactive-80.value}", attributes: { category: "color" } },
  },

  border: {
    "color"          : { value: "{color.neutral-20.value}", attributes: { category: 'color' } },
    "color-strong"   : { value: "{color.neutral-30.value}", attributes: { category: 'color' } },
    "color-x-strong" : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
  },

  input: {
    "border-color"      : { value: "{border.color-strong.value}", attributes: { category: "color" } },
    "value-color"       : { value: "{text.color.value}", attributes: { category: "color" } },
    "placeholder-color" : { value: "{text.color-x-weak.value}", attributes: { category: "color" } },
    "label-color"       : { value: "{text.color.value}", attributes: { category: "color" } },
  },

  highlight: {
    // Default
    "color"                     : { value: "{color.neutral-5.value}", attributes: { category: "color" } },
    "color-inverse"             : { value: "{text.color.value}", attributes: { category: "color" } },
    // Strong
    "strong-color"              : { value: "{color.interactive-60.value}", attributes: { category: "color" } },
    "strong-color-inverse"      : { value: "{color.lightest.value}", attributes: { category: "color" } },
    // Negative
    "negative-color"            : { value: "{color.negative-10.value}", attributes: { category: "color" } },
    "negative-color-inverse"    : { value: "{color.negative-80.value}", attributes: { category: "color" } },
    // Positive
    "positive-color"            : { value: "{color.positive-10.value}", attributes: { category: "color" } },
    "positive-color-inverse"    : { value: "{color.positive-90.value}", attributes: { category: "color" } },
    // Warning
    "warning-color"             : { value: "{color.warning-10.value}", attributes: { category: "color" } },
    "warning-color-inverse"     : { value: "{color.warning-90.value}", attributes: { category: "color" } },
    // Informative
    "informative-color"         : { value: "{color.interactive-10.value}", attributes: { category: "color" } },
    "informative-color-inverse" : { value: "{color.interactive-80.value}", attributes: { category: "color" } },
  },

  button: {
    // Default Style
    "color"                  : { value: "{color.neutral-20.value}", attributes: { category: "color" } },
    "color-hover"            : { value: "{color.neutral-10.value}", attributes: { category: "color" } },
    "color-pressed"          : { value: "{color.neutral-0.value}", attributes: { category: "color" } },
    "color-inverse"          : { value: "{text.color.value}", attributes: { category: "color" } },
    "border-color"           : { value: "{color.neutral-20.value}", attributes: { category: "color" } },
    "border-color-hover"     : { value: "{color.neutral-10.value}", attributes: { category: "color" } },
    "border-color-pressed"   : { value: "{color.neutral-0.value}", attributes: { category: "color" } },
    // Strong Style
    "strong-color"           : { value: "{color.neutral-100.value}", attributes: { category: "color" } },
    "strong-color-hover"     : { value: "{color.neutral-90.value}", attributes: { category: "color" } },
    "strong-color-pressed"   : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    "strong-color-inverse"   : { value: "{color.neutral-10.value}", attributes: { category: "color" } },
    // Negative Style
    "negative-color"         : { value: "{color.negative-60.value}", attributes: { category: "color" } },
    "negative-color-hover"   : { value: "{color.negative-50.value}", attributes: { category: "color" } },
    "negative-color-pressed" : { value: "{color.negative-40.value}", attributes: { category: "color" } },
    "negative-color-inverse" : { value: "{color.neutral-10.value}", attributes: { category: "color" } },
    // Positive Style
    "positive-color"         : { value: "{color.positive-50.value}", attributes: { category: "color" } },
    "positive-color-hover"   : { value: "{color.positive-40.value}", attributes: { category: "color" } },
    "positive-color-pressed" : { value: "{color.positive-30.value}", attributes: { category: "color" } },
    "positive-color-inverse" : { value: "{color.neutral-10.value}", attributes: { category: "color" } },
  },

  // All values need to be provided for the sake of Figma,
  // but they should not be exported to other platforms, just the color overrides
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
