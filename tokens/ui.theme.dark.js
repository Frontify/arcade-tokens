module.exports = {
  color: {
    neutral: {
      0   : { value: "{color.grey.100.value}" },
      5   : { value: "{color.grey.90.value}" },
      10  : { value: "{color.grey.80.value}" },
      20  : { value: "{color.grey.70.value}" },
      30  : { value: "{color.grey.60.value}" },
      40  : { value: "{color.grey.50.value}" },
      50  : { value: "{color.grey.40.value}" },
      60  : { value: "{color.grey.30.value}" },
      70  : { value: "{color.grey.20.value}" },
      80  : { value: "{color.grey.10.value}" },
      90  : { value: "{color.grey.5.value}" },
      100 : { value: "{color.grey.0.value}" },
    },
  },
  base: {
    color: { value: "{color.neutral.10.value}", attributes: { category: 'color' } },
  },
  text: {
    color: {
      _    : { value: "{color.neutral.100.value}", attributes: { category: 'color' } },
      weak : { value: "{color.neutral.60.value}", attributes: { category: 'color' } },
    },
  },
  border: {
    color: {
      _       : { value: "{color.neutral.20.value}", attributes: { category: 'color' } },
      strong  : { value: "{color.neutral.30.value}", attributes: { category: 'color' } },
      xStrong : { value: "{color.neutral.100.value}", attributes: { category: 'color' } },
    },
  },
  shadow: {
    _               : { value: "0 3px 10px 0 {shadow.color.value}" },
    top             : { value: "0 -10px 10px -5px {shadow.color.value}" },
    bottom          : { value: "0 10px 10px -5px {shadow.color.value}" },
    color: {
      value         : "{color.darkest.value}",
      attributes    : { category: 'color' },
      modify        : [{ type: "alpha", amount: 1}]
    },
    large: {
      _             : { value: "0 25px 80px 0 {shadow.large.color.value}" },
      color: {
        value       : "{color.darkest.value}",
        attributes  : { category: 'color' },
        modify      : [{ type: "alpha", amount: 1 }]
      },
    },
  },
  input: {
    placeholder: {
      color: { value: "{color.neutral.50.value}", attributes: { category: "color" }}
    },
  },
};
