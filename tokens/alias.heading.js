/**
* HEADING
* Text elements used as headings, such as those in Flyouts, Modals or 
* any sort of list section heading.
* ======================================================================== */

module.exports = {
  heading: {
    // Family
    "family"                   : { value: "{body.family.value}", attributes: { category: "font", type: 'family' } },
    "family-stack"             : { value: "{body.family-stack.value}" },
    // Weights
    "weight-name"              : { value: "{font.space-grotesk-medium-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-number"            : { value: "{font.space-grotesk-medium-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-strong-name"       : { value: "{font.space-grotesk-bold-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-strong-number"     : { value: "{font.space-grotesk-bold-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    // Medium Size
    "size-medium"              : { value: "{body.size-medium.value}", attributes: { category: "size", type: "font" } },
    "size-medium-line-height"  : { value: "{body.size-medium-line-height.value}", attributes: { category: "size", type: "lineHeight" } },
    // Large Size
    "size-large"               : { value: "{body.size-large.value}", attributes: { category: "size", type: "font" } },
    "size-large-line-height"   : { value: "{body.size-large-line-height.value}", attributes: { category: "size", type: "lineHeight" } },
    // X-Large Size
    "size-x-large"             : { value: 1.5, attributes: { category: "size", type: "font" } },
    "size-x-large-line-height" : { value: 1.75, attributes: { category: "size", type: "lineHeight" } },
  }
};
