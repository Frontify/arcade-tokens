module.exports = {
  body: {
    // FAMILY
    "family"                       : { value: "{font.space-grotesk.value}", attributes: { category: "font", type: 'family' } },
    "family-stack"                 : { value: [ "{body.family.value}", "Arial", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" ] },
    // WEIGHTS
    "weight-number"                : { value: "{font.space-grotesk-regular-weight-name.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-name-strong"           : { value: "{font.space-grotesk-regular-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-number-strong"         : { value: "{font.space-grotesk-medium-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-name-strong"           : { value: "{font.space-grotesk-medium-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-numberXStrong"         : { value: "{font.space-grotesk-bold-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-nameXStrong"           : { value: "{font.space-grotesk-bold-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    // SMALL
    "size-small"                   : { value: 0.875, attributes: { category: "size", type: "font" } },
    "size-small-line-height"       : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    "size-small-line-height-long"  : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // MEDIUM
    "size-medium"                  : { value: 1, attributes: { category: "size", type: "font" } },
    "size-medium-line-height"      : { value: 1.25, attributes: { category: "size", type: "lineHeight" } },
    "size-medium-line-height-long" : { value: 2, attributes: { category: "size", type: "lineHeight" } },
    // LARGE
    "size-large"                    : { value: 1.125, attributes: { category: "size", type: "font" } },
    "size-large-line-height"        : { value: 1.5, attributes: { category: "size", type: "lineHeight" } },
    "size-large-line-height-long"   : { value: 2, attributes: { category: "size", type: "lineHeight" } },
  },
  heading: {
    // FAMILY
    "family"                       : { value: "{body.family}", attributes: { category: "font", type: 'family' } },
    "family-stack"                 : { value: "{body.family-stack}" },
    // WEIGHTS
    "weight-number"                : { value: "{font.space-grotesk-medium-weight-name.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-name"                  : { value: "{font.space-grotesk-medium-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-strong-number"         : { value: "{font.space-grotesk-bold-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-strong-name"           : { value: "{font.space-grotesk-bold-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    // SMALL
    "size-small"                   : { value: "{body.size-small.value}", attributes: { category: "size", type: "font" } },
    "size-small-line-height"       : { value: "{body.size-small-line-height.value}", attributes: { category: "size", type: "lineHeight" } },
    "size-small-line-height-long"  : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // MEDIUM
    "size-medium"                  : { value: "{body.size-medium.value}", attributes: { category: "size", type: "font" } },
    "size-medium-line-height"      : { value: "{body.size-medium-line-height.value}", attributes: { category: "size", type: "lineHeight" } },
    "size-medium-line-height-long" : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // LARGE
    "size-large"                   : { value: "{body.size-large.value}", attributes: { category: "size", type: "font" } },
    "size-large-line-height"       : { value: "{body.size-large-line-height.value}", attributes: { category: "size", type: "lineHeight" } },
    "size-large-line-height-long"  : { value: 1, attributes: { category: "size", type: "lineHeight" } },
  },
  code: {
    // FAMILY
    "family"                       : { value: "{font.menlo.value}", attributes: { category: "font", type: 'family' } },
    "family-stack"                 : { value: ["{code.family.value}", "Courier", "monospace"] },
    // WEIGHTS
    "weight-number"                : { value: "{font.menlo-regular-weight-name.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-name"                  : { value: "{font.menlo-regular-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-number-strong"         : { value: "{font.menlo-regular-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-name-strong"           : { value: "{font.menlo-regular-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    // SMALL
    "size-small"                   : { value: 1, attributes: { category: "size", type: "font" } },
    "size-small-line-height"       : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    "size-small-line-height-long"  : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // MEDIUM
    "size-medium"                  : { value: 2, attributes: { category: "size", type: "font" } },
    "size-medium-line-height"      : { value: 2, attributes: { category: "size", type: "lineHeight" } },
    "size-medium-line-height-long" : { value: 2, attributes: { category: "size", type: "lineHeight" } },
    // LARGE
    "size-large"                    : { value: 2, attributes: { category: "size", type: "font" } },
    "size-large-line-height"        : { value: 2, attributes: { category: "size", type: "lineHeight" } },
    "size-large-line-height-long"   : { value: 2, attributes: { category: "size", type: "lineHeight" } },
  }
};
