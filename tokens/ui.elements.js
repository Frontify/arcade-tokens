/**
 * Here we make specific design decisions
 */

module.exports = {
  // General
  base: {
    color: { value: "{color.grey.0.value}" },
  },
  text: {
    color: {
      _    : { value: "{color.neutral.80.value}" },
      weak : { value: "{color.neutral.60.value}" },
    },
  },
  line: {
    width: {
      _      : { value: "1px" },
      strong : { value: "2px" },
    },
  },
  border: {
    color: {
      _       : { value: "{color.neutral.20.value}" },
      strong  : { value: "{color.neutral.30.value}" },
      xStrong : { value: "{color.neutral.80.value}" },
    },
    width: {
      _      : { value: "{line.width._.value}" },
      strong : { value: "{line.width.strong.value}" },
    },
    radius: {
      _      : { value: "4px" },
      small  : { value: "2px" },
      large  : { value: "8px" },
      xLarge : { value: "12px" },
    },
  },
  shadow: {
    _          : { value: "0 3px 10px 0 {shadow.color.value}" },
    top        : { value: "0 -10px 10px -5px {shadow.color.value}" },
    bottom     : { value: "0 10px 10px -5px {shadow.color.value}" },
    color      : {
      value      : "{color.darkest.value}",
      attributes : { category: 'color' },
      modify     : [{ type: "alpha", amount: 0.1}]
    },
    large      : {
      _          : { value: "0 25px 80px 0 {shadow.large.color.value}" },
      color      : {
        value      : "{color.darkest.value}",
        attributes : { category: 'color' },
        modify     : [{ type: "alpha", amount: 0.4 }]
      },
    },
  },
  // Components
  checkbox: {
    border: {
      width: { value: "{border.width.strong.value}" },
    },
  },
  button: {
    font: {
      weight: { value: "{body.weight.1.value}", attributes: { category: "font", type: "weight" } },
    },
  },
  input: {
    border: {
      color: { value: "{border.color._.value}", attributes: { category: "color" }  },
    },
    label: {
      color: { value: "{text.color._.value}", attributes: { category: "color" }  },
    },
  },
};
