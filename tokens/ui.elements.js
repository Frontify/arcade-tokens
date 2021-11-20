/**
 * Here we make specific design decisions
 */

module.exports = {
  base : {
    "color" : { value: "{color.neutral-0.value}", attributes: { category: "color" } }
  },

  text: {
    "color"      : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    "color-weak" : { value: "{color.neutral-60.value}", attributes: { category: "color" } },
  },

  line: {
    "width"        : { value: "1px", attributes: { category: "size", type: "lineWidth" } },
    "width-strong" : { value: "2px", attributes: { category: "size", type: "lineWidth" } }
  },

  border: {
    "color"          : { value: "{color.neutral-20.value}", attributes: { category: "color" } },
    "color-strong"   : { value: "{color.neutral-30.value}", attributes: { category: "color" } },
    "color-x-strong" : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    "width"          : { value: "{line.width.value}", attributes: { category: "size", type: "lineWidth" } },
    "width-strong"   : { value: "{line.width-strong.value}", attributes: { category: "size", type: "lineWidth" } },
    "radius"         : { value: "4px", attributes: { category: "size", type: "borderRadius" } },
    "radius-small"   : { value: "2px", attributes: { category: "size", type: "borderRadius" } },
    "radius-large"   : { value: "8px", attributes: { category: "size", type: "borderRadius" } },
    "radius-x-large" : { value: "12px", attributes: { category: "size", type: "borderRadius" } },
  },

  shadow: {
    // DEFAULTS
    "matrix"          : { value: "{shadow.offset-y.value} {shadow.offset-x.value} {shadow.blur.value} {shadow.spread.value} {shadow.color.value}", attributes: { type: "matrix" } },
    "offset-x"        : { value: 0, attributes: { category: "size", type: "shadowOffset", item: "x" } },
    "offset-y"        : { value: 0.1875, attributes: { category: "size", type: "shadowOffset", item: "y" } },
    "spread"          : { value: 0, attributes: { category: "size", type: "shadowSpread" } },
    "blur"            : { value: 0.625, attributes: { category: "size", type: "shadowBlur" } },
    "color"           : { value: "{color.darkest.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.1 }] },
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
    "large-color"     : { value: "{color.darkest.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.4 }] },
  },

  checkbox: {
    "border-width" : { value: "{border.width-strong.value}", attributes: { category: "size", type: "lineWidth" } },
  },

  button: {
    "background-color"   : { value: "{color.neutral-50.value}", attributes: { category: "color" } },
    "border-color"       : { value: "{color.neutral-50.value}", attributes: { category: "color" } },
    "font-family"        : { value: '{body.family.value}', attributes: { category: "font", type: 'family' } },
    "small-font-size"    : { value: '{body.size-small.value}', attributes: { category: "size", type: 'font' } },
    "small-line-height"  : { value: '{body.size-small-line-height.value}', attributes: { category: "size", type: 'lineHeight' } },
    "medium-font-size"   : { value: '{body.size-small.value}', attributes: { category: "size", type: 'font' } },
    "medium-line-height" : { value: '{body.size-small-line-height.value}', attributes: { category: "size", type: 'lineHeight' } },
  },

  input: {
    "placeholder-color" : { value: "{color.neutral-50.value}", attributes: { category: "color" } },
    "border-color"      : { value: "{border.color.value}", attributes: { category: "color" } },
    "label-color"       : { value: "{text.color.value}", attributes: { category: "color" } },
  }
};
