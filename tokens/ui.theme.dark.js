module.exports = {
  color: {
    "neutral-0"   : { value: "{color.grey-100.value}" },
    "neutral-5"   : { value: "{color.grey-90.value}" },
    "neutral-10"  : { value: "{color.grey-80.value}" },
    "neutral-20"  : { value: "{color.grey-70.value}" },
    "neutral-30"  : { value: "{color.grey-60.value}" },
    "neutral-40"  : { value: "{color.grey-50.value}" },
    "neutral-50"  : { value: "{color.grey-40.value}" },
    "neutral-60"  : { value: "{color.grey-30.value}" },
    "neutral-70"  : { value: "{color.grey-20.value}" },
    "neutral-80"  : { value: "{color.grey-10.value}" },
    "neutral-90"  : { value: "{color.grey-5.value}" },
    "neutral-100" : { value: "{color.grey-0.value}" },
  },
  base: {
    "color" : { value: "{color.neutral-10.value}", attributes: { category: 'color' } },
  },
  text: {
    "color"      : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
    "color-weak" : { value: "{color.neutral-60.value}", attributes: { category: 'color' } },
  },
  border: {
    "color"          : { value: "{color.neutral-20.value}", attributes: { category: 'color' } },
    "color-strong"   : { value: "{color.neutral-30.value}", attributes: { category: 'color' } },
    "color-x-strong" : { value: "{color.neutral-100.value}", attributes: { category: 'color' } },
  },
  input: {
    "placeholder-color" : { value: "{color.neutral-50.value}", attributes: { category: "color" } }
  },
  shadow: {
    "color"       : { value: "{color.darkest.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.5 }] },
    "large-color" : { value: "{color.darkest.value}", attributes: { category: "color", type: "shadow" }, modify: [{ type: "alpha", amount: 0.9 }] },
  },
};
