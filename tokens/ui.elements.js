/**
 * Here we make specific design decisions
 */

module.exports = {
  // General
  text: {
    color: {
      _: { value: "{text.color.5.value}", attributes: { category: "color" } },
      1: { value: "{color.neutral.1.value}", attributes: { category: "color" } },
      2: { value: "{color.neutral.12.value}", attributes: { category: "color" } },
      3: { value: "{color.neutral.13.value}", attributes: { category: "color" } },
      4: { value: "{color.neutral.14.value}", attributes: { category: "color" } },
      5: { value: "{color.neutral.15.value}", attributes: { category: "color" } },
    },
  },
  line: {
    width: {
      _: { value: "{line.width.1.value}", attributes: { category: 'size', type: 'lineWidth' } },
      1: { value: "1px", attributes: { category: 'size', type: 'lineWidth' } },
      2: { value: "2px", attributes: { category: 'size', type: 'lineWidth' } },
      3: { value: "4px", attributes: { category: 'size', type: 'lineWidth' } },
    },
  },
  border: {
    color: {
      _: { value: "{border.color.3.value}", attributes: { category: "color" } },
      1: { value: "{color.neutral.2.value}", attributes: { category: "color" } },
      2: { value: "{color.neutral.4.value}", attributes: { category: "color" } },
      3: { value: "{color.neutral.6.value}", attributes: { category: "color" } },
      4: { value: "{color.neutral.8.value}", attributes: { category: "color" } },
    },
    width: {
      _: { value: "{border.width.1.value}", attributes: { category: 'size', type: 'border' } },
      1: { value: "{line.width.1.value}", attributes: { category: 'size', type: 'border' } },
      2: { value: "{line.width.2.value}", attributes: { category: 'size', type: 'border' } },
      3: { value: "{line.width.3.value}", attributes: { category: 'size', type: 'border' } },
    },
    radius: {
      _: { value: "{border.radius.1.value}", attributes: { category: 'size', type: 'borderRadius' } },
      1: { value: "2px", attributes: { category: 'size', type: 'borderRadius' } },
      2: { value: "4px", attributes: { category: 'size', type: 'borderRadius' } },
      3: { value: "8px", attributes: { category: 'size', type: 'borderRadius' } },
    },
  },
  shadow: {
    _: { value: "{shadow.medium._.value}", attributes: { category: "shadow" } },
    large: {
      _: { value: "0 25px 80px 0 {shadow.large.color.value}", attributes: { category: "shadow" } },
      color: {
        value: "{color.neutral.15.value}",
        attributes: { category: 'color', type: "shadow" },
        modify: [{ type: "alpha", amount: 0.4 }]
      },
    },
    medium: {
      _: { value: "0 3px 10px 0 {shadow.medium.color.value}", attributes: { category: "shadow" } },
      top: { value: "0 -10px 10px -5px {shadow.medium.color.value}", attributes: { category: "shadow" } },
      bottom: { value: "0 10px 10px -5px {shadow.medium.color.value}", attributes: { category: "shadow" } },
      color: {
        value: "{color.neutral.15.value}",
        attributes: { category: 'color', type: "shadow" },
        modify: [{ type: "alpha", amount: 0.1}]
      },
    },
  },
  // Components
  tooltip: {
    background: {
      color: { value: "{color.inverse._.value}", attributes: { category: "color" } },
    },
  },
  checkbox: {
    border: {
      width: { value: "{border.width.2.value}", attributes: { category: "size", type: "border" } },
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
