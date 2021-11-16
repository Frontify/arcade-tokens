/**
 * Here we make specific design decisions
 */

module.exports = {
  // General
  text: {
    color: {
      _: { value: "{text.color.50.value}" },
      10: { value: "{color.neutral.10.value}" },
      20: { value: "{color.neutral.120.value}" },
      30: { value: "{color.neutral.130.value}" },
      40: { value: "{color.neutral.140.value}" },
      50: { value: "{color.neutral.150.value}" },
    },
  },
  line: {
    width: {
      _: { value: "{line.width.1.value}" },
      1: { value: "1px" },
      2: { value: "2px" },
      3: { value: "4px" },
    },
  },
  border: {
    color: {
      _: { value: "{border.color.30.value}" },
      10: { value: "{color.neutral.20.value}" },
      20: { value: "{color.neutral.40.value}" },
      30: { value: "{color.neutral.60.value}" },
      40: { value: "{color.neutral.80.value}" },
    },
    width: {
      _: { value: "{border.width.1.value}" },
      1: { value: "{line.width.1.value}" },
      2: { value: "{line.width.2.value}" },
      3: { value: "{line.width.3.value}" },
    },
    radius: {
      _: { value: "{border.radius.1.value}" },
      1: { value: "2px" },
      2: { value: "4px" },
      3: { value: "8px" },
    },
  },
  shadow: {
    _: { value: "{shadow.medium._.value}" },
    large: {
      _: { value: "0 25px 80px 0 {shadow.large.color.value}" },
      color: {
        value: "{color.neutral.150.value}",
        attributes: { category: 'color' },
        modify: [{ type: "alpha", amount: 0.4 }]
      },
    },
    medium: {
      _: { value: "0 3px 10px 0 {shadow.medium.color.value}" },
      top: { value: "0 -10px 10px -5px {shadow.medium.color.value}" },
      bottom: { value: "0 10px 10px -5px {shadow.medium.color.value}" },
      color: {
        value: "{color.neutral.150.value}",
        attributes: { category: 'color' },
        modify: [{ type: "alpha", amount: 0.1}]
      },
    },
  },
  // Components
  tooltip: {
    background: {
      color: { value: "{color.inverse._.value}" },
    },
  },
  checkbox: {
    border: {
      width: { value: "{border.width.2.value}" },
    },
  },
  button: {
    font: {
      weight: { value: "{body.weight.1.value}" },
    },
  },
  input: {
    border: {
      color: { value: "{border.color._.value}" },
    },
    label: {
      color: { value: "{text.color._.value}" },
    },
  },
};
