/**
 * Here we make specific design decisions
 */

module.exports = {
  // General
  text: {
    color: {
      _: { value: "{text.color.5.value}" },
      1: { value: "{color.neutral.1.value}" },
      2: { value: "{color.neutral.12.value}" },
      3: { value: "{color.neutral.13.value}" },
      4: { value: "{color.neutral.14.value}" },
      5: { value: "{color.neutral.15.value}" },
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
      _: { value: "{border.color.3.value}" },
      1: { value: "{color.neutral.2.value}" },
      2: { value: "{color.neutral.4.value}" },
      3: { value: "{color.neutral.6.value}" },
      4: { value: "{color.neutral.8.value}" },
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
        value: "{color.neutral.15.value}",
        attributes: { category: 'color' },
        modify: [{ type: "alpha", amount: 0.4 }]
      },
    },
    medium: {
      _: { value: "0 3px 10px 0 {shadow.medium.color.value}" },
      top: { value: "0 -10px 10px -5px {shadow.medium.color.value}" },
      bottom: { value: "0 10px 10px -5px {shadow.medium.color.value}" },
      color: {
        value: "{color.neutral.15.value}",
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
