module.exports = {
  color: {
    "lightest": {value: "{color.neutral-0.value}", attributes: { category: 'color'} },
    "darkest": {value: "{color.neutral-100.value}", attributes: { category: 'color'} },
    
  },
  base: {
    "color" : { value: "{color.neutral-80.value}", attributes: { category: 'color' } },
    "color-alt" : { value: "{color.neutral-90.value}", attributes: { category: 'color' } },
  },

  text: {
    "color"             : { value: "{color.neutral-0.value}", attributes: { category: 'color' } },
    "color-weak"        : { value: "{color.neutral-10.value}", attributes: { category: 'color' } },
    "color-x-weak"      : { value: "{color.neutral-20.value}", attributes: { category: "color" } },
    "color-negative"    : { value: "{color.negative-40.value}", attributes: { category: "color" } },
    "color-positive"    : { value: "{color.positive-40.value}", attributes: { category: "color" } },
    "color-warning"     : { value: "{color.warning-50.value}", attributes: { category: "color" } },
    "color-interactive" : { value: "{color.interactive-30.value}", attributes: { category: "color" } },
    "color-disabled"    : { value: "{color.neutral-50.value}", attributes: { category: "color" } },
  },

  border: {
    "color-weak"     : { value: "{color.neutral-70.value}", attributes: { category: 'color' } },
    "color"          : { value: "{color.neutral-70.value}", attributes: { category: 'color' } },
    "color-strong"   : { value: "{color.neutral-60.value}", attributes: { category: 'color' } },
    "color-x-strong" : { value: "{color.neutral-50.value}", attributes: { category: 'color' } },
    "color-xx-strong" : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
  },

  highlight: {
    // Default
    "color"                     : { value: "{color.neutral-70.value}", attributes: { category: "color" } },
    "color-inverse"             : { value: "{text.color.value}", attributes: { category: "color" } },
    // Negative
    "negative-color"            : { value: "{color.negative-100.value}", attributes: { category: "color" } },
    "negative-color-inverse"    : { value: "{color.negative-30.value}", attributes: { category: "color" } },
    // Positive
    "positive-color"            : { value: "{color.positive-100.value}", attributes: { category: "color" } },
    "positive-color-inverse"    : { value: "{color.positive-30.value}", attributes: { category: "color" } },
    // Warning
    "warning-color"             : { value: "{color.warning-100.value}", attributes: { category: "color" } },
    "warning-color-inverse"     : { value: "{color.warning-30.value}", attributes: { category: "color" } },
    // Informative
    "interactive-color"         : { value: "{color.interactive-100.value}", attributes: { category: "color" } },
    "interactive-color-inverse" : { value: "{color.interactive-30.value}", attributes: { category: "color" } },
     // Strong
    "strong-color"              : { value: "{color.neutral-0.value}", attributes: { category: "color" } },
    "strong-color-inverse"      : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
  },

  button: {
    // Default Style
    "color"                     : { value: "{color.neutral-70.value}", attributes: { category: "color" } },
    "color-hover"               : { value: "{color.neutral-90.value}", attributes: { category: "color" } },
    "color-pressed"             : { value: "{color.neutral-100.value}", attributes: { category: "color" } },
    "color-inverse"             : { value: "{text.color.value}", attributes: { category: "color" } },
    "border-color"              : { value: "{color.neutral-70.value}", attributes: { category: "color" } },
    "border-color-hover"        : { value: "{color.neutral-70.value}", attributes: { category: "color" } },
    "border-color-pressed"      : { value: "{color.neutral-70.value}", attributes: { category: "color" } },
    // Strong Style
    "strong-color"              : { value: "{color.neutral-0.value}", attributes: { category: "color" } },
    "strong-color-hover"        : { value: "{color.neutral-20.value}", attributes: { category: "color" } },
    "strong-color-pressed"      : { value: "{color.neutral-30.value}", attributes: { category: "color" } },
    "strong-color-inverse"      : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    // Interactive Style
    "interactive-color"         : { value: "{color.interactive-40.value}", attributes: { category: "color" } },
    "interactive-color-hover"   : { value: "{color.interactive-50.value}", attributes: { category: "color" } },
    "interactive-color-pressed" : { value: "{color.interactive-60.value}", attributes: { category: "color" } },
    "interactive-color-inverse" : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    // Positive Style
    "positive-color"            : { value: "{color.positive-40.value}", attributes: { category: "color" } },
    "positive-color-hover"      : { value: "{color.positive-60.value}", attributes: { category: "color" } },
    "positive-color-pressed"    : { value: "{color.positive-70.value}", attributes: { category: "color" } },
    "positive-color-inverse"    : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    // Negative Style
    "negative-color"            : { value: "{color.negative-40.value}", attributes: { category: "color" } },
    "negative-color-hover"      : { value: "{color.negative-50.value}", attributes: { category: "color" } },
    "negative-color-pressed"    : { value: "{color.negative-60.value}", attributes: { category: "color" } },
    "negative-color-inverse"    : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    // Disabled Style
    "disabled-color"                : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    "disabled-color-inverse"        : { value: "{text.color-disabled.value}", attributes: { category: "color" } },
    "disabled-border-color"         : { value: "{color.neutral-70.value}", attributes: { category: "color" } },
    "disabled-strong-color"         : { value: "{color.neutral-50.value}", attributes: { category: "color" } },
    "disabled-strong-color-inverse" : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
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
