/**
* ELEMENTS
*
* These tokens should be applied to specific elements or properties.
* in general, the elements get more specific from top to bottom
*
* When extending element tokens, make sure to add them to theme files as
* appropriate
* ======================================================================== */

module.exports = {
  /**
  * BASE
  * The main background of the area that is being themed
  * ======================================================================== */
  base : {
    "color" : { value: "{color.neutral-0.value}", attributes: { category: "color" } }
  },

  /**
  * TEXT
  * Any text element
  * ======================================================================== */
  text: {
    "color"             : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    "color-weak"        : { value: "{color.neutral-60.value}", attributes: { category: "color" } },
    "color-x-weak"      : { value: "{color.neutral-50.value}", attributes: { category: "color" } },
    "color-negative"    : { value: "{color.negative-70.value}", attributes: { category: "color" } },
    "color-positive"    : { value: "{color.positive-70.value}", attributes: { category: "color" } },
    "color-warning"     : { value: "{color.warning-70.value}", attributes: { category: "color" } },
    "color-interactive" : { value: "{color.interactive-70.value}", attributes: { category: "color" } },
  },

  /**
  * LINE
  * Straight lines, specifically not borders. Note that border tokens
  * reference these to maintain a consistent weight
  * ======================================================================== */
  line: {
    "width"        : { value: "1px", attributes: { category: "size", type: "lineWidth" } },
    "width-strong" : { value: "2px", attributes: { category: "size", type: "lineWidth" } }
  },

  /**
  * BORDER
  * The line around an element. Not the difference between line (above)
  * and border
  * ======================================================================== */
  border: {
    // Color
    "color"          : { value: "{color.neutral-20.value}", attributes: { category: "color" } },
    "color-strong"   : { value: "{color.neutral-30.value}", attributes: { category: "color" } },
    "color-x-strong" : { value: "{color.neutral-80.value}", attributes: { category: "color" } },
    // Width
    "width"          : { value: "{line.width.value}", attributes: { category: "size", type: "lineWidth" } },
    "width-strong"   : { value: "{line.width-strong.value}", attributes: { category: "size", type: "lineWidth" } },
    // Radius
    "radius"         : { value: "4px", attributes: { category: "size", type: "borderRadius" } },
    "radius-small"   : { value: "2px", attributes: { category: "size", type: "borderRadius" } },
    "radius-large"   : { value: "8px", attributes: { category: "size", type: "borderRadius" } },
    "radius-x-large" : { value: "12px", attributes: { category: "size", type: "borderRadius" } },
  },

  /**
  * INPUT
  * Generally form fields and their associated elements, but it may be apporpriate
  * to apply to other elements
  * ======================================================================== */
  input: {
    // Value
    "value-color"                  : { value: "{text.color.value}", attributes: { category: "color" } },
    "value-font-family"            : { value: '{body.family.value}', attributes: { category: "font", type: 'family' } },
    "value-font-weight-name"       : { value: '{body.weight-name.value}', attributes: { category: "font", type: 'name' } },
    "value-font-size"              : { value: '{body.size-medium.value}', attributes: { category: "size", type: 'font' } },
    "value-line-height"            : { value: '{body.size-medium-line-height.value}', attributes: { category: "size", type: 'lineHeight' } },
    // Label
    "label-color"                  : { value: "{text.color.value}", attributes: { category: "color" } },
    "label-font-family"            : { value: '{body.family.value}', attributes: { category: "font", type: 'family' } },
    "label-font-weight-name"       : { value: '{body.weight-strong-name.value}', attributes: { category: "font", type: 'name' } },
    "label-font-size"              : { value: '{body.size-small.value}', attributes: { category: "size", type: 'font' } },
    "label-line-height"            : { value: '{body.size-small-line-height.value}', attributes: { category: "size", type: 'lineHeight' } },
    // Placeholder
    "placeholder-color"            : { value: "{text.color-x-weak.value}", attributes: { category: "color" } },
    "placeholder-font-family"      : { value: '{body.family.value}', attributes: { category: "font", type: 'family' } },
    "placeholder-font-weight-name" : { value: '{body.weight-name.value}', attributes: { category: "font", type: 'name' } },
    "placeholder-font-size"        : { value: '{body.size-medium.value}', attributes: { category: "size", type: 'font' } },
    "placeholder-line-height"      : { value: '{body.size-medium-line-height.value}', attributes: { category: "size", type: 'lineHeight' } },
    // Border
    "border-color"                 : { value: "{border.color.value}", attributes: { category: "color" } },    
  },

  /**
  * HIGHLIGHT
  * Used to give a background color and suitable content color to a small area,
  * such as a notification banner, or a trend icon in data visualisation
  * ======================================================================== */
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

  /**
  * BUTTON
  * Self explanatory. Note that the default style has borders defined which match its
  * background. This is to allow for themeing.
  * ======================================================================== */
  button: {
    // Common
    "font-family"            : { value: '{body.family.value}', attributes: { category: "font", type: 'family' } },
    "font-weight-name"       : { value: '{body.weight-strong-name.value}', attributes: { category: "font", type: 'name' } },
    // Small size
    "small-font-size"        : { value: '{body.size-small.value}', attributes: { category: "size", type: 'font' } },
    "small-line-height"      : { value: '{body.size-small-line-height.value}', attributes: { category: "size", type: 'lineHeight' } },
    // Medium size
    "medium-font-size"       : { value: '{body.size-medium.value}', attributes: { category: "size", type: 'font' } },
    "medium-line-height"     : { value: '{body.size-medium-line-height.value}', attributes: { category: "size", type: 'lineHeight' } },
    // Large size
    "large-font-size"        : { value: '{body.size-large.value}', attributes: { category: "size", type: 'font' } },
    "large-line-height"      : { value: '{body.size-large-line-height.value}', attributes: { category: "size", type: 'lineHeight' } },
    // Default Style
    "color"                  : { value: "{color.neutral-10.value}", attributes: { category: "color" } },
    "color-hover"            : { value: "{color.neutral-20.value}", attributes: { category: "color" } },
    "color-pressed"          : { value: "{color.neutral-30.value}", attributes: { category: "color" } },
    "color-inverse"          : { value: "{text.color.value}", attributes: { category: "color" } },
    "border-color"           : { value: "{color.neutral-10.value}", attributes: { category: "color" } },
    "border-color-hover"     : { value: "{color.neutral-20.value}", attributes: { category: "color" } },
    "border-color-pressed"   : { value: "{color.neutral-30.value}", attributes: { category: "color" } },
    // Strong Style
    "strong-color"           : { value: "{color.neutral-70.value}", attributes: { category: "color" } },
    "strong-color-hover"     : { value: "{color.neutral-90.value}", attributes: { category: "color" } },
    "strong-color-pressed"   : { value: "{color.neutral-100.value}", attributes: { category: "color" } },
    "strong-color-inverse"   : { value: "{color.neutral-0.value}", attributes: { category: "color" } },
    // Negative Style
    "negative-color"         : { value: "{color.negative-60.value}", attributes: { category: "color" } },
    "negative-color-hover"   : { value: "{color.negative-70.value}", attributes: { category: "color" } },
    "negative-color-pressed" : { value: "{color.negative-80.value}", attributes: { category: "color" } },
    "negative-color-inverse" : { value: "{color.lightest.value}", attributes: { category: "color" } },
    // Positive Style
    "positive-color"         : { value: "{color.positive-60.value}", attributes: { category: "color" } },
    "positive-color-hover"   : { value: "{color.positive-70.value}", attributes: { category: "color" } },
    "positive-color-pressed" : { value: "{color.positive-80.value}", attributes: { category: "color" } },
    "positive-color-inverse" : { value: "{color.lightest.value}", attributes: { category: "color" } },
  },
  /**
  * SHADOW
  * ======================================================================== */
  shadow: {
    // Default
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
    // Bottom shadow
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
  }
};
