/**
* LINE
* Any thin line used as a border or divider
* ======================================================================== */

module.exports = {
  line: {
    // Color
    "color-weak"      : { value: "{color.grey.0.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.05 }] },
    "color"           : { value: "{color.grey.0.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.1 }] },
    "color-strong"    : { value: "{color.grey.0.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.15 }] },
    "color-x-strong"  : { value: "{color.grey.0.value}", attributes: { category: "color" }, modify: [{ type: "alpha", amount: 0.3 }] },
    "color-xx-strong" : { value: "{color.grey.0.value}", attributes: { category: "color" } },
  },
};
