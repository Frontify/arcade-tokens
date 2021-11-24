module.exports = {
  body: {
    // FAMILY
    "family"                       : { value: "{font.space-grotesk.value}", attributes: { category: "font", type: 'family' } },
    "family-stack"                 : { value: [ "{body.family.value}", "Arial", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ] },
    // WEIGHTS
    "weight-name"                  : { value: "{font.space-grotesk-regular-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-number"                : { value: "{font.space-grotesk-regular-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-strong-name"           : { value: "{font.space-grotesk-medium-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-strong-number"         : { value: "{font.space-grotesk-medium-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-x-strong-name"         : { value: "{font.space-grotesk-bold-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-x-strong-number"       : { value: "{font.space-grotesk-bold-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    // SMALL
    "size-small"                   : { value: 0.813, attributes: { category: "size", type: "font" } },
    "size-small-line-height"       : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // MEDIUM
    "size-medium"                  : { value: 0.875, attributes: { category: "size", type: "font" } },
    "size-medium-line-height"      : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // LARGE
    "size-large"                   : { value: 1, attributes: { category: "size", type: "font" } },
    "size-large-line-height"       : { value: 1.25, attributes: { category: "size", type: "lineHeight" } },
  },
  heading: {
    // FAMILY
    "family"                   : { value: "{body.family.value}", attributes: { category: "font", type: 'family' } },
    "family-stack"             : { value: "{body.family-stack.value}" },
    // WEIGHTS
    "weight-name"              : { value: "{font.space-grotesk-medium-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-number"            : { value: "{font.space-grotesk-medium-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-strong-name"       : { value: "{font.space-grotesk-bold-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-strong-number"     : { value: "{font.space-grotesk-bold-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    // MEDIUM
    "size-medium"              : { value: "{body.size-medium.value}", attributes: { category: "size", type: "font" } },
    "size-medium-line-height"  : { value: "{body.size-medium-line-height.value}", attributes: { category: "size", type: "lineHeight" } },
    // LARGE
    "size-large"               : { value: "{body.size-large.value}", attributes: { category: "size", type: "font" } },
    "size-large-line-height"   : { value: "{body.size-large-line-height.value}", attributes: { category: "size", type: "lineHeight" } },
    // X-LARGE
    "size-x-large"             : { value: 1.5, attributes: { category: "size", type: "font" } },
    "size-x-large-line-height" : { value: 1.75, attributes: { category: "size", type: "lineHeight" } },
  },
  code: {
    // FAMILY
    "family"                       : { value: "{font.menlo.value}", attributes: { category: "font", type: 'family' } },
    "family-stack"                 : { value: ["{code.family.value}", "Courier", "monospace"] },
    // WEIGHTS
    "weight-name"                  : { value: "{font.menlo-regular-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-number"                : { value: "{font.menlo-regular-weight-name.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-strong-name"           : { value: "{font.menlo-bold-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-strong-number"         : { value: "{font.menlo-bold-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    // SMALL
    "size-small"                   : { value: 0.813, attributes: { category: "size", type: "font" } },
    "size-small-line-height"       : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // MEDIUM
    "size-medium"                  : { value: 0.875, attributes: { category: "size", type: "font" } },
    "size-medium-line-height"      : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // LARGE
    "size-large"                   : { value: 1, attributes: { category: "size", type: "font" } },
    "size-large-line-height"       : { value: 1.25, attributes: { category: "size", type: "lineHeight" } },
  }
};
