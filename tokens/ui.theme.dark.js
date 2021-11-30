module.exports = {
  base: {
    "color"     : { value: "{color.grey.80.value}", attributes: { category: 'color' } },
    "color-alt" : { value: "{color.grey.90.value}", attributes: { category: 'color' } },
  },
  text: {
    "color"             : { value: "{color.grey.0.value}", attributes: { category: 'color' } },
    "color-weak"        : { value: "{color.grey.20.value}", attributes: { category: 'color' } },
    "color-x-weak"      : { value: "{color.grey.40.value}", attributes: { category: "color" } },
    "color-negative"    : { value: "{color.red.40.value}", attributes: { category: "color" } },
    "color-positive"    : { value: "{color.green.40.value}", attributes: { category: "color" } },
    "color-warning"     : { value: "{color.yellow.50.value}", attributes: { category: "color" } },
    "color-interactive" : { value: "{color.violet.30.value}", attributes: { category: "color" } },
    "color-disabled"    : { value: "{color.grey.40.value}", attributes: { category: "color" } },
  },

  border: {
    "color-weak"      : { value: "{color.lightest.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.1 }] },
    "color"           : { value: "{color.lightest.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.15 }] },
    "color-strong"    : { value: "{color.lightest.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.30 }] },
    "color-x-strong"  : { value: "{color.lightest.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.5 }] },
    "color-xx-strong" : { value: "{color.grey.0.value}", attributes: { category: "color" } },
  },

  highlight: {
    // Default
    "color"                     : { value: "{color.grey.70.value}", attributes: { category: "color" } },
    "color-inverse"             : { value: "{text.color.value}", attributes: { category: "color" } },
    // Negative
    "negative-color"            : { value: "{color.red.100.value}", attributes: { category: "color" } },
    "negative-color-inverse"    : { value: "{color.red.20.value}", attributes: { category: "color" } },
    // Positive
    "positive-color"            : { value: "{color.green.100.value}", attributes: { category: "color" } },
    "positive-color-inverse"    : { value: "{color.green.20.value}", attributes: { category: "color" } },
    // Warning
    "warning-color"             : { value: "{color.yellow.100.value}", attributes: { category: "color" } },
    "warning-color-inverse"     : { value: "{color.yellow.40.value}", attributes: { category: "color" } },
    // Informative
    "interactive-color"         : { value: "{color.violet.100.value}", attributes: { category: "color" } },
    "interactive-color-inverse" : { value: "{color.violet.20.value}", attributes: { category: "color" } },
     // Strong
    "strong-color"              : { value: "{color.grey.0.value}", attributes: { category: "color" } },
    "strong-color-inverse"      : { value: "{color.grey.80.value}", attributes: { category: "color" } },
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
    "color"           : { value: "{color.neutral-100.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.5 }] },
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
    "large-color"     : { value: "{color.neutral-100.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.8 }] },
  },

  overlay: {
    "color" : { value: "{color.neutral-100.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.5 }] },
  }
};
