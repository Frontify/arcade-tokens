/**
* CODE
* Text elements that represent code.
* ======================================================================== */

module.exports = {
  code: {
    // Family
    "family"                       : { value: "{font.menlo.value}", attributes: { category: "font", type: 'family' } },
    "family-stack"                 : { value: ["{code.family.value}", "Courier", "monospace"] },
    // Weights
    "weight-name"                  : { value: "{font.menlo-regular-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-number"                : { value: "{font.menlo-regular-weight-name.value}", attributes: { category: 'font', type: 'weight' } },
    "weight-strong-name"           : { value: "{font.menlo-bold-weight-name.value}", attributes: { category: 'font', type: 'name' } },
    "weight-strong-number"         : { value: "{font.menlo-bold-weight-number.value}", attributes: { category: 'font', type: 'weight' } },
    // Small Size
    "size-small"                   : { value: 0.813, attributes: { category: "size", type: "font" } },
    "size-small-line-height"       : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // Medium Size
    "size-medium"                  : { value: 0.875, attributes: { category: "size", type: "font" } },
    "size-medium-line-height"      : { value: 1, attributes: { category: "size", type: "lineHeight" } },
    // Large Size
    "size-large"                   : { value: 1, attributes: { category: "size", type: "font" } },
    "size-large-line-height"       : { value: 1.25, attributes: { category: "size", type: "lineHeight" } },
    
    /**
    * STYLES
    * A bit repetitive but the easiest way to format the fonts for Figma
    * ======================================================================== */
     "small": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-small.value}",
        lineHeight: "{body.size-small-line-height.value}",
        fontWeight: "{body.weight-name.value}",
      },
      attributes: {
        category: 'font',
        type: 'style'
      }
    },
    "small-strong": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-small.value}",
        lineHeight: "{body.size-small-line-height.value}",
        fontWeight: "{body.weight-strong-name.value}",
      },
      attributes: {
        category: 'font',
        type: 'style'
      }
    },
    "small-x-strong": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-small.value}",
        lineHeight: "{body.size-small-line-height.value}",
        fontWeight: "{body.weight-x-strong-name.value}",
      },
      attributes: { category: 'font', type: 'style' }
    },
    "medium": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-medium.value}",
        lineHeight: "{body.size-medium-line-height.value}",
        fontWeight: "{body.weight-name.value}",
      },
      attributes: {
        category: 'font',
        type: 'style'
      }
    },
    "medium-strong": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-medium.value}",
        lineHeight: "{body.size-medium-line-height.value}",
        fontWeight: "{body.weight-strong-name.value}",
      },
      attributes: {
        category: 'font',
        type: 'style'
      }
    },
    "medium-x-strong": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-medium.value}",
        lineHeight: "{body.size-medium-line-height.value}",
        fontWeight: "{body.weight-x-strong-name.value}",
      },
      attributes: { category: 'font', type: 'style' }
    },
    "large": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-large.value}",
        lineHeight: "{body.size-large-line-height.value}",
        fontWeight: "{body.weight-name.value}",
      },
      attributes: {
        category: 'font',
        type: 'style'
      }
    },
    "large-strong": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-large.value}",
        lineHeight: "{body.size-large-line-height.value}",
        fontWeight: "{body.weight-strong-name.value}",
      },
      attributes: {
        category: 'font',
        type: 'style'
      }
    },
    "large-x-strong": {
      value: {
        fontFamily: "{body.family.value}",
        fontSize: "{body.size-large.value}",
        lineHeight: "{body.size-large-line-height.value}",
        fontWeight: "{body.weight-x-strong-name.value}",
      },
      attributes: { category: 'font', type: 'style' }
    },
  },
};
