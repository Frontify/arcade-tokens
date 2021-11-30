/**
* BODY
* Default text elements. Everything except headings and code
* ======================================================================== */

module.exports = {
  body: {
    // Family
    "family"                       : { value: "{font.space-grotesk.value}", attributes: { category: "font", type: 'family' } },
    "family-stack"                 : { value: [ "{body.family.value}", "Arial", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ] },
    // Weights
    "weight-name"                  : { value: "{font.space-grotesk-regular-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-number"                : { value: "{font.space-grotesk-regular-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-strong-name"           : { value: "{font.space-grotesk-medium-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-strong-number"         : { value: "{font.space-grotesk-medium-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-x-strong-name"         : { value: "{font.space-grotesk-bold-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-x-strong-number"       : { value: "{font.space-grotesk-bold-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    // Small Size
    "size-small"                   : { value: 0.813, attributes: { category: "size", type: "font" } },
    "size-small-line-height"       : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // Medium Size
    "size-medium"                  : { value: 0.875, attributes: { category: "size", type: "font" } },
    "size-medium-line-height"      : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // Large Size
    "size-large"                   : { value: 1, attributes: { category: "size", type: "font" } },
    "size-large-line-height"       : { value: 1.25, attributes: { category: "size", type: "lineHeight" } },
  }
};
