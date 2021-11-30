/**
* HIGHLIGHT
* An element that should be highlighted in contrast to its surrounding elements.
* Generally used for active and hover states, and colored notifications/banners
* ======================================================================== */

module.exports = {
  highlight: {
    // Default
    "color"                     : { value: "{color.grey.10.value}", attributes: { category: "color" } },
    "color-inverse"             : { value: "{color.grey.100.value}", attributes: { category: "color" } },
    // Negative
    "negative-color"            : { value: "{color.red.10.value}", attributes: { category: "color" } },
    "negative-color-inverse"    : { value: "{color.red.80.value}", attributes: { category: "color" } },
    // Positive
    "positive-color"            : { value: "{color.green.10.value}", attributes: { category: "color" } },
    "positive-color-inverse"    : { value: "{color.green.90.value}", attributes: { category: "color" } },
    // Warning
    "warning-color"             : { value: "{color.yellow.10.value}", attributes: { category: "color" } },
    "warning-color-inverse"     : { value: "{color.yellow.90.value}", attributes: { category: "color" } },
    // Informative
    "interactive-color"         : { value: "{color.violet.10.value}", attributes: { category: "color" } },
    "interactive-color-inverse" : { value: "{color.violet.80.value}", attributes: { category: "color" } },
    // Strong
    "strong-color"              : { value: "{color.grey.80.value}", attributes: { category: "color" } },
    "strong-color-inverse"      : { value: "{color.grey.0.value}", attributes: { category: "color" } },
  },
};
