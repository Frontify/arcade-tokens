/**
* LINE
* Any thin line used as a border or divider
* ======================================================================== */

module.exports = {
  line: {
    // Color
    "color-weak"      : { value: "{color.darkest.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.05 }] },
    "color"           : { value: "{color.darkest.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.1 }] },
    "color-strong"    : { value: "{color.darkest.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.15 }] },
    "color-x-strong"  : { value: "{color.darkest.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.3 }] },
    "color-xx-strong" : { value: "{color.neutral.80.value}", attributes: { category: "color" } },
    // Width
    "width"           : { value: 0.063, attributes: { category: "size", type: "lineWidth" } },
    "width-large"     : { value: 0.125, attributes: { category: "size", type: "lineWidth" } },
    // Radius
    "radius"          : { value: 0.25, attributes: { category: "size", type: "borderRadius" } },
    "radius-small"    : { value: 0.125, attributes: { category: "size", type: "borderRadius" } },
    "radius-large"    : { value: 0.5, attributes: { category: "size", type: "borderRadius" } },
    "radius-x-large"  : { value: 0.75, attributes: { category: "size", type: "borderRadius" } },
  },
};
