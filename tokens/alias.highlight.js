/**
* HIGHLIGHT
* An element that should be highlighted in contrast to its surrounding elements.
* Generally used for active and hover states, and colored notifications/banners
* ======================================================================== */

module.exports = {
  highlight: {
    // Default
    "color"                     : { value: "{color.neutral.10.value}", attributes: { category: "color" } },
    "color-inverse"             : { value: "{text.color.value}", attributes: { category: "color" } },
    // Negative
    "negative-color"            : { value: "{color.negative.10.value}", attributes: { category: "color" } },
    "negative-color-inverse"    : { value: "{color.negative.80.value}", attributes: { category: "color" } },
    // Positive
    "positive-color"            : { value: "{color.positive.10.value}", attributes: { category: "color" } },
    "positive-color-inverse"    : { value: "{color.positive.90.value}", attributes: { category: "color" } },
    // Warning
    "warning-color"             : { value: "{color.warning.10.value}", attributes: { category: "color" } },
    "warning-color-inverse"     : { value: "{color.warning.90.value}", attributes: { category: "color" } },
    // Informative
    "interactive-color"         : { value: "{color.interactive.10.value}", attributes: { category: "color" } },
    "interactive-color-inverse" : { value: "{color.interactive.80.value}", attributes: { category: "color" } },
    // Strong
    "strong-color"              : { value: "{color.neutral.80.value}", attributes: { category: "color" } },
    "strong-color-inverse"      : { value: "{color.neutral.0.value}", attributes: { category: "color" } },
  },
};
