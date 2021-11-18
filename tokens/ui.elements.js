/**
 * Here we make specific design decisions
 */

module.exports = {
  // General
  base: {
    color: { value: "{color.neutral.0.value}", attributes: { category: 'color' } },
  },
  text: {
    color: {
      _    : { value: "{color.neutral.80.value}", attributes: { category: 'color' } },
      weak : { value: "{color.neutral.60.value}", attributes: { category: 'color' } },
    },
  },
  line: {
    width: {
      _      : { value: "1px", attributes: { category: 'size', type: 'lineWidth' } },
      strong : { value: "2px", attributes: { category: 'size', type: 'lineWidth' } },
    },
  },
  border: {
    color: {
      _       : { value: "{color.neutral.20.value}", attributes: { category: 'color' } },
      strong  : { value: "{color.neutral.30.value}", attributes: { category: 'color' } },
      xStrong : { value: "{color.neutral.80.value}", attributes: { category: 'color' } },
    },
    width: {
      _      : { value: "{line.width._.value}", attributes: { category: 'size', type: 'lineWidth' } },
      strong : { value: "{line.width.strong.value}", attributes: { category: 'size', type: 'lineWidth' } },
    },
    radius: {
      _      : { value: "4px", attributes: { category: 'size', type: 'borderRadius' } },
      small  : { value: "2px", attributes: { category: 'size', type: 'borderRadius' } },
      large  : { value: "8px", attributes: { category: 'size', type: 'borderRadius' } },
      xLarge : { value: "12px", attributes: { category: 'size', type: 'borderRadius' } },
    },
  },
  shadow: {
    _               : { value: "0 3px 10px 0 {shadow.color.value}" },
    top             : { value: "0 -10px 10px -5px {shadow.color.value}" },
    bottom          : { value: "0 10px 10px -5px {shadow.color.value}" },
    color: {
      value         : "{color.darkest.value}",
      attributes    : { category: 'color' },
      modify        : [{ type: "alpha", amount: 0.1}]
    },
    large: {
      _             : { value: "0 25px 80px 0 {shadow.large.color.value}" },
      color: {
        value       : "{color.darkest.value}",
        attributes  : { category: 'color' },
        modify      : [{ type: "alpha", amount: 0.4 }]
      },
    },
  },
  // Components
  checkbox: {
    border: {
      width: { value: "{border.width.strong.value}", attributes: { category: 'size', type: 'lineWidth' } },
    },
  },
  button: {
    font: {
      weight: { value: "{body.weight.1.value}", attributes: { category: "font", type: "weight" } },
    },
  },
  input: {
    placeholder: {
      color: { value: "{color.neutral.50.value}", attributes: { category: "color" }}
    },
    border: {
      color: { value: "{border.color._.value}", attributes: { category: "color" } },
    },
    label: {
      color: { value: "{text.color._.value}", attributes: { category: "color" } },
    },
  },
};
