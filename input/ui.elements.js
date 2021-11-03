/**
 * Here we make specific design decisions
 */

module.exports = {
  text: {
    color: {
      _: { value: "{text.color.5.value}" },
      1: { value: "{color.neutral.1.value}" },
      2: { value: "{color.neutral.12.value}" },
      3: { value: "{color.neutral.13.value}" },
      4: { value: "{color.neutral.14.value}" },
      5: { value: "{color.neutral.15.value}" },
    },
    font: {
      _: { value: "{text.font.family.value}" },
      family: { value: "{font.spaceGrotesk._.value}" },
      regular: { value: "{font.spaceGrotesk.regular._.value}" },
      medium: { value: "{font.spaceGrotesk.medium._.value}" },
      bold: { value: "{font.spaceGrotesk.bold._.value}" },
    },
    weight: {
      _: { value: "{text.weight.1.value}" },
      1: { value: "{font.spaceGrotesk.regular._.value}" },
      2: { value: "{font.spaceGrotesk.medium._.value}" },
      3: { value: "{font.spaceGrotesk.bold._.value}" },
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
      weight: { value: "{text.weight.1.value}" },
    },
  },
  input: {
    border: {
      color: { value: "{border.color._.value}" },
    },
    label: {
      color: { valie: "{text.color._.value}" },
    },
  },
};
