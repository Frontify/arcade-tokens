/**
* LINE
* Any thin line used as a border or divider
* ======================================================================== */

module.exports = {
  line: {
    // Color
    "color"           : { value: "{color.grey.100.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.1 }] },
    "color-weak"      : { value: "{color.grey.100.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.03 }] },
    "color-strong"    : { value: "{color.grey.100.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.15 }] },
    "color-x-strong"  : { value: "{color.grey.100.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.3 }] },
    "color-xx-strong" : { value: "{color.grey.80.value}", attributes: { category: "color" } },
    // Width
    "width"           : { value: 0.063, attributes: { category: "size", type: "lineWidth" } },
    "width-large"     : { value: 0.125, attributes: { category: "size", type: "lineWidth" } },
  },
};
